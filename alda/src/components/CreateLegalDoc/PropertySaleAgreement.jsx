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
    setErrors({ ...errors, [name]: '' }); // Clear the error message
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
        <button type="button" className= 'load-details-button' onClick={() => console.log("Load my details")}>
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

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="houseDescription">House Description</label>
            <input
              type="text"
              id="houseDescription"
              name="houseDescription"
              value={formData.houseDescription}
              onChange={handleInputChange}
              required
            />
            {errors.houseDescription && <span className="error-message">{errors.houseDescription}</span>}
          </div>
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
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="earnestMoney">Earnest Money (Rs.)</label>
            <input
              type="number"
              id="earnestMoney"
              name="earnestMoney"
              value={formData.earnestMoney}
              onChange={handleInputChange}
              required
            />
            {errors.earnestMoney && <span className="error-message">{errors.earnestMoney}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="paymentDate">Payment Date</label>
            <input
              type="date"
              id="paymentDate"
              name="paymentDate"
              value={formData.paymentDate}
              onChange={handleInputChange}
              required
            />
            {errors.paymentDate && <span className="error-message">{errors.paymentDate}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="completionPeriod">Completion Period (days)</label>
            <input
              type="number"
              id="completionPeriod"
              name="completionPeriod"
              value={formData.completionPeriod}
              onChange={handleInputChange}
              required
            />
            {errors.completionPeriod && <span className="error-message">{errors.completionPeriod}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="titleDeedsDelivery">Title Deeds Delivery</label>
            <input
              type="text"
              id="titleDeedsDelivery"
              name="titleDeedsDelivery"
              value={formData.titleDeedsDelivery}
              onChange={handleInputChange}
              required
            />
            {errors.titleDeedsDelivery && <span className="error-message">{errors.titleDeedsDelivery}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="refundDays">Refund Days</label>
            <input
              type="number"
              id="refundDays"
              name="refundDays"
              value={formData.refundDays}
              onChange={handleInputChange}
              required
            />
            {errors.refundDays && <span className="error-message">{errors.refundDays}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="interestRate">Interest Rate (%)</label>
            <input
              type="number"
              id="interestRate"
              name="interestRate"
              value={formData.interestRate}
              onChange={handleInputChange}
              required
            />
            {errors.interestRate && <span className="error-message">{errors.interestRate}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="encumbrances">Encumbrances</label>
            <input
              type="text"
              id="encumbrances"
              name="encumbrances"
              value={formData.encumbrances}
              onChange={handleInputChange}
              required
            />
            {errors.encumbrances && <span className="error-message">{errors.encumbrances}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="possessionDate">Possession Date</label>
            <input
              type="date"
              id="possessionDate"
              name="possessionDate"
              value={formData.possessionDate}
              onChange={handleInputChange}
              required
            />
            {errors.possessionDate && <span className="error-message">{errors.possessionDate}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="breachClause">Breach Clause</label>
            <input
              type="text"
              id="breachClause"
              name="breachClause"
              value={formData.breachClause}
              onChange={handleInputChange}
              required
            />
            {errors.breachClause && <span className="error-message">{errors.breachClause}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="liquidatedDamages">Liquidated Damages</label>
            <input
              type="text"
              id="liquidatedDamages"
              name="liquidatedDamages"
              value={formData.liquidatedDamages}
              onChange={handleInputChange}
              required
            />
            {errors.liquidatedDamages && <span className="error-message">{errors.liquidatedDamages}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="conveyanceDeed">Conveyance Deed</label>
            <input
              type="text"
              id="conveyanceDeed"
              name="conveyanceDeed"
              value={formData.conveyanceDeed}
              onChange={handleInputChange}
              required
            />
            {errors.conveyanceDeed && <span className="error-message">{errors.conveyanceDeed}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="clearanceCertificate">Clearance Certificate</label>
            <input
              type="text"
              id="clearanceCertificate"
              name="clearanceCertificate"
              value={formData.clearanceCertificate}
              onChange={handleInputChange}
              required
            />
            {errors.clearanceCertificate && <span className="error-message">{errors.clearanceCertificate}</span>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="otherExpenses">Other Expenses</label>
          <input
            type="text"
            id="otherExpenses"
            name="otherExpenses"
            value={formData.otherExpenses}
            onChange={handleInputChange}
            required
          />
          {errors.otherExpenses && <span className="error-message">{errors.otherExpenses}</span>}
        </div>

        <div className="form-actions">
          <button type="button" className="generate-button" onClick={handleGenerate}>
            Generate Agreement
          </button>
          {isGenerated && (
            <div className="download-buttons">
              <button type="button" className="download-button" onClick={() => handleDownload('PDF')}>
                Download PDF
              </button>
              <button type="button" className="download-button" onClick={() => handleDownload('DOCX')}>
                Download Word
              </button>
            </div>
          )}
          {isGenerated && (
            <button type="button" onClick={handleDelete} className="delete-button">
              Delete
            </button>
          )}
        </div>

      </form>
    </div>
  );
};

export default PropertySaleAgreement;
