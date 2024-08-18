import React, { useState } from 'react';
import './CreateLegalDoc.css';

const BottomBar = () => {
    const [instruction, setInstruction] = useState('');

    const handleSendInstruction = () => {
        // Logic to handle instruction submission
        console.log('Instruction:', instruction);
    };

    return (
        <div className="bottom-bar">
            <input 
                type="text" 
                placeholder="Enter instructions for modifications..."
                value={instruction} 
                onChange={(e) => setInstruction(e.target.value)} 
            />
            <button onClick={handleSendInstruction} className="send-btn">
                Send
            </button>
        </div>
    );
};

export default BottomBar;
