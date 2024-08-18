// src/components/InteractiveAI/TopBar.jsx
import React, { useState } from 'react';
import './TopBar.css';
import { FaDownload, FaExpandArrowsAlt, FaTrashAlt, FaCompressArrowsAlt } from 'react-icons/fa';

const TopBar = ({ onDownload, onToggleFullscreen, onDelete }) => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const handleDownload = () => {
        onDownload();
    };

    const toggleFullScreen = () => {
        setIsFullscreen(!isFullscreen);
        onToggleFullscreen();
    };

    const handleDelete = () => {
        onDelete();
    };

    return (
        <div className="topbar-container">
            <FaDownload onClick={handleDownload} title="Download Conversation" />
            {isFullscreen ? (
                <FaCompressArrowsAlt onClick={toggleFullScreen} title="Exit Full Screen" />
            ) : (
                <FaExpandArrowsAlt onClick={toggleFullScreen} title="Full Screen" />
            )}
            <FaTrashAlt onClick={handleDelete} title="Delete Conversation" />
        </div>
    );
};

export default TopBar;
