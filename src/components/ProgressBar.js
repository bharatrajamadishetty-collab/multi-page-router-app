import { useEffect, useState } from "react";

function ProgressBar({ progress }) {
    return (
        <div
            style={{ color: "#d71616ff", width: `${progress}%` }}
        />
    );
}

export default function FileUploadWithProgress() {
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!file) return;

        setProgress(0);
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 10;
            });
        }, 300);

        return () => clearInterval(interval);
    }, [file]);

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px" }}>
            <h1>Show File Upload Progress</h1>
            <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
            />

            {file && (
                <>
                    <p>📎 {file.name}</p>
                    <ProgressBar progress={progress} />
                    <p style={{ color: "#d71616ff" }}>{progress}%</p>
                </>
            )}
        </div>
    );
}