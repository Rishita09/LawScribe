import React, { useState } from "react";
import { jsPDF } from "jspdf";
import { saveAs } from "file-saver";
import "./GiftDeed.css";

const GiftDeed = () => {
  const [formData, setFormData] = useState({
    donorName: "",
    donorAge: "",
    donorAddress: "",
    doneeName: "",
    doneeAge: "",
    doneeAddress: "",
    amount: "",
    chequeNumber: "",
    bankName: "",
    branchName: "",
    date: "",
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isDocumentGenerated, setIsDocumentGenerated] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.donorName) newErrors.donorName = "Donor Name is required";
    if (!formData.donorAge || isNaN(formData.donorAge))
      newErrors.donorAge = "Valid Donor Age is required";
    if (!formData.donorAddress)
      newErrors.donorAddress = "Donor Address is required";
    if (!formData.doneeName) newErrors.doneeName = "Donee Name is required";
    if (!formData.doneeAge || isNaN(formData.doneeAge))
      newErrors.doneeAge = "Valid Donee Age is required";
    if (!formData.doneeAddress)
      newErrors.doneeAddress = "Donee Address is required";
    if (!formData.amount || isNaN(formData.amount))
      newErrors.amount = "Valid Amount is required";
    if (!formData.chequeNumber)
      newErrors.chequeNumber = "Cheque Number is required";
    if (!formData.bankName) newErrors.bankName = "Bank Name is required";
    if (!formData.branchName) newErrors.branchName = "Branch Name is required";
    if (!formData.date) newErrors.date = "Date is required";

    setErrors(newErrors);
    const isValid = Object.keys(newErrors).length === 0;
    setIsFormValid(isValid);
    return isValid;
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: "",
    }));

    // Revalidate the form on each input change
    validateForm();
  };

  const handleLoadDetails = () => {
    setFormData({
      ...formData,
      donorName: "Rishita Shah",
      donorAge: "30",
      donorAddress: "123, Sample Street, City, Country",
    });
    setErrors({});
  };

  const handleGenerateDeed = () => {
    if (validateForm()) {
      setIsDocumentGenerated(true);
    }
  };

  const handleDeleteDocument = () => {
    setIsDocumentGenerated(false);
    setFormData({
      donorName: "",
      donorAge: "",
      donorAddress: "",
      doneeName: "",
      doneeAge: "",
      doneeAddress: "",
      amount: "",
      chequeNumber: "",
      bankName: "",
      branchName: "",
      date: "",
    });
    setErrors({});
  };

  const generateDocumentContent = () => {
    return `
      GIFT DEED
                       
  
      THIS DEED OF GIFT made this ${formData.date}, BETWEEN:
  
      Mr. ${formData.donorName}, aged ${formData.donorAge} years, 
      residing at ${formData.donorAddress}, 
      (hereinafter referred to as the "Donor", which expression shall, unless it be repugnant to the context or meaning thereof, be deemed to mean and include his heirs, executors, administrators and assigns) of the ONE PART
  
      AND
  
      Mr/Miss ${formData.doneeName}, aged ${formData.doneeAge} years, 
      residing at ${formData.doneeAddress}, 
      (hereinafter referred to as the "Donee", which expression shall, unless it be repugnant to the context or meaning thereof, be deemed to mean and include his/her heirs, executors, administrators and assigns) of the OTHER PART.
  
      WITNESSETH AS FOLLOWS:
  
      1. In consideration of natural love and affection which the Donor bears towards the Donee, the Donor hereby voluntarily and without any monetary consideration, assigns, transfers and conveys absolutely unto the Donee, the sum of Rs. ${formData.amount} /- 
  
      2. The said sum of Rs. ${formData.amount} /- has been handed over to the Donee by the Donor by way of Cheque No. ${formData.chequeNumber} drawn on ${formData.bankName}, ${formData.branchName} Branch, dated ${formData.date}.
  
      3. The Donee hereby acknowledges and accepts the said gift and the Donee further agrees to hold and enjoy the said sum of Rs. ${formData.amount} /- as his/her own property absolutely and forever.
  
      4. The Donor hereby covenants with the Donee that the Donor has full right, title, and interest in the said sum of Rs. ${formData.amount} /- and the same is free from all encumbrances, claims, and demands.
  
      5. The Donor further declares that he/she has voluntarily executed this Gift Deed with a full understanding of the nature and consequences of this transaction.
  
      6. The Donor declares that from the date of execution of this Deed, he/she shall have no right, title, or interest in the said sum of Rs. ${formData.amount} /-  which shall become the sole and absolute property of the Donee.
  
      IN WITNESS WHEREOF, the parties hereto have set their respective hands on this Deed of Gift on the day, month, and year first above written.
  
      __________________________
      Donor: ${formData.donorName}
  
      __________________________
      Donee: ${formData.doneeName}
  
      SIGNATURE, NAME, AND ADDRESS OF THE WITNESSES:
      1. __________________________
        __________________________
        __________________________
      2. __________________________
      __________________________
      __________________________
    `;
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFont("Times", "normal");
    doc.setFontSize(12);
    const lines = doc.splitTextToSize(generateDocumentContent(), 180);
    doc.text(lines, 10, 10);
    doc.save("Gift_Deed.pdf");
  };

  const handleDownloadWord = () => {
    const content = generateDocumentContent();
    const blob = new Blob(
      [
        `GIFT DEED\n\n${content
          .split("\n")
          .map((line) => `${line.trim()}\n\n`)
          .join("")}`,
      ],
      { type: "application/msword" }
    );
    saveAs(blob, "Gift_Deed.doc");
  };

  return (
    <div className="gift-deed-container">
      <div className="gift-deed-form">
        <h2>Add/Edit Gift Deed Details</h2>
        <button className="load-details-button" onClick={handleLoadDetails}>
          Load My Details
        </button>
        <div className="form-row">
          <div className="form-group">
            <label>Donor Name</label>
            <input
              type="text"
              name="donorName"
              value={formData.donorName}
              onChange={handleInputChange}
              className={errors.donorName ? "input-error" : ""}
            />
            {errors.donorName && (
              <p className="error-message">{errors.donorName}</p>
            )}
          </div>
          <div className="form-group">
            <label>Donor Age</label>
            <input
              type="text"
              name="donorAge"
              value={formData.donorAge}
              onChange={handleInputChange}
              className={errors.donorAge ? "input-error" : ""}
            />
            {errors.donorAge && (
              <p className="error-message">{errors.donorAge}</p>
            )}
          </div>
        </div>
        <div className="form-group">
          <label>Donor Address</label>
          <input
            type="text"
            name="donorAddress"
            value={formData.donorAddress}
            onChange={handleInputChange}
            className={errors.donorAddress ? "input-error" : ""}
          />
          {errors.donorAddress && (
            <p className="error-message">{errors.donorAddress}</p>
          )}
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Donee Name</label>
            <input
              type="text"
              name="doneeName"
              value={formData.doneeName}
              onChange={handleInputChange}
              className={errors.doneeName ? "input-error" : ""}
            />
            {errors.doneeName && (
              <p className="error-message">{errors.doneeName}</p>
            )}
          </div>
          <div className="form-group">
            <label>Donee Age</label>
            <input
              type="text"
              name="doneeAge"
              value={formData.doneeAge}
              onChange={handleInputChange}
              className={errors.doneeAge ? "input-error" : ""}
            />
            {errors.doneeAge && (
              <p className="error-message">{errors.doneeAge}</p>
            )}
          </div>
        </div>
        <div className="form-group">
          <label>Donee Address</label>
          <input
            type="text"
            name="doneeAddress"
            value={formData.doneeAddress}
            onChange={handleInputChange}
            className={errors.doneeAddress ? "input-error" : ""}
          />
          {errors.doneeAddress && (
            <p className="error-message">{errors.doneeAddress}</p>
          )}
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Amount</label>
            <input
              type="text"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              className={errors.amount ? "input-error" : ""}
            />
            {errors.amount && <p className="error-message">{errors.amount}</p>}
          </div>
          <div className="form-group">
            <label>Cheque Number</label>
            <input
              type="text"
              name="chequeNumber"
              value={formData.chequeNumber}
              onChange={handleInputChange}
              className={errors.chequeNumber ? "input-error" : ""}
            />
            {errors.chequeNumber && (
              <p className="error-message">{errors.chequeNumber}</p>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Bank Name</label>
            <input
              type="text"
              name="bankName"
              value={formData.bankName}
              onChange={handleInputChange}
              className={errors.bankName ? "input-error" : ""}
            />
            {errors.bankName && (
              <p className="error-message">{errors.bankName}</p>
            )}
          </div>
          <div className="form-group">
            <label>Branch Name</label>
            <input
              type="text"
              name="branchName"
              value={formData.branchName}
              onChange={handleInputChange}
              className={errors.branchName ? "input-error" : ""}
            />
            {errors.branchName && (
              <p className="error-message">{errors.branchName}</p>
            )}
          </div>
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className={errors.date ? "input-error" : ""}
          />
          {errors.date && <p className="error-message">{errors.date}</p>}
        </div>
        <button
          className="generate-button"
          onClick={handleGenerateDeed}
          disabled={!isFormValid}
        >
          {" "}
          Generate Gift Deed{" "}
        </button>
      </div>
      {isDocumentGenerated && (
        <div className="document-preview">
          <div className="document-content">
            <p>{generateDocumentContent()}</p>
          </div>
          <button className="delete-button" onClick={handleDeleteDocument}>
            Delete Document
          </button>
          <button className="download-button" onClick={handleDownloadPDF}>
            Download as PDF
          </button>
          <button className="download-button" onClick={handleDownloadWord}>
            Download as Word
          </button>
        </div>
      )}
    </div>
  );
};

export default GiftDeed;
