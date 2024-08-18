import React, { useState } from 'react';
import './CreateLegalDoc.css';

const Sidebar = () => {
    const [party1, setParty1] = useState('');
    const [party2, setParty2] = useState('');
    const [clauses, setClauses] = useState('');

    const handleGenerate = () => {
        // This is where you will later integrate with the model
        console.log('Generating document with:', { party1, party2, clauses });
    };

    return (
        <div className="sidebar">
            <h3>Contract Details</h3>
            <label>Party 1:</label>
            <input 
                type="text" 
                value={party1} 
                onChange={(e) => setParty1(e.target.value)} 
            />

            <label>Party 2:</label>
            <input 
                type="text" 
                value={party2} 
                onChange={(e) => setParty2(e.target.value)} 
            />

            <label>Clauses:</label>
            <textarea 
                value={clauses} 
                onChange={(e) => setClauses(e.target.value)} 
            />

            <button onClick={handleGenerate} className="generate-btn">
                Generate
            </button>
        </div>
    );
};

export default Sidebar;
