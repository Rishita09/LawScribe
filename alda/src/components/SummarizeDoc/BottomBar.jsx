import React, { useState } from 'react';
import './BottomBar.css';

const BottomBar = () => {
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            console.log(`Question: ${input}`);
            setInput('');
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className="bottom-bar">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a question about the summary..."
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default BottomBar;
