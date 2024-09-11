import React, { useState } from "react";
import { jsPDF } from "jspdf";
import { saveAs } from "file-saver";
import "./PropertySaleAgreement.css";

const PropertySaleAgreement = () => {
  const [formData, setFormData] = useState({
    vendorName: "",
    vendorFatherName: "",
    vendorAddress: "",
    purchaserName: "",
    purchaserFatherName: "",
    purchaserAddress: "",
    houseNumber: "",
    roadName: "",
    price: "",
    earnestMoney: "",
    earnestMoneyDate: "",
    completionPeriod: "",
    advocateReportDays: "",
    refundDays: "",
    interestRate: "",
    encumbrances: "",
    possession: "",
    breachVendor: "",
    liquidatedDamages: "",
    conveyanceDeed: "",
    clearanceCertificate: "",
    stampCost: "",
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
      DRAFT OF AGREEMENT FOR SALE OF A HOUSE

      This Agreement of sale made at ${
        formData.vendorAddress
      } on this ${new Date().toLocaleDateString()} day of ${new Date().toLocaleString(
      "default",
      { month: "long" }
    )} 20___, between ${formData.vendorName} son of ${
      formData.vendorFatherName
    }, resident of ${
      formData.vendorAddress
    }, hereinafter called the vendor of the ONE PART and ${
      formData.purchaserName
    } son of ${formData.purchaserFatherName}, resident of ${
      formData.purchaserAddress
    }, hereinafter called the purchaser of the OTHER PART.

      WHEREAS the vendor is absolutely seized and possessed of or well and sufficiently entitled to the house more fully described in the Schedule hereunder:

      AND WHEREAS the vendor has agreed to sell his house to the purchaser on the terms and conditions hereafter set-forth.

      NOW THIS AGREEMENT WITNESSETH AS FOLLOWS:

      1. The vendor will sell and the purchaser will purchase that entire house No. ${
        formData.houseNumber
      }, Road ${
      formData.roadName
    }, more particularly described in the Schedule hereunder written at a price of Rs. ${
      formData.price
    }, free from all encumbrances.

      2. The purchaser has paid a sum of Rs. ${
        formData.earnestMoney
      } as earnest money on ${
      formData.earnestMoneyDate
    } (the receipt of which sum, the vendor hereby acknowledges) and the balance amount of consideration will be paid at the time of execution of the conveyance deed.

      3. The sale shall be completed within a period of ${
        formData.completionPeriod
      } months from this date and it is hereby agreed that time is the essence of the contract.

      4. The vendor shall submit the title deeds of the house in his possession or power to the purchaser's advocate within one week from the date of this agreement for investigation of title and the purchaser will intimate about his advocate's report within ${
        formData.advocateReportDays
      } days after delivery of title deeds to his advocate.

      5. If the purchaser's Advocate gives the report that the vendor's title is not clear, the vendor shall refund the earnest money, without interest to the purchaser within ${
        formData.refundDays
      } days from the date of intimation about the advocate's report by the purchasers. If the vendor does not refund the earnest money within ${
      formData.refundDays
    } days from the date of intimation about the advocate's report, the vendor will be liable to pay interest @ ${
      formData.interestRate
    } per month up to the date of repayment of earnest money.

      6. The vendor declares that the sale of the house will be without encumbrances.

      7. The vendor will hand over the vacant possession of the house on the execution and registration of the conveyance deed.

      8. If the purchaser commits breach of the agreement, the vendor shall be entitled to forfeit the earnest money paid by the purchaser to the vendor and the vendor will be at liberty to resell the property to any person.

      9. If the vendor commits breach of the agreement, he shall be liable to refund earnest money, received by him and a sum of Rs. ${
        formData.liquidatedDamages
      } by way of liquidated damages.

      10. The vendor shall execute the conveyance deed in favour of the purchaser or his nominee as the purchaser may require, on receipt of the balance consideration.

      11. The vendor shall at his own costs obtain a clearance certificate under section 230A, Income Tax Act, 1961, and other permissions required for the completion of the sale.

      12. The expenses for the preparation of the conveyance deed, cost of stamp, registration charges, and all other out-of-pocket expenses shall be borne by the purchaser.

      SCHEDULE ABOVE REFERRED TO:

      IN WITNESS WHEREOF the parties have set their hands to this Agreement on the day and year first hereinabove written.

      Signed and delivered by Shri ${
        formData.vendorName
      } the within named vendor

      Signed and delivered by Shri ${
        formData.purchaserName
      } The within named purchaser

      WITNESSES;
      1.
      2.
    `;
  };

  const handleGenerateDocument = () => {
    if (validateForm()) {
      setIsDocumentGenerated(true);
    }
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFont("Times", "normal");
    doc.setFontSize(12);

    // Centered and bold text for the first line
    doc.setFontSize(14);
    doc.setFont("Times", "bold");
    doc.text("DRAFT OF AGREEMENT FOR SALE OF A HOUSE", 105, 20, {
      align: "center",
    });

    // Reset font size and weight for the body text
    doc.setFontSize(12);
    doc.setFont("Times", "normal");

    // Split content into lines that fit within the PDF width
    const content = doc.splitTextToSize(generateDocumentContent(), 180);
    let y = 30;

    content.forEach((line) => {
      if (y > 280) {
        doc.addPage();
        y = 10; // Reset y position on new page
      }
      doc.text(line, 10, y);
      y += 10;
    });

    doc.save("Property_Sale_Agreement.pdf");
  };

  const handleDownloadWord = () => {
    const content = generateDocumentContent();
    const blob = new Blob([content], { type: "application/msword" });
    saveAs(blob, "Property_Sale_Agreement.doc");
  };

  const handleDeleteDocument = () => {
    setIsDocumentGenerated(false);
    setFormData({
      vendorName: "",
      vendorFatherName: "",
      vendorAddress: "",
      purchaserName: "",
      purchaserFatherName: "",
      purchaserAddress: "",
      houseNumber: "",
      roadName: "",
      price: "",
      earnestMoney: "",
      earnestMoneyDate: "",
      completionPeriod: "",
      advocateReportDays: "",
      refundDays: "",
      interestRate: "",
      encumbrances: "",
      possession: "",
      breachVendor: "",
      liquidatedDamages: "",
      conveyanceDeed: "",
      clearanceCertificate: "",
      stampCost: "",
    });
    setErrors({});
  };

  return (
    <div className="property-sale-agreement-container">
      <div className="property-sale-agreement-form">
        <h2>Property Sale Agreement Form</h2>
        <div className="form-row">
          <div className="form-group">
            <label>Vendor's Name</label>
            <input
              type="text"
              name="vendorName"
              value={formData.vendorName}
              onChange={handleInputChange}
              className={errors.vendorName ? "input-error" : ""}
            />
            {errors.vendorName && (
              <p className="error-message">{errors.vendorName}</p>
            )}
          </div>
          <div className="form-group">
            <label>Vendor's Father's Name</label>
            <input
              type="text"
              name="vendorFatherName"
              value={formData.vendorFatherName}
              onChange={handleInputChange}
              className={errors.vendorFatherName ? "input-error" : ""}
            />
            {errors.vendorFatherName && (
              <p className="error-message">{errors.vendorFatherName}</p>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Vendor's Address</label>
            <input
              type="text"
              name="vendorAddress"
              value={formData.vendorAddress}
              onChange={handleInputChange}
              className={errors.vendorAddress ? "input-error" : ""}
            />
            {errors.vendorAddress && (
              <p className="error-message">{errors.vendorAddress}</p>
            )}
          </div>
          <div className="form-group">
            <label>Purchaser's Name</label>
            <input
              type="text"
              name="purchaserName"
              value={formData.purchaserName}
              onChange={handleInputChange}
              className={errors.purchaserName ? "input-error" : ""}
            />
            {errors.purchaserName && (
              <p className="error-message">{errors.purchaserName}</p>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Purchaser's Father's Name</label>
            <input
              type="text"
              name="purchaserFatherName"
              value={formData.purchaserFatherName}
              onChange={handleInputChange}
              className={errors.purchaserFatherName ? "input-error" : ""}
            />
            {errors.purchaserFatherName && (
              <p className="error-message">{errors.purchaserFatherName}</p>
            )}
          </div>
          <div className="form-group">
            <label>Purchaser's Address</label>
            <input
              type="text"
              name="purchaserAddress"
              value={formData.purchaserAddress}
              onChange={handleInputChange}
              className={errors.purchaserAddress ? "input-error" : ""}
            />
            {errors.purchaserAddress && (
              <p className="error-message">{errors.purchaserAddress}</p>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>House Number</label>
            <input
              type="text"
              name="houseNumber"
              value={formData.houseNumber}
              onChange={handleInputChange}
              className={errors.houseNumber ? "input-error" : ""}
            />
            {errors.houseNumber && (
              <p className="error-message">{errors.houseNumber}</p>
            )}
          </div>
          <div className="form-group">
            <label>Road Name</label>
            <input
              type="text"
              name="roadName"
              value={formData.roadName}
              onChange={handleInputChange}
              className={errors.roadName ? "input-error" : ""}
            />
            {errors.roadName && (
              <p className="error-message">{errors.roadName}</p>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Price</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className={errors.price ? "input-error" : ""}
            />
            {errors.price && <p className="error-message">{errors.price}</p>}
          </div>
          <div className="form-group">
            <label>Earnest Money</label>
            <input
              type="text"
              name="earnestMoney"
              value={formData.earnestMoney}
              onChange={handleInputChange}
              className={errors.earnestMoney ? "input-error" : ""}
            />
            {errors.earnestMoney && (
              <p className="error-message">{errors.earnestMoney}</p>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Date of Earnest Money</label>
            <input
              type="date"
              name="earnestMoneyDate"
              value={formData.earnestMoneyDate}
              onChange={handleInputChange}
              className={errors.earnestMoneyDate ? "input-error" : ""}
            />
            {errors.earnestMoneyDate && (
              <p className="error-message">{errors.earnestMoneyDate}</p>
            )}
          </div>
          <div className="form-group">
            <label>Completion Period (Months)</label>
            <input
              type="text"
              name="completionPeriod"
              value={formData.completionPeriod}
              onChange={handleInputChange}
              className={errors.completionPeriod ? "input-error" : ""}
            />
            {errors.completionPeriod && (
              <p className="error-message">{errors.completionPeriod}</p>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Advocate Report Days</label>
            <input
              type="text"
              name="advocateReportDays"
              value={formData.advocateReportDays}
              onChange={handleInputChange}
              className={errors.advocateReportDays ? "input-error" : ""}
            />
            {errors.advocateReportDays && (
              <p className="error-message">{errors.advocateReportDays}</p>
            )}
          </div>
          <div className="form-group">
            <label>Refund Days</label>
            <input
              type="text"
              name="refundDays"
              value={formData.refundDays}
              onChange={handleInputChange}
              className={errors.refundDays ? "input-error" : ""}
            />
            {errors.refundDays && (
              <p className="error-message">{errors.refundDays}</p>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Interest Rate (%)</label>
            <input
              type="text"
              name="interestRate"
              value={formData.interestRate}
              onChange={handleInputChange}
              className={errors.interestRate ? "input-error" : ""}
            />
            {errors.interestRate && (
              <p className="error-message">{errors.interestRate}</p>
            )}
          </div>
          <div className="form-group">
            <label>Encumbrances</label>
            <input
              type="text"
              name="encumbrances"
              value={formData.encumbrances}
              onChange={handleInputChange}
              className={errors.encumbrances ? "input-error" : ""}
            />
            {errors.encumbrances && (
              <p className="error-message">{errors.encumbrances}</p>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Possession</label>
            <input
              type="text"
              name="possession"
              value={formData.possession}
              onChange={handleInputChange}
              className={errors.possession ? "input-error" : ""}
            />
            {errors.possession && (
              <p className="error-message">{errors.possession}</p>
            )}
          </div>
          <div className="form-group">
            <label>Breach by Vendor</label>
            <input
              type="text"
              name="breachVendor"
              value={formData.breachVendor}
              onChange={handleInputChange}
              className={errors.breachVendor ? "input-error" : ""}
            />
            {errors.breachVendor && (
              <p className="error-message">{errors.breachVendor}</p>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Liquidated Damages</label>
            <input
              type="text"
              name="liquidatedDamages"
              value={formData.liquidatedDamages}
              onChange={handleInputChange}
              className={errors.liquidatedDamages ? "input-error" : ""}
            />
            {errors.liquidatedDamages && (
              <p className="error-message">{errors.liquidatedDamages}</p>
            )}
          </div>
          <div className="form-group">
            <label>Conveyance Deed</label>
            <input
              type="text"
              name="conveyanceDeed"
              value={formData.conveyanceDeed}
              onChange={handleInputChange}
              className={errors.conveyanceDeed ? "input-error" : ""}
            />
            {errors.conveyanceDeed && (
              <p className="error-message">{errors.conveyanceDeed}</p>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Clearance Certificate</label>
            <input
              type="text"
              name="clearanceCertificate"
              value={formData.clearanceCertificate}
              onChange={handleInputChange}
              className={errors.clearanceCertificate ? "input-error" : ""}
            />
            {errors.clearanceCertificate && (
              <p className="error-message">{errors.clearanceCertificate}</p>
            )}
          </div>
          <div className="form-group">
            <label>Stamp Cost</label>
            <input
              type="text"
              name="stampCost"
              value={formData.stampCost}
              onChange={handleInputChange}
              className={errors.stampCost ? "input-error" : ""}
            />
            {errors.stampCost && (
              <p className="error-message">{errors.stampCost}</p>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Registration Cost</label>
            <input
              type="text"
              name="registrationCost"
              value={formData.registrationCost}
              onChange={handleInputChange}
              className={errors.registrationCost ? "input-error" : ""}
            />
            {errors.registrationCost && (
              <p className="error-message">{errors.registrationCost}</p>
            )}
          </div>
          <div className="form-group">
            <label>Other Expenses</label>
            <input
              type="text"
              name="otherExpenses"
              value={formData.otherExpenses}
              onChange={handleInputChange}
              className={errors.otherExpenses ? "input-error" : ""}
            />
            {errors.otherExpenses && (
              <p className="error-message">{errors.otherExpenses}</p>
            )}
          </div>
        </div>
        <div className="form-row">
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
          <div className="form-group">
            <label>Advocate Address</label>
            <input
              type="text"
              name="advocateAddress"
              value={formData.advocateAddress}
              onChange={handleInputChange}
              className={errors.advocateAddress ? "input-error" : ""}
            />
            {errors.advocateAddress && (
              <p className="error-message">{errors.advocateAddress}</p>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Vendor PAN Number</label>
            <input
              type="text"
              name="vendorPAN"
              value={formData.vendorPAN}
              onChange={handleInputChange}
              className={errors.vendorPAN ? "input-error" : ""}
            />
            {errors.vendorPAN && (
              <p className="error-message">{errors.vendorPAN}</p>
            )}
          </div>
          <div className="form-group">
            <label>Purchaser PAN Number</label>
            <input
              type="text"
              name="purchaserPAN"
              value={formData.purchaserPAN}
              onChange={handleInputChange}
              className={errors.purchaserPAN ? "input-error" : ""}
            />
            {errors.purchaserPAN && (
              <p className="error-message">{errors.purchaserPAN}</p>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Vendor Aadhar Number</label>
            <input
              type="text"
              name="vendorAadhar"
              value={formData.vendorAadhar}
              onChange={handleInputChange}
              className={errors.vendorAadhar ? "input-error" : ""}
            />
            {errors.vendorAadhar && (
              <p className="error-message">{errors.vendorAadhar}</p>
            )}
          </div>
          <div className="form-group">
            <label>Purchaser Aadhar Number</label>
            <input
              type="text"
              name="purchaserAadhar"
              value={formData.purchaserAadhar}
              onChange={handleInputChange}
              className={errors.purchaserAadhar ? "input-error" : ""}
            />
            {errors.purchaserAadhar && (
              <p className="error-message">{errors.purchaserAadhar}</p>
            )}
          </div>
        </div>
        <div className="form-group">
          <button type="submit">Generate Agreement</button>
        </div>
      </div>
    </div>
  );
};

export default PropertySaleAgreement;
