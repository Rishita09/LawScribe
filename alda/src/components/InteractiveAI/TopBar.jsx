import React from 'react';
import './TopBar.css';
import { FaDownload, FaExpand, FaCompress, FaTrash } from 'react-icons/fa';

const TopBar = ({ onDownload, onToggleFullscreen, onDelete }) => {
    return (
        <div className="topbar-container">
            <FaDownload onClick={onDownload} title="Download Conversation" />
            <FaExpand onClick={onToggleFullscreen} title="Full Screen" />
            <FaTrash onClick={onDelete} title="Delete Conversation" />
            <FaCompress onClick={onToggleFullscreen} title="Exit Full Screen" />
        </div>
    );
};

export default TopBar;
