import React from 'react';
import jsPDF from 'jspdf';
import './CreateLegalDoc.css';

const DocumentArea = () => {
    const handleDownload = () => {
        const doc = new jsPDF();
        doc.text("Your generated document content goes here", 10, 10);
        doc.save("document.pdf");
    };

    const handleDelete = () => {
       
        console.log('Document deleted');
    };

    return (
        <div className="document-area">
            <div className="document-content">

                <p>Your generated document content goes here...</p>
            </div>
            <div className="document-actions">
                <button onClick={handleDownload} className="action-btn download-btn">
                    Download
                </button>
                <button onClick={handleDelete} className="action-btn delete-btn">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default DocumentArea;
