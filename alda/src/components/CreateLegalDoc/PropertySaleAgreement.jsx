import React, { useState } from 'react';
import './PropertySaleAgreement.css';

const PropertySaleAgreement = () => {
  const [formData, setFormData] = useState({
    vendorName: '',
    vendorAddress: '',
    purchaserName: '',
    purchaserAddress: '',
    houseDescription: '',
    salePrice: '',
    earnestMoney: '',
    paymentDate: '',
    completionPeriod: '',
    titleDeedsDelivery: '',
    refundDays: '',
    interestRate: '',
    encumbrances: '',
    possessionDate: '',
    breachClause: '',
    liquidatedDamages: '',
    conveyanceDeed: '',
    clearanceCertificate: '',
    otherExpenses: '',
  });

  const [errors, setErrors] = useState({});
  const [isGenerated, setIsGenerated] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    for (const [key, value] of Object.entries(formData)) {
      if (!value) newErrors[key] = 'This field is required';
    }
    if (isNaN(formData.salePrice) || formData.salePrice <= 0) newErrors.salePrice = 'Invalid sale price';
    if (isNaN(formData.earnestMoney) || formData.earnestMoney <= 0) newErrors.earnestMoney = 'Invalid earnest money';
    if (isNaN(formData.interestRate) || formData.interestRate < 0) newErrors.interestRate = 'Invalid interest rate';
    if (isNaN(formData.refundDays) || formData.refundDays <= 0) newErrors.refundDays = 'Invalid refund days';
    if (isNaN(formData.completionPeriod) || formData.completionPeriod <= 0) newErrors.completionPeriod = 'Invalid completion period';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleGenerate = () => {
    if (validateForm()) {
      // Integrate with backend model here
      setIsGenerated(true);
    }
  };

  const handleDownload = (type) => {
    // Handle download logic for PDF or Word
    console.log(`Download ${type}`);
  };

  const handleDelete = () => {
    setFormData({
      vendorName: '',
      vendorAddress: '',
      purchaserName: '',
      purchaserAddress: '',
      houseDescription: '',
      salePrice: '',
      earnestMoney: '',
      paymentDate: '',
      completionPeriod: '',
      titleDeedsDelivery: '',
      refundDays: '',
      interestRate: '',
      encumbrances: '',
      possessionDate: '',
      breachClause: '',
      liquidatedDamages: '',
      conveyanceDeed: '',
      clearanceCertificate: '',
      otherExpenses: '',
    });
    setErrors({});
    setIsGenerated(false);
  };

  return (
    <div className="property-sale-agreement">
      <h2>Property Sale Agreement</h2>
      <form>
        <button type="button" onClick={() => console.log("Load my details")}>
          Load My Details
        </button>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="vendorName">Vendor Name</label>
            <input
              type="text"
              id="vendorName"
              name="vendorName"
              value={formData.vendorName}
              onChange={handleInputChange}
              required
            />
            {errors.vendorName && <span className="error-message">{errors.vendorName}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="vendorAddress">Vendor Address</label>
            <input
              type="text"
              id="vendorAddress"
              name="vendorAddress"
              value={formData.vendorAddress}
              onChange={handleInputChange}
              required
            />
            {errors.vendorAddress && <span className="error-message">{errors.vendorAddress}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="purchaserName">Purchaser Name</label>
            <input
              type="text"
              id="purchaserName"
              name="purchaserName"
              value={formData.purchaserName}
              onChange={handleInputChange}
              required
            />
            {errors.purchaserName && <span className="error-message">{errors.purchaserName}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="purchaserAddress">Purchaser Address</label>
            <input
              type="text"
              id="purchaserAddress"
              name="purchaserAddress"
              value={formData.purchaserAddress}
              onChange={handleInputChange}
              required
            />
            {errors.purchaserAddress && <span className="error-message">{errors.purchaserAddress}</span>}
          </div>
        </div>

        {/* Add other fields in similar fashion */}
        {/* Example field for sale price */}
        <div className="form-group">
          <label htmlFor="salePrice">Sale Price (Rs.)</label>
          <input
            type="number"
            id="salePrice"
            name="salePrice"
            value={formData.salePrice}
            onChange={handleInputChange}
            required
          />
          {errors.salePrice && <span className="error-message">{errors.salePrice}</span>}
        </div>

        {/* Repeat similar structure for other fields */}

        <div className="form-actions">
          <button type="button" onClick={handleGenerate}>Generate Agreement</button>
          {isGenerated && (
            <div className="download-buttons">
              <button type="button" onClick={() => handleDownload('PDF')}>Download PDF</button>
              <button type="button" onClick={() => handleDownload('DOCX')}>Download Word</button>
            </div>
          )}
          {isGenerated && (
            <button type="button" onClick={handleDelete} className="delete-button">Delete</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default PropertySaleAgreement;
