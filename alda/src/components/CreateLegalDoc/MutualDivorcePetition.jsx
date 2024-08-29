import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import './MutualDivorcePetition.css';

const MutualDivorcePetition = () => {
    const [formData, setFormData] = useState({
        petitioner1Name: "",
        petitioner1Age: "",
        petitioner1Occupation: "",
        petitioner1Address: "",
        petitioner1Mobile: "",
        petitioner1Email: "",
        petitioner2Name: "",
        petitioner2Age: "",
        petitioner2Occupation: "",
        petitioner2Address: "",
        petitioner2Mobile: "",
        petitioner2Email: "",
        marriageDate: "",
        marriagePlace: "",
        preMaritalStatus1: "",
        preMaritalStatus2: "",
        maidenName: "",
        religion: "",
        domicile: "",
        separationDate: "",
        childrenDetails: "",
        pendingLitigation: "",
        jointPropertyDetails: "",
        consentTerms: "",
        courtJurisdiction: "",
    });

    const [errors, setErrors] = useState({});
    const [isGenerated, setIsGenerated] = useState(false);
    const [documentBlob, setDocumentBlob] = useState(null);

    const validateForm = () => {
        const newErrors = {};

        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                newErrors[key] = "This field is required";
            }
        });

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" }); // Clear error when user starts typing
    };

    const handleGenerate = () => {
        if (validateForm()) {
            // Logic to send formData to the backend model
            fetch('/api/generate-document', {  // Replace with your backend endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            .then(response => response.blob())
            .then(blob => {
                setDocumentBlob(blob);
                setIsGenerated(true);
            })
            .catch(error => console.error('Error generating document:', error));
        }
    };

    const handleDownload = (format) => {
        if (documentBlob) {
            const fileName = `document.${format.toLowerCase()}`;
            saveAs(documentBlob, fileName);
        }
    };

    const handleDelete = () => {
        setFormData({
            petitioner1Name: "",
            petitioner1Age: "",
            petitioner1Occupation: "",
            petitioner1Address: "",
            petitioner1Mobile: "",
            petitioner1Email: "",
            petitioner2Name: "",
            petitioner2Age: "",
            petitioner2Occupation: "",
            petitioner2Address: "",
            petitioner2Mobile: "",
            petitioner2Email: "",
            marriageDate: "",
            marriagePlace: "",
            preMaritalStatus1: "",
            preMaritalStatus2: "",
            maidenName: "",
            religion: "",
            domicile: "",
            separationDate: "",
            childrenDetails: "",
            pendingLitigation: "",
            jointPropertyDetails: "",
            consentTerms: "",
            courtJurisdiction: "",
        });
        setIsGenerated(false);
        setDocumentBlob(null);
        setErrors({});
    };

    return (
        <div className="mutual-divorce-petition">
            <h2>Mutual Divorce Petition</h2>
            <form>
                <h3>Petitioner 1</h3>
                <input
                    type="text"
                    name="petitioner1Name"
                    placeholder="Petitioner 1 Name"
                    value={formData.petitioner1Name}
                    onChange={handleInputChange}
                />
                {errors.petitioner1Name && <p className="error">{errors.petitioner1Name}</p>}
                <input
                    type="text"
                    name="petitioner1Age"
                    placeholder="Petitioner 1 Age"
                    value={formData.petitioner1Age}
                    onChange={handleInputChange}
                />
                {errors.petitioner1Age && <p className="error">{errors.petitioner1Age}</p>}
                <input
                    type="text"
                    name="petitioner1Occupation"
                    placeholder="Petitioner 1 Occupation"
                    value={formData.petitioner1Occupation}
                    onChange={handleInputChange}
                />
                {errors.petitioner1Occupation && <p className="error">{errors.petitioner1Occupation}</p>}
                <input
                    type="text"
                    name="petitioner1Address"
                    placeholder="Petitioner 1 Address"
                    value={formData.petitioner1Address}
                    onChange={handleInputChange}
                />
                {errors.petitioner1Address && <p className="error">{errors.petitioner1Address}</p>}
                <input
                    type="text"
                    name="petitioner1Mobile"
                    placeholder="Petitioner 1 Mobile"
                    value={formData.petitioner1Mobile}
                    onChange={handleInputChange}
                />
                {errors.petitioner1Mobile && <p className="error">{errors.petitioner1Mobile}</p>}
                <input
                    type="email"
                    name="petitioner1Email"
                    placeholder="Petitioner 1 Email"
                    value={formData.petitioner1Email}
                    onChange={handleInputChange}
                />
                {errors.petitioner1Email && <p className="error">{errors.petitioner1Email}</p>}

                <h3>Petitioner 2</h3>
                <input
                    type="text"
                    name="petitioner2Name"
                    placeholder="Petitioner 2 Name"
                    value={formData.petitioner2Name}
                    onChange={handleInputChange}
                />
                {errors.petitioner2Name && <p className="error">{errors.petitioner2Name}</p>}
                <input
                    type="text"
                    name="petitioner2Age"
                    placeholder="Petitioner 2 Age"
                    value={formData.petitioner2Age}
                    onChange={handleInputChange}
                />
                {errors.petitioner2Age && <p className="error">{errors.petitioner2Age}</p>}
                <input
                    type="text"
                    name="petitioner2Occupation"
                    placeholder="Petitioner 2 Occupation"
                    value={formData.petitioner2Occupation}
                    onChange={handleInputChange}
                />
                {errors.petitioner2Occupation && <p className="error">{errors.petitioner2Occupation}</p>}
                <input
                    type="text"
                    name="petitioner2Address"
                    placeholder="Petitioner 2 Address"
                    value={formData.petitioner2Address}
                    onChange={handleInputChange}
                />
                {errors.petitioner2Address && <p className="error">{errors.petitioner2Address}</p>}
                <input
                    type="text"
                    name="petitioner2Mobile"
                    placeholder="Petitioner 2 Mobile"
                    value={formData.petitioner2Mobile}
                    onChange={handleInputChange}
                />
                {errors.petitioner2Mobile && <p className="error">{errors.petitioner2Mobile}</p>}
                <input
                    type="email"
                    name="petitioner2Email"
                    placeholder="Petitioner 2 Email"
                    value={formData.petitioner2Email}
                    onChange={handleInputChange}
                />
                {errors.petitioner2Email && <p className="error">{errors.petitioner2Email}</p>}

                <h3>Marriage Details</h3>
                <input
                    type="date"
                    name="marriageDate"
                    placeholder="Marriage Date"
                    value={formData.marriageDate}
                    onChange={handleInputChange}
                />
                {errors.marriageDate && <p className="error">{errors.marriageDate}</p>}
                <input
                    type="text"
                    name="marriagePlace"
                    placeholder="Marriage Place"
                    value={formData.marriagePlace}
                    onChange={handleInputChange}
                />
                {errors.marriagePlace && <p className="error">{errors.marriagePlace}</p>}

                <h3>Additional Details</h3>
                <input
                    type="text"
                    name="preMaritalStatus1"
                    placeholder="Pre-marital Status of Petitioner 1"
                    value={formData.preMaritalStatus1}
                    onChange={handleInputChange}
                />
                {errors.preMaritalStatus1 && <p className="error">{errors.preMaritalStatus1}</p>}
                <input
                    type="text"
                    name="preMaritalStatus2"
                    placeholder="Pre-marital Status of Petitioner 2"
                    value={formData.preMaritalStatus2}
                    onChange={handleInputChange}
                />
                {errors.preMaritalStatus2 && <p className="error">{errors.preMaritalStatus2}</p>}
                <input
                    type="text"
                    name="maidenName"
                    placeholder="Maiden Name of Wife"
                    value={formData.maidenName}
                    onChange={handleInputChange}
                />
                {errors.maidenName && <p className="error">{errors.maidenName}</p>}
                <input
                    type="text"
                    name="religion"
                    placeholder="Religion"
                    value={formData.religion}
                    onChange={handleInputChange}
                />
                {errors.religion && <p className="error">{errors.religion}</p>}
                <input
                    type="text"
                    name="domicile"
                    placeholder="Domicile"
                    value={formData.domicile}
                    onChange={handleInputChange}
                />
                {errors.domicile && <p className="error">{errors.domicile}</p>}
                <input
                    type="date"
                    name="separationDate"
                    placeholder="Date of Separation"
                    value={formData.separationDate}
                    onChange={handleInputChange}
                />
                {errors.separationDate && <p className="error">{errors.separationDate}</p>}
                <input
                    type="text"
                    name="childrenDetails"
                    placeholder="Children's Details"
                    value={formData.childrenDetails}
                    onChange={handleInputChange}
                />
                {errors.childrenDetails && <p className="error">{errors.childrenDetails}</p>}
                <input
                    type="text"
                    name="pendingLitigation"
                    placeholder="Pending Litigation"
                    value={formData.pendingLitigation}
                    onChange={handleInputChange}
                />
                {errors.pendingLitigation && <p className="error">{errors.pendingLitigation}</p>}
                <input
                    type="text"
                    name="jointPropertyDetails"
                    placeholder="Joint Property Details"
                    value={formData.jointPropertyDetails}
                    onChange={handleInputChange}
                />
                {errors.jointPropertyDetails && <p className="error">{errors.jointPropertyDetails}</p>}
                <input
                    type="text"
                    name="consentTerms"
                    placeholder="Consent Terms"
                    value={formData.consentTerms}
                    onChange={handleInputChange}
                />
                {errors.consentTerms && <p className="error">{errors.consentTerms}</p>}
                <input
                    type="text"
                    name="courtJurisdiction"
                    placeholder="Court Jurisdiction"
                    value={formData.courtJurisdiction}
                    onChange={handleInputChange}
                />
                {errors.courtJurisdiction && <p className="error">{errors.courtJurisdiction}</p>}

                <div className="form-actions">
                <div className="button-container">
                    <button type="button" onClick={handleGenerate} className="generate-button">Generate</button>
                    {isGenerated && (
                        <div className="button-container">
                            <button type="button" onClick={() => handleDownload('PDF')} className="download-button">Download PDF</button>
                            <button type="button" onClick={() => handleDownload('DOCX')} className="download-button">Download Word</button>
                        </div>
                    )}
                    {isGenerated && (
                        <button type="button" onClick={handleDelete} className="delete-button">Delete</button>
                    )}
                </div>
            </div>

            </form>
        </div>
    );
};

export default MutualDivorcePetition;
