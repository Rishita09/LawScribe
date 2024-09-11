import React, { useState } from "react";
import { jsPDF } from "jspdf";
import { saveAs } from "file-saver";
import "./RestrainingOrder.css";

const RestrainingOrder = () => {
  const [formData, setFormData] = useState({
    courtName: "",
    judgeName: "",
    plaintiffName: "",
    defendantName: "",
    disputedProperty: "",
    chainOfEvents: "",
    balanceOfFavour: "",
    irreparableDamage: "",
    place: "",
    date: "",
    advocateName: "",
  });

  const [errors, setErrors] = useState({});
  const [isDocumentGenerated, setIsDocumentGenerated] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${field.replace(/([A-Z])/g, " $1")} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateDocumentContent = () => {
    return `
      IN THE COURT OF
      ${formData.courtName.toUpperCase()}
      THE CIVIL JUDGE (${formData.judgeName.toUpperCase()})

      Civil Suit No. ____/20____

      …Plaintiff: ${formData.plaintiffName}

      Vs.

      …Defendants: ${formData.defendantName}

      An application for an interim injunction under Order XXXIX Rule 1 and 2 of the Civil Procedure Code

      1. The Plaintiff has filed the suit for ${formData.disputedProperty}.

      2. That the disputed property ${
        formData.disputedProperty
      } has been unlawfully kept out of the possession of the plaintiff.

      3. ${formData.chainOfEvents}

      4. The chain of events establishes a prima facie case and further investigation or action is needed.

      5. A reason that clearly states the balance of favour in plaintiff’s side: ${
        formData.balanceOfFavour
      }

      6. Irreparable damage will be caused which wouldn’t be compensated in monetary terms: ${
        formData.irreparableDamage
      }

      PRAYER:

      The plaintiff, therefore, prays that your Honour finds it fit to deliver a show-cause notice to the opposite party putting forward the reasons why the injunction shouldn’t be granted. Pending hearing of such injunction petition, it is prayed that an interim injunction order is passed to restrain the defendants from causing any harm to the disputed property.

      PLAINTIFF(Signature):

      PLACE: ${formData.place}

      DATE: ${formData.date}

      ADVOCATE FOR PLAINTIFF: ${formData.advocateName}
    `;
  };

  const handleGenerateOrder = () => {
    if (validateForm()) {
      setIsDocumentGenerated(true);
    }
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFont("Times", "normal");
    doc.setFontSize(12);

    doc.text("IN THE COURT OF", 105, 20, { align: "center" });
    doc.text(formData.courtName.toUpperCase(), 105, 30, { align: "center" });
    doc.text(`THE CIVIL JUDGE (${formData.judgeName.toUpperCase()})`, 105, 40, {
      align: "center",
    });
    doc.text("Civil Suit No. ____/20____", 105, 50, { align: "center" });
    doc.text("…Plaintiff:", 105, 60, { align: "center" });
    doc.text(formData.plaintiffName, 105, 70, { align: "center" });
    doc.text("Vs.", 105, 80, { align: "center" });
    doc.text("…Defendants:", 105, 90, { align: "center" });
    doc.text(formData.defendantName, 105, 100, { align: "center" });

    const content = doc.splitTextToSize(generateDocumentContent(), 180);
    doc.text(content, 10, 110);
    doc.save("Restraining_Order.pdf");
  };

  const handleDownloadWord = () => {
    const content = generateDocumentContent();
    const blob = new Blob([content], { type: "application/msword" });
    saveAs(blob, "Restraining_Order.doc");
  };

  const handleDeleteDocument = () => {
    setIsDocumentGenerated(false);
    setFormData({
      courtName: "",
      judgeName: "",
      plaintiffName: "",
      defendantName: "",
      disputedProperty: "",
      chainOfEvents: "",
      balanceOfFavour: "",
      irreparableDamage: "",
      place: "",
      date: "",
      advocateName: "",
    });
    setErrors({});
  };

  return (
    <div className="restraining-order-container">
      <div className="restraining-order-form">
        <h2>Restraining Order Form</h2>
        <div className="form-row">
          <div className="form-group">
            <label>Court Name</label>
            <input
              type="text"
              name="courtName"
              value={formData.courtName}
              onChange={handleInputChange}
              className={errors.courtName ? "input-error" : ""}
            />
            {errors.courtName && (
              <p className="error-message">{errors.courtName}</p>
            )}
          </div>
          <div className="form-group">
            <label>Judge Name</label>
            <input
              type="text"
              name="judgeName"
              value={formData.judgeName}
              onChange={handleInputChange}
              className={errors.judgeName ? "input-error" : ""}
            />
            {errors.judgeName && (
              <p className="error-message">{errors.judgeName}</p>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Plaintiff Name</label>
            <input
              type="text"
              name="plaintiffName"
              value={formData.plaintiffName}
              onChange={handleInputChange}
              className={errors.plaintiffName ? "input-error" : ""}
            />
            {errors.plaintiffName && (
              <p className="error-message">{errors.plaintiffName}</p>
            )}
          </div>
          <div className="form-group">
            <label>Defendant Name</label>
            <input
              type="text"
              name="defendantName"
              value={formData.defendantName}
              onChange={handleInputChange}
              className={errors.defendantName ? "input-error" : ""}
            />
            {errors.defendantName && (
              <p className="error-message">{errors.defendantName}</p>
            )}
          </div>
        </div>
        <div className="form-group">
          <label>Disputed Property</label>
          <textarea
            name="disputedProperty"
            value={formData.disputedProperty}
            onChange={handleInputChange}
            className={errors.disputedProperty ? "input-error" : ""}
          ></textarea>
          {errors.disputedProperty && (
            <p className="error-message">{errors.disputedProperty}</p>
          )}
        </div>
        <div className="form-group">
          <label>Chain of Events</label>
          <textarea
            name="chainOfEvents"
            value={formData.chainOfEvents}
            onChange={handleInputChange}
            className={errors.chainOfEvents ? "input-error" : ""}
          ></textarea>
          {errors.chainOfEvents && (
            <p className="error-message">{errors.chainOfEvents}</p>
          )}
        </div>
        <div className="form-group">
          <label>Balance of Favour</label>
          <textarea
            name="balanceOfFavour"
            value={formData.balanceOfFavour}
            onChange={handleInputChange}
            className={errors.balanceOfFavour ? "input-error" : ""}
          ></textarea>
          {errors.balanceOfFavour && (
            <p className="error-message">{errors.balanceOfFavour}</p>
          )}
        </div>
        <div className="form-group">
          <label>Irreparable Damage</label>
          <textarea
            name="irreparableDamage"
            value={formData.irreparableDamage}
            onChange={handleInputChange}
            className={errors.irreparableDamage ? "input-error" : ""}
          ></textarea>
          {errors.irreparableDamage && (
            <p className="error-message">{errors.irreparableDamage}</p>
          )}
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Place</label>
            <input
              type="text"
              name="place"
              value={formData.place}
              onChange={handleInputChange}
              className={errors.place ? "input-error" : ""}
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
              className={errors.date ? "input-error" : ""}
            />
            {errors.date && <p className="error-message">{errors.date}</p>}
          </div>
        </div>
        <div className="form-group">
          <label>Advocate Name</label>
          <input
            type="text"
            name="advocateName"
            value={formData.advocateName}
            onChange={handleInputChange}
            className={errors.advocateName ? "input-error" : ""}
          />
          {errors.advocateName && (
            <p className="error-message">{errors.advocateName}</p>
          )}
        </div>
        <button
          type="button"
          className="generate-button"
          onClick={handleGenerateOrder}
        >
          Generate
        </button>
        {isDocumentGenerated && (
          <div className="buttons-container">
            <button className="download-button" onClick={handleDownloadPDF}>
              Download as PDF
            </button>
            <button className="download-button" onClick={handleDownloadWord}>
              Download as Word
            </button>
            <button className="delete-button" onClick={handleDeleteDocument}>
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestrainingOrder;
