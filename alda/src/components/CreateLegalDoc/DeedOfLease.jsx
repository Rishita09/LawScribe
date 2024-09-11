import React, { useState } from "react";
import { jsPDF } from "jspdf";
import { saveAs } from "file-saver";
import "./DeedOfLease.css";

const DeedOfLease = () => {
  const [formData, setFormData] = useState({
    lessorName: "",
    lessorAddress: "",
    lesseeName: "",
    lesseeAddress: "",
    propertyDescription: "",
    leaseTerm: "",
    rentAmount: "",
    startDate: "",
    interestRate: "",
    taxes: "",
    repairs: "",
    alterations: "",
    use: "",
    reEntry: "",
    termExpiration: "",
  });

  const [isGenerated, setIsGenerated] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    return Object.values(formData).every((field) => field.trim() !== "");
  };

  const generateDocumentContent = () => {
    return `
      DRAFT OF DEED OF LEASE (FOR A TERM OF YEARS) RENT AGREEMENT

      This Deed of Lease is made at ${formData.propertyDescription} on this ${formData.startDate} day of ${formData.startDate} between ${formData.lessorName} of ${formData.lessorAddress}, hereinafter called 'The Lessor' of the One Part and ${formData.lesseeName} also of ${formData.lesseeAddress}, hereinafter called 'The Lessee' of the Other Part.

      WHEREAS, the Lessor is absolutely seized and possessed of or otherwise well and sufficiently entitled to the land and premises described in the Schedule hereunder written.
      AND WHEREAS, the Lessor has agreed to grant to the Lessee a lease in respect of the said land and premises for a term of ${formData.leaseTerm} years in the manner hereinafter appearing.

      Now This Deed Witnesseth as Follows:
      1. In pursuance of the said agreement and in consideration of the rent hereby reserved and of the terms and conditions, covenants and agreements herein contained and on the part of the Lessee to be observed and performed, the Lessor doth hereby demise unto the Lessee all that the said land and premises situated at ${formData.propertyDescription} (hereinafter for the brevity's sake referred to as 'the demised premises') to hold the demised premises unto the Lessee (and his heirs, executors, administrators and assigns) for a term of ${formData.leaseTerm} years commencing from the 1st day of ${formData.startDate}, 2000, but subject to the earlier determination of this demise as hereinafter provided and yielding and paying therefor during the said term the monthly ground rent of Rs ${formData.rentAmount} free and clear of all deductions and strictly in advance on or before the 5th day of each and every calendar month. The first of such monthly ground rent shall be paid on the 5th day of ${formData.startDate} and the subsequent rent to be paid on or before the 5th day of every succeeding month regularly.

      2. The Lessee hereby for himself, his heirs, executors, administrators and assigns and to the intent that the obligations herein contained shall continue throughout the term hereby created covenants with the Lessor as follows:
      a. To pay the ground rent hereby reserved on the days and in the manner aforesaid clear of all deductions. The first of such monthly rent as hereinbefore provided shall be paid on the 5th of ${formData.startDate} and the subsequent rent shall be paid on the 5th day of every succeeding month regularly and if the ground rent is not paid on the due dates, the Lessee shall pay interest thereon at the rate of ${formData.interestRate}% per annum from the due date till payment, though the payment of interest shall not entitle the Lessee to make default in payment of rent on due dates.
      b. To bear, pay and discharge the existing and future rates, taxes, assessment duties, cess, impositions, outgoing and burdens whatsoever which may at any time or from time to time during the term hereby created be imposed or charged upon the demised land and the building or structures standing thereon and on the buildings or structures hereafter to be erected and for the time being standing on the demised land and payable either by the owners, occupiers or tenants thereof and to keep the Lessor and his estate and effects indemnified against all such payment. The annual municipal and other taxes at present are Rs ${formData.taxes}.
      c. To keep the buildings and structures on the demised premises in good and tenantable repairs in the same way as the Lessor is liable to do under the law provided that if the Lessee so desires he shall have power to demolish any existing building or structure without being accountable to the Lessor for the building material of such building and structure and the Lessee shall have also power to construct any new buildings in their place.
      d. The Lessee shall be at liberty to carry out any additions or alterations to the buildings or structures at present existing on the demised premises or to put up any additional structures or buildings on the demised premises in accordance with the plans approved by the authorities at any time or from time to time during the subsistence of the term hereby created.
      e. Not to sell or dispose of any earth, gravel or sand from the demised land and not to excavate the same except so far as may be necessary for the execution of construction work.
      f. To use or permit to be used the buildings and structures to be constructed on the demised premises for any and all lawful purposes as may be permitted by the authorities from time to time.

      3. The Lessor doth hereby covenant with the Lessee that:
      a. The Lessor now has in himself good right full power and absolute authority to demise unto the Lessee the demised premises and the buildings and structures standing thereon in the manner herein appearing.
      b. That on the Lessee paying the said monthly ground rent on the due dates thereof and in the manner herein provided and observing and performing the covenants, conditions, and stipulations herein contained and on his part to be observed and performed shall and may peaceably and quietly hold, possess and enjoy the demised premises together with the buildings and structures standing thereon during the term hereby created without any eviction, interruption, disturbance, claim and demand whatsoever by the Lessor or any person or persons lawfully or equitably claiming by, from, under or in trust for him.

      4. It is hereby agreed and declared that these presents are granted on the express condition that if the said monthly ground rent or any part thereof payable in the manner hereinbefore mentioned shall be in arrears for the space of ${formData.reEntry} months after the same shall have become due and payable on any of the said days wherein the same ought to be paid as aforesaid whether the same shall or shall not be legally demanded or if any of the covenants and stipulations herein contained and on the part of the Lessee to be observed and performed shall not be so observed and performed by the Lessee or if the Lessee shall raise an objection to the amount of the monthly ground rent hereby fixed for any reason whatsoever then and in such event it shall be lawful for the Lessor or any person or persons duly authorised by him in that behalf at any time hereafter to enter into and upon the land and premises and the buildings and structures constructed or to be constructed thereon or any part or parts thereof in the name of the whole and the same to have, possess and enjoy and thereupon this demise shall absolutely determine but without prejudice to the right of action of the Lessor in respect of any breach of any of the covenants by the Lessee herein contained PROVIDED ALWAYS that, no re-entry shall be made under the foregoing power for breach of the covenants and stipulations herein contained and on the part of the Lessee to be observed and performed (save and except the covenant for payment of rent) unless and until the Lessor shall have given to the Lessee a notice in writing specifying the covenants and conditions or stipulations which require to be complied with or carried out and the Lessee shall have failed to comply with or carry out the same within ${formData.reEntry} month from the date of the receipt of such notice.

      5. And it is hereby expressly agreed and declared between the parties as follows:
      a. On the expiration of the term hereby created or earlier determination under the provisions hereof all the buildings and structures standing on the demised land shall automatically vest in the Lessor without payment of any compensation therefor by the Lessor to the Lessee.
      b. The Lessee shall not be entitled, without obtaining in writing the permission of the Lessor, to assign mortgage, sublet (except to the extent of creating monthly tenancies) or otherwise part with possession of the demised premises or any of them or any part thereof and the buildings and structures standing thereon though such permission shall not be unreasonably withheld.

      IN WITNESS WHEREOF the Lessor and the Lessee have put their respective hands on the original and duplicate hereof the day and year first herein above written.

      THE SCHEDULE ABOVE REFERRED TO

      Signed and delivered by the
      Withinnamed Lessor ${formData.lessorName} in the presence of ${formData.lessorWitness}
      Signed and delivered by the
      Withinnamed Lessee ${formData.lesseeName} in the presence of ${formData.lesseeWitness}
    `;
  };

  const handleGenerate = () => {
    if (validateForm()) {
      setIsGenerated(true);
    } else {
      alert("Please fill all fields correctly.");
    }
  };

  const downloadDocument = (format) => {
    const doc = new jsPDF();
    doc.text(generateDocumentContent(), 10, 10);
    if (format === "pdf") {
      doc.save("DeedOfLease.pdf");
    } else {
      const blob = doc.output("blob");
      saveAs(blob, "DeedOfLease.doc");
    }
  };

  const handleDelete = () => {
    setFormData({
      lessorName: "",
      lessorAddress: "",
      lesseeName: "",
      lesseeAddress: "",
      propertyDescription: "",
      leaseTerm: "",
      rentAmount: "",
      startDate: "",
      interestRate: "",
      taxes: "",
      repairs: "",
      alterations: "",
      use: "",
      reEntry: "",
      termExpiration: "",
    });
    setIsGenerated(false);
  };

  return (
    <div className="deed-of-lease-container">
      <form className="deed-of-lease-form">
        <h2>Deed of Lease Form</h2>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="lessorName">Lessor's Name</label>
            <input
              type="text"
              id="lessorName"
              name="lessorName"
              value={formData.lessorName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lessorAddress">Lessor's Address</label>
            <input
              type="text"
              id="lessorAddress"
              name="lessorAddress"
              value={formData.lessorAddress}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="lesseeName">Lessee's Name</label>
            <input
              type="text"
              id="lesseeName"
              name="lesseeName"
              value={formData.lesseeName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lesseeAddress">Lessee's Address</label>
            <input
              type="text"
              id="lesseeAddress"
              name="lesseeAddress"
              value={formData.lesseeAddress}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="propertyDescription">Property Description</label>
          <input
            type="text"
            id="propertyDescription"
            name="propertyDescription"
            value={formData.propertyDescription}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="leaseTerm">Lease Term (years)</label>
          <input
            type="text"
            id="leaseTerm"
            name="leaseTerm"
            value={formData.leaseTerm}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rentAmount">Rent Amount (per month)</label>
          <input
            type="text"
            id="rentAmount"
            name="rentAmount"
            value={formData.rentAmount}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Lease Start Date</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="interestRate">Interest Rate</label>
          <input
            type="text"
            id="interestRate"
            name="interestRate"
            value={formData.interestRate}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="taxes">Taxes</label>
          <input
            type="text"
            id="taxes"
            name="taxes"
            value={formData.taxes}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="repairs">Repairs</label>
          <input
            type="text"
            id="repairs"
            name="repairs"
            value={formData.repairs}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="alterations">Alterations</label>
          <input
            type="text"
            id="alterations"
            name="alterations"
            value={formData.alterations}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="use">Use</label>
          <input
            type="text"
            id="use"
            name="use"
            value={formData.use}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="reEntry">Re-Entry</label>
          <input
            type="text"
            id="reEntry"
            name="reEntry"
            value={formData.reEntry}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="termExpiration">Term Expiration</label>
          <input
            type="date"
            id="termExpiration"
            name="termExpiration"
            value={formData.termExpiration}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="button"
          className="generate-button"
          onClick={handleGenerate}
          disabled={!validateForm()}
        >
          Generate Deed
        </button>
        {isGenerated && (
          <div className="document-preview">
            <div className="document-content">
              <p>{generateDocumentContent()}</p>
            </div>
            <button
              type="button"
              className="delete-button"
              onClick={handleDelete}
            >
              Delete
            </button>
            <button
              type="button"
              className="download-button"
              onClick={() => downloadDocument("pdf")}
            >
              Download as PDF
            </button>
            <button
              type="button"
              className="download-button"
              onClick={() => downloadDocument("doc")}
            >
              Download as Word
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default DeedOfLease;
