import { useState } from "react";
import "./styles/Modal.css"; // Create this CSS file for styling

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
                <button className="modal-close" onClick={onClose}>
                    ✖
                </button>
                {children}
            </div>
        </div>
    );
};

function Popup() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <h2>Popup Modal</h2>

            <button style={{ padding: "10px", margin: "10px" }} onClick={() => setIsOpen(true)}>Open Modal</button>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <h3>Custom Popup</h3>
                <p>Please read the Terms and Conditions.</p>
                <button style={{ padding: "10px", margin: "10px" }} onClick={() => setIsOpen(false)}>Close</button>
            </Modal>
        </div>
    );
}

export default Popup;