import React, { useState } from 'react';
import './ChatBox.css';
import TopBar from './TopBar';
import jsPDF from 'jspdf';
import MessageArea from './MessageArea';

const ChatBox = () => {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [messages, setMessages] = useState([]);

    const handleDownload = () => {
        const doc = new jsPDF();
        doc.text("Your generated document content goes here", 10, 10);
        doc.save("document.pdf");
    };

    const toggleFullScreen = () => {
        setIsFullscreen(!isFullscreen);
        const chatBox = document.querySelector('.chatbox-container');
        if (isFullscreen) {
            chatBox.classList.remove('fullscreen');
        } else {
            chatBox.classList.add('fullscreen');
        }
    };

    const handleDelete = () => {
        setMessages([]);
        console.log('Conversation deleted');
    };

    return (
        <div className={`chatbox-container ${isFullscreen ? 'fullscreen' : ''}`}>
            <TopBar
                onDownload={handleDownload}
                onToggleFullscreen={toggleFullScreen}
                onDelete={handleDelete}
            />
            <MessageArea messages={messages} setMessages={setMessages} />
        </div>
    );
};

export default ChatBox;
