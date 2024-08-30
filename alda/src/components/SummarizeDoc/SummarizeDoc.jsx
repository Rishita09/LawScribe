import React, { useState } from 'react';
import './SummarizeDoc.css';
// import copyIcon from 'public/images/copy.png'; // Update with the correct path
// import deleteIcon from 'public/images/delete.png'; // Update with the correct path
// import sendIcon from 'public/images/send.png'; // Update with the correct path

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
    // Logic to copy summary to clipboard
    if (summary) {
      navigator.clipboard.writeText(summary);
      alert('Summary copied to clipboard!');
    }
  };

  const handleDelete = () => {
    // Logic to delete summary
    setSummary('');
  };

  return (
    <div className="summarize-doc-container">
      <div className="summary-box">
        <div className="actions">
          <img src='./images/copy.png' alt="Copy" className="icon copy-icon" onClick={handleCopy} />
          <img src='./images/delete.png' alt="Delete" className="icon delete-icon" onClick={handleDelete} />
        </div>
        <div className="summary-content">
          {summary || 'Your generated summary will appear here.'}
        </div>
      </div>
      <div className="file-actions">
        <div className="file-input-container">
          <label className="custom-file-upload">
            <img src="./images/attach.png" alt="Attach" className='icon'/>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
            />
            <span>{file ? file.name : 'Choose File'}</span>
          </label>
          <button className="generate-summary-button" onClick={handleGenerateSummary}>
            <img src='./images/send.png' alt="Send" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SummarizeDoc;
