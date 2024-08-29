import React, { useState } from 'react';
import './SummarizeDoc.css';
import { FaCopy, FaTrash } from 'react-icons/fa'; // Import icons

const SummarizeDoc = () => {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleGenerateSummary = () => {
    // Logic to generate summary
    setSummary('Generated summary will appear here.');
  };

  const handleCopy = () => {
    // Logic to copy summary
  };

  const handleDelete = () => {
    // Logic to delete summary
    setSummary('');
  };

  return (
    <div className="summarize-doc-container">
      <div className="summary-box">
        <div className="actions">
          <FaCopy className="icon copy-icon" onClick={handleCopy} />
          <FaTrash className="icon delete-icon" onClick={handleDelete} />
        </div>
        <div className="summary-content">
          {summary || 'Your generated summary will appear here.'}
        </div>
      </div>
      <div className="file-actions">
        <input
          type="file"
          className="file-input"
          onChange={handleFileChange}
        />
        <button className="generate-summary-button" onClick={handleGenerateSummary}>
          Generate Summary
        </button>
      </div>
    </div>
  );
};

export default SummarizeDoc;
