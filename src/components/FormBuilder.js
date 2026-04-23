import { useState } from "react";

function FormBuilder() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        file: null
    });

    const [errors, setErrors] = useState({});
    const [dragActive, setDragActive] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleFile = (file) => {
        if (file) {
            setFormData({ ...formData, file });
            setErrors({ ...errors, file: null });
        }
    };


    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        handleFile(e.dataTransfer.files[0]);
    };


    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.message) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        console.log("Form submitted:", formData);
        alert("Form submitted successfully ✅");

        setFormData({ name: "", email: "", message: "", file: null });
        setErrors({});
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px" }}>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "15px" }}>
                    <label>Name</label>
                    <input style={{ padding: "6px", margin: "10px" }}
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && (
                        <p style={{ color: "#d71616ff" }}>{errors.name}</p>
                    )}
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label>Email</label>
                    <input style={{ padding: "6px", margin: "10px" }}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && (
                        <p style={{ color: "#d71616ff" }}>{errors.email}</p>
                    )}
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label>Message</label>
                    <textarea style={{ margin: "5px" }}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                    />
                    {errors.message && (
                        <p style={{ color: "#d71616ff" }}>{errors.message}</p>
                    )}
                </div>


                {/* Drag and Drop File Upload */}
                <div style={{ padding: "10px", marginTop: "20px", margin: "10px" }}
                    onDragEnter={() => setDragActive(true)}
                    onDragLeave={() => setDragActive(false)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                >
                    <input
                        type="file"
                        id="file-upload"
                        onChange={(e) => handleFile(e.target.files[0])}
                    />
                    <label htmlFor="file-upload">
                        {formData.file ? (
                            <p>📎 {formData.file.name}</p>
                        ) : (
                            <p style={{ padding: "15px", margin: "20px", color: "#4707f6ff" }}>
                                Drag & drop a file here, or <span>browse</span>
                            </p>
                        )}
                    </label>
                </div>


                <div style={{ display: "flex", justifyContent: "center" }}>
                    <button type="submit" style={{ padding: "8px" }} >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default FormBuilder;