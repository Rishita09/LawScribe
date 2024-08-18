// src/components/SummarizeDoc/SummarizeDoc.jsx
import React, { useState } from 'react';
import './SummarizeDoc.css';
import BottomBar from './BottomBar';

const SummarizeDoc = () => {
    const [pdfFile, setPdfFile] = useState(null);
    const [summary, setSummary] = useState('');
    const [showBottomBar, setShowBottomBar] = useState(false);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setPdfFile(file);
            setSummary(''); // Reset summary when a new file is uploaded
            setShowBottomBar(false); // Hide bottom bar until summary is generated
        }
    };

    const handleGenerateSummary = async () => {
        if (pdfFile) {
            // Replace this with actual API call to generate summary
            const text = await extractTextFromPDF(pdfFile);
            const generatedSummary = `Summary of the document: ${text.substring(0, 500)}...`; // Dummy summary
            setSummary(generatedSummary);
            setShowBottomBar(true); // Show bottom bar when summary is available
        }
    };

    const extractTextFromPDF = async (file) => {
        // Dummy text extraction function; replace with actual logic
        const text = 'This is a dummy text extraction result.';
        return text;
    };

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete the attached PDF and summary?')) {
            setPdfFile(null);
            setSummary('');
            setShowBottomBar(false);
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(summary);
        alert('Summary copied to clipboard');
    };

    return (
        <div className="summarize-doc-container">
            <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="file-input"
            />
            <button
                onClick={handleGenerateSummary}
                className="generate-summary-button"
                disabled={!pdfFile}
            >
                Generate Summary
            </button>
            {summary && (
                <div className="summary-box">
                    <p>{summary}</p>
                    <div className="actions">
                        <button onClick={handleCopy} className="copy-button">Copy</button>
                        <button onClick={handleDelete} className="delete-button">Delete</button>
                    </div>
                </div>
            )}
            {showBottomBar && <BottomBar />}
        </div>
    );
};

export default SummarizeDoc;
