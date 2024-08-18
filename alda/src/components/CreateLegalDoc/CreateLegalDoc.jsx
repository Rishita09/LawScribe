import React from 'react';
import Sidebar from './Sidebar';
import BottomBar from './BottomBar';
import DocumentArea from './DocumentArea';
import './CreateLegalDoc.css';

const CreateLegalDoc = () => {
    return (
        <div className="create-legal-doc-container">
            <Sidebar />
            <div className="content-container">
                <DocumentArea />
                <BottomBar />
            </div>
        </div>
    );
};

export default CreateLegalDoc;
