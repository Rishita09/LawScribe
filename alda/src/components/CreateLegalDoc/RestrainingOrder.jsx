import React, { useState } from 'react';
import './RestrainingOrder.css';

const RestrainingOrder = () => {
  const [formData, setFormData] = useState({
    courtName: '',
    judgeName: '',
    plaintiffName: '',
    defendantName: '',
    disputedProperty: '',
    chainOfEvents: '',
    balanceOfFavour: '',
    irreparableDamage: '',
    place: '',
    date: '',
    advocateName: '',
  });

  const [errors, setErrors] = useState({});
  const [isDocumentGenerated, setIsDocumentGenerated] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${field.replace(/([A-Z])/g, ' $1')} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGenerateOrder = () => {
    if (validateForm()) {
      const documentContent = `
        IN THE COURT OF ${formData.courtName.toUpperCase()}
        THE CIVIL JUDGE (${formData.judgeName.toUpperCase()})
        
        Civil Suit No. ____/20____
        
        …Plaintiff: ${formData.plaintiffName}
        
        Vs.
        
        …Defendants: ${formData.defendantName}
        
        An application for an interim injunction under Order XXXIX Rule 1 and 2 of the Civil Procedure Code
        
        The Plaintiff has filed the suit for ${formData.disputedProperty}.
        
        That the disputed property (Proper description of the suit property with facts ascertaining unquestionable legal authority of the plaintiff) ${formData.disputedProperty} has been unlawfully kept out of the possession of the plaintiff (or any other reason as per the case).
        
        Start with the chain of events that has led to the filing of the present suit:
        ${formData.chainOfEvents}
        
        The chain of events establishes a prima facie case and further investigation or action is needed.
        
        A reason that clearly states the balance of favour in plaintiff’s side:
        ${formData.balanceOfFavour}
        
        Irreparable damage will be caused which wouldn’t be compensated in monetary terms:
        ${formData.irreparableDamage}
        
        PRAYER:
        
        The plaintiff, therefore, prays that your Honour finds it fit to deliver a show-cause notice to the opposite party putting forward the reasons why the injunction shouldn’t be granted. Pending hearing of such injunction petition, it is prayed that an interim injunction order is passed to restrain the defendants from causing any harm to the disputed property.
        
        PLAINTIFF(Signature):
        
        PLACE: ${formData.place}
        
        DATE: ${formData.date}
        
        ADVOCATE FOR PLAINTIFF: ${formData.advocateName}
      `;
  
      const blob = new Blob([documentContent], { type: 'text/plain' });
      setIsDocumentGenerated(true);
      setDocumentBlob(blob);
    }
  };
  
  const handleDownloadPDF = () => {
    if (isDocumentGenerated) {
      const url = URL.createObjectURL(documentBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Restraining_Order.pdf';
      link.click();
      URL.revokeObjectURL(url);
    }
  };
  
  const handleDownloadWord = () => {
    if (isDocumentGenerated) {
      const url = URL.createObjectURL(documentBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Restraining_Order.docx';
      link.click();
      URL.revokeObjectURL(url);
    }
  };
  

  const handleDeleteDocument = () => {
    setIsDocumentGenerated(false);
    setFormData({
      courtName: '',
      judgeName: '',
      plaintiffName: '',
      defendantName: '',
      disputedProperty: '',
      chainOfEvents: '',
      balanceOfFavour: '',
      irreparableDamage: '',
      place: '',
      date: '',
      advocateName: '',
    });
    setErrors({});
  };

  const loadMyDetails = () => {
    // Logic to load user's stored details
    setFormData({
      courtName: 'High Court',
      judgeName: 'Justice Sharma',
      plaintiffName: 'John Doe',
      defendantName: 'Jane Doe',
      disputedProperty: 'Property XYZ',
      chainOfEvents: 'Sequence of events...',
      balanceOfFavour: 'Balance in favor of...',
      irreparableDamage: 'Irreparable damage described...',
      place: 'Bengaluru',
      date: '2024-08-29',
      advocateName: 'Advocate Rao',
    });
  };

  return (
    <div className="restraining-order-container">
      <div className="restraining-order-form">
        <h2>Restraining Order Form</h2>
        <button className="load-details-button" onClick={loadMyDetails}>
          Load My Details
        </button>
        <div className="form-group">
          <label>Court Name</label>
          <input
            type="text"
            name="courtName"
            value={formData.courtName}
            onChange={handleInputChange}
            className={errors.courtName ? 'input-error' : ''}
          />
          {errors.courtName && <p className="error-message">{errors.courtName}</p>}
        </div>
        <div className="form-group">
          <label>Judge Name</label>
          <input
            type="text"
            name="judgeName"
            value={formData.judgeName}
            onChange={handleInputChange}
            className={errors.judgeName ? 'input-error' : ''}
          />
          {errors.judgeName && <p className="error-message">{errors.judgeName}</p>}
        </div>
        <div className="form-group">
          <label>Plaintiff Name</label>
          <input
            type="text"
            name="plaintiffName"
            value={formData.plaintiffName}
            onChange={handleInputChange}
            className={errors.plaintiffName ? 'input-error' : ''}
          />
          {errors.plaintiffName && <p className="error-message">{errors.plaintiffName}</p>}
        </div>
        <div className="form-group">
          <label>Defendant Name</label>
          <input
            type="text"
            name="defendantName"
            value={formData.defendantName}
            onChange={handleInputChange}
            className={errors.defendantName ? 'input-error' : ''}
          />
          {errors.defendantName && <p className="error-message">{errors.defendantName}</p>}
        </div>
        <div className="form-group">
          <label>Disputed Property</label>
          <textarea
            name="disputedProperty"
            value={formData.disputedProperty}
            onChange={handleInputChange}
            className={errors.disputedProperty ? 'input-error' : ''}
          ></textarea>
          {errors.disputedProperty && <p className="error-message">{errors.disputedProperty}</p>}
        </div>
        <div className="form-group">
          <label>Chain of Events</label>
          <textarea
            name="chainOfEvents"
            value={formData.chainOfEvents}
            onChange={handleInputChange}
            className={errors.chainOfEvents ? 'input-error' : ''}
          ></textarea>
          {errors.chainOfEvents && <p className="error-message">{errors.chainOfEvents}</p>}
        </div>
        <div className="form-group">
          <label>Balance of Favour</label>
          <textarea
            name="balanceOfFavour"
            value={formData.balanceOfFavour}
            onChange={handleInputChange}
            className={errors.balanceOfFavour ? 'input-error' : ''}
          ></textarea>
          {errors.balanceOfFavour && <p className="error-message">{errors.balanceOfFavour}</p>}
        </div>
        <div className="form-group">
          <label>Irreparable Damage</label>
          <textarea
            name="irreparableDamage"
            value={formData.irreparableDamage}
            onChange={handleInputChange}
            className={errors.irreparableDamage ? 'input-error' : ''}
          ></textarea>
          {errors.irreparableDamage && <p className="error-message">{errors.irreparableDamage}</p>}
        </div>
        <div className="form-group">
          <label>Place</label>
          <input
            type="text"
            name="place"
            value={formData.place}
            onChange={handleInputChange}
            className={errors.place ? 'input-error' : ''}
          />
          {errors.place && <p className="error-message">{errors.place}</p>}
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className={errors.date ? 'input-error' : ''}
          />
          {errors.date && <p className="error-message">{errors.date}</p>}
        </div>
        <div className="form-group">
          <label>Advocate Name</label>
          <input
            type="text"
            name="advocateName"
            value={formData.advocateName}
            onChange={handleInputChange}
            className={errors.advocateName ? 'input-error' : ''}
          />
          {errors.advocateName && <p className="error-message">{errors.advocateName}</p>}
        </div>

        <div className="form-buttons">
          <button
            onClick={handleGenerateOrder}
            disabled={!Object.keys(errors).length === 0}
            className="generate-button"
          >
            Generate Restraining Order
          </button>

          {isDocumentGenerated && (
            <>
              <button onClick={handleDownloadPDF} className="download-button">
                Download as PDF
              </button>
              <button onClick={handleDownloadWord} className="download-button">
                Download as Word
              </button>
              <button onClick={handleDeleteDocument} className="delete-button">
                Delete Document
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestrainingOrder;
