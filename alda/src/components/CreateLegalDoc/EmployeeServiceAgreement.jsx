import React, { useState } from "react";
import "./EmployeeServiceAgreement.css";

const EmployeeServiceAgreement = () => {
  const [formData, setFormData] = useState({
    executionPlace: "",
    executionDate: "",
    employerName: "",
    employerRepresentative: "",
    employerRepRelation: "",
    employerRepFatherName: "",
    employerOfficeAddress: "",
    employeeName: "",
    employeeRepRelation: "",
    employeeFatherName: "",
    employeeNationality: "",
    employeeAge: "",
    employeeAddress: "",
    employerBusiness: "",
    postApplied: "",
    applicationDate: "",
    appointedPost: "",
    probationPeriod: "",
    employmentDuration: "",
    placeOfPosting: "",
    reportingDate: "",
    workHoursStart: "",
    workHoursEnd: "",
    weeklyHoliday: "",
    stipend: "",
    salary: "",
    salaryPolicy: "",
    benefitsPolicy: "",
  });

  const [errors, setErrors] = useState({});
  const [isGenerated, setIsGenerated] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    for (const [key, value] of Object.entries(formData)) {
      if (!value) newErrors[key] = "This field is required";
    }
    if (isNaN(formData.employeeAge) || formData.employeeAge <= 0)
      newErrors.employeeAge = "Invalid age";
    if (isNaN(formData.stipend) || formData.stipend <= 0)
      newErrors.stipend = "Invalid stipend amount";
    if (isNaN(formData.salary) || formData.salary <= 0)
      newErrors.salary = "Invalid salary amount";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const handleGenerate = () => {
    if (validateForm()) {
      setIsGenerated(true);
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const generateDocumentContent = () => {
    return `
      EMPLOYEE-SERVICE-AGREEMENT
  
      THIS EMPLOYEE SERVICE AGREEMENT executed at ${formData.companyAddress} on this the ${formData.applicationDate} day of ${formData.employeeAge}
      BETWEEN
      ${formData.companyName}, a company incorporated under the Companies Act, 1956 or Companies Act, 2013, represented by its ${formData.companyRepRelation} Mr./Ms. ${formData.companyRepName}, son of / wife of/ daughter of Mr. ${formData.companyRepFatherName} having its registered office at ${formData.companyAddress}, hereinafter referred to as the EMPLOYER (which expression shall, unless it is repugnant to the context, mean and include its successors-in-interests, administrators and permitted assigns);
      AND
      Mr./Ms. ${formData.employeeName}, son of / wife of/ daughter of Mr. ${formData.employeeFatherName}, Indian, ${formData.employeeNationality}, aged about ${formData.employeeAge} years, residing at ${formData.employeeAddress}, hereinafter referred to as the EMPLOYEE.
      
      WHEREAS
      The EMPLOYER is carrying on the business of ${formData.employerBusiness}.
      The EMPLOYER called for applications from the eligible candidates for the post ${formData.postApplied} and in response thereto an application-dated ${formData.applicationDate} was forwarded by the EMPLOYEE to the EMPLOYER.
      On processing the application and the relevant documents, the EMPLOYER found the EMPLOYEE adequately qualified for the post and offered to appoint him as ${formData.postName} in the Company.
      The EMPLOYEE has accepted the said appointment on the terms and conditions herein after set out.
      
      NOW THEREFORE IN CONSIDERATION OF THE MUTUAL OBLIGATIONS AND UNDER TAKINGS CONTAINED HEREIN THIS AGREEMENT WITNESSETH AS FOLLOWS
      
      NAME OF THE POST:
      The said EMPLOYEE is hereby appointed as ${formData.postName}.
      
      PROBATION AND CONFIRMATION:
      The EMPLOYEE shall be on probation for a period of ${formData.probationPeriod}. The decision of the management on the performance of the EMPLOYEE during the period of probation is final and binding on the EMPLOYEE.
      
      DURATION OF EMPLOYMENT:
      On successful completion of probation, the EMPLOYEE shall be appointed as a permanent EMPLOYEE of the EMPLOYER for a period of ${formData.durationOfEmployment}.
      
      PLACE OF POSTING:
      The EMPLOYEE shall report to work at ${formData.placeOfPosting}, on ${formData.startDate}.
      
      HOURS OF WORK:
      The EMPLOYEE is required to work from ${formData.hoursOfWork} during the Weekdays. The weekly holiday would be on ${formData.weeklyHoliday}.
      
      REMUNERATION
      The EMPLOYER shall pay the EMPLOYEE a stipend of Rs. ${formData.stipend}/- during the period of probation. On successful completion of probation the EMPLOYER shall pay the EMPLOYEE a basic salary of Rs. ${formData.salary}.
      The EMPLOYER shall increase the basic salary of the EMPLOYEE as per the policy of the EMPLOYER.
      
      PERQUISITIES & HOLIDAYS:
      On confirmation, the EMPLOYEE shall be entitled to other benefits, monetary/leave, as is prevalent in the Company, from time to time, as per the ${formData.benefits}.
      
      ARBITRATION:
      Any dispute arising under this Agreement or any matter incidental thereto, shall be submitted for arbitration as per the provisions of Arbitration and Conciliation Act, 1996.
      
      IN WITNESS WHEREOF the parties hereto affixed their signatures on the day, month and year mentioned herein above.
      
      SIGNATURE OF EMPLOYER
      SIGNATURE OF THE EMPLOYEE
      WITNESSES:
      1.
      2.
    `;
  };
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFont("Times", "normal");
    doc.setFontSize(12);

    const content = generateDocumentContent();
    const margins = { top: 20, left: 10, bottom: 20 };
    let y = margins.top;

    // Split content into lines that fit within the page width
    const splitContent = doc.splitTextToSize(content, 180);

    splitContent.forEach((line) => {
      if (y > 260) {
        // New page if content exceeds the page height
        doc.addPage();
        y = margins.top;
      }
      doc.text(line, margins.left, y);
      y += 10;
    });

    doc.save("Employee_Service_Agreement.pdf");
  };

  const handleDownloadWord = () => {
    const content = generateDocumentContent();
    const blob = new Blob([content], { type: "application/msword" });
    saveAs(blob, "Employee_Service_Agreement.doc");
  };

  const handleDownload = (type) => {
    if (type === "PDF") {
      handleDownloadPDF();
    } else if (type === "Word") {
      handleDownloadWord();
    }
  };

  const handleDelete = () => {
    setFormData({
      executionPlace: "",
      executionDate: "",
      employerName: "",
      employerRepresentative: "",
      employerRepRelation: "",
      employerRepFatherName: "",
      employerOfficeAddress: "",
      employeeName: "",
      employeeRepRelation: "",
      employeeFatherName: "",
      employeeNationality: "",
      employeeAge: "",
      employeeAddress: "",
      employerBusiness: "",
      postApplied: "",
      applicationDate: "",
      appointedPost: "",
      probationPeriod: "",
      employmentDuration: "",
      placeOfPosting: "",
      reportingDate: "",
      workHoursStart: "",
      workHoursEnd: "",
      weeklyHoliday: "",
      stipend: "",
      salary: "",
      salaryPolicy: "",
      benefitsPolicy: "",
    });
    setErrors({});
    setIsGenerated(false);
  };

  return (
    <div className="employee-service-agreement-container">
      <div className="employee-service-agreement-form">
        <h2>Employee Service Agreement</h2>
        <form>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="executionPlace">Execution Place</label>
              <input
                type="text"
                id="executionPlace"
                name="executionPlace"
                value={formData.executionPlace}
                onChange={handleInputChange}
                className={errors.executionPlace ? "input-error" : ""}
              />
              {errors.executionPlace && (
                <span className="error-message">{errors.executionPlace}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="executionDate">Execution Date</label>
              <input
                type="date"
                id="executionDate"
                name="executionDate"
                value={formData.executionDate}
                onChange={handleInputChange}
                className={errors.executionDate ? "input-error" : ""}
              />
              {errors.executionDate && (
                <span className="error-message">{errors.executionDate}</span>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="employerName">Employer Name</label>
              <input
                type="text"
                id="employerName"
                name="employerName"
                value={formData.employerName}
                onChange={handleInputChange}
                className={errors.employerName ? "input-error" : ""}
              />
              {errors.employerName && (
                <span className="error-message">{errors.employerName}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="employerRepresentative">
                Employer Representative
              </label>
              <input
                type="text"
                id="employerRepresentative"
                name="employerRepresentative"
                value={formData.employerRepresentative}
                onChange={handleInputChange}
                className={errors.employerRepresentative ? "input-error" : ""}
              />
              {errors.employerRepresentative && (
                <span className="error-message">
                  {errors.employerRepresentative}
                </span>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="employerRepRelation">Employer Rep Relation</label>
              <input
                type="text"
                id="employerRepRelation"
                name="employerRepRelation"
                value={formData.employerRepRelation}
                onChange={handleInputChange}
                className={errors.employerRepRelation ? "input-error" : ""}
              />
              {errors.employerRepRelation && (
                <span className="error-message">
                  {errors.employerRepRelation}
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="employerRepFatherName">
                Employer Rep Father Name
              </label>
              <input
                type="text"
                id="employerRepFatherName"
                name="employerRepFatherName"
                value={formData.employerRepFatherName}
                onChange={handleInputChange}
                className={errors.employerRepFatherName ? "input-error" : ""}
              />
              {errors.employerRepFatherName && (
                <span className="error-message">
                  {errors.employerRepFatherName}
                </span>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="employerOfficeAddress">
                Employer Office Address
              </label>
              <input
                type="text"
                id="employerOfficeAddress"
                name="employerOfficeAddress"
                value={formData.employerOfficeAddress}
                onChange={handleInputChange}
                className={errors.employerOfficeAddress ? "input-error" : ""}
              />
              {errors.employerOfficeAddress && (
                <span className="error-message">
                  {errors.employerOfficeAddress}
                </span>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="employeeName">Employee Name</label>
              <input
                type="text"
                id="employeeName"
                name="employeeName"
                value={formData.employeeName}
                onChange={handleInputChange}
                className={errors.employeeName ? "input-error" : ""}
              />
              {errors.employeeName && (
                <span className="error-message">{errors.employeeName}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="employeeRepRelation">Employee Rep Relation</label>
              <input
                type="text"
                id="employeeRepRelation"
                name="employeeRepRelation"
                value={formData.employeeRepRelation}
                onChange={handleInputChange}
                className={errors.employeeRepRelation ? "input-error" : ""}
              />
              {errors.employeeRepRelation && (
                <span className="error-message">
                  {errors.employeeRepRelation}
                </span>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="employeeFatherName">Employee Father Name</label>
              <input
                type="text"
                id="employeeFatherName"
                name="employeeFatherName"
                value={formData.employeeFatherName}
                onChange={handleInputChange}
                className={errors.employeeFatherName ? "input-error" : ""}
              />
              {errors.employeeFatherName && (
                <span className="error-message">
                  {errors.employeeFatherName}
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="employeeNationality">Employee Nationality</label>
              <input
                type="text"
                id="employeeNationality"
                name="employeeNationality"
                value={formData.employeeNationality}
                onChange={handleInputChange}
                className={errors.employeeNationality ? "input-error" : ""}
              />
              {errors.employeeNationality && (
                <span className="error-message">
                  {errors.employeeNationality}
                </span>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="employeeAge">Employee Age</label>
              <input
                type="number"
                id="employeeAge"
                name="employeeAge"
                value={formData.employeeAge}
                onChange={handleInputChange}
                className={errors.employeeAge ? "input-error" : ""}
              />
              {errors.employeeAge && (
                <span className="error-message">{errors.employeeAge}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="employeeAddress">Employee Address</label>
              <input
                type="text"
                id="employeeAddress"
                name="employeeAddress"
                value={formData.employeeAddress}
                onChange={handleInputChange}
                className={errors.employeeAddress ? "input-error" : ""}
              />
              {errors.employeeAddress && (
                <span className="error-message">{errors.employeeAddress}</span>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="employerBusiness">Employer Business</label>
              <input
                type="text"
                id="employerBusiness"
                name="employerBusiness"
                value={formData.employerBusiness}
                onChange={handleInputChange}
                className={errors.employerBusiness ? "input-error" : ""}
              />
              {errors.employerBusiness && (
                <span className="error-message">{errors.employerBusiness}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="postApplied">Post Applied</label>
              <input
                type="text"
                id="postApplied"
                name="postApplied"
                value={formData.postApplied}
                onChange={handleInputChange}
                className={errors.postApplied ? "input-error" : ""}
              />
              {errors.postApplied && (
                <span className="error-message">{errors.postApplied}</span>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="applicationDate">Application Date</label>
              <input
                type="date"
                id="applicationDate"
                name="applicationDate"
                value={formData.applicationDate}
                onChange={handleInputChange}
                className={errors.applicationDate ? "input-error" : ""}
              />
              {errors.applicationDate && (
                <span className="error-message">{errors.applicationDate}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="appointedPost">Appointed Post</label>
              <input
                type="text"
                id="appointedPost"
                name="appointedPost"
                value={formData.appointedPost}
                onChange={handleInputChange}
                className={errors.appointedPost ? "input-error" : ""}
              />
              {errors.appointedPost && (
                <span className="error-message">{errors.appointedPost}</span>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="probationPeriod">Probation Period</label>
              <input
                type="text"
                id="probationPeriod"
                name="probationPeriod"
                value={formData.probationPeriod}
                onChange={handleInputChange}
                className={errors.probationPeriod ? "input-error" : ""}
              />
              {errors.probationPeriod && (
                <span className="error-message">{errors.probationPeriod}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="employmentDuration">Employment Duration</label>
              <input
                type="text"
                id="employmentDuration"
                name="employmentDuration"
                value={formData.employmentDuration}
                onChange={handleInputChange}
                className={errors.employmentDuration ? "input-error" : ""}
              />
              {errors.employmentDuration && (
                <span className="error-message">
                  {errors.employmentDuration}
                </span>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="placeOfPosting">Place of Posting</label>
              <input
                type="text"
                id="placeOfPosting"
                name="placeOfPosting"
                value={formData.placeOfPosting}
                onChange={handleInputChange}
                className={errors.placeOfPosting ? "input-error" : ""}
              />
              {errors.placeOfPosting && (
                <span className="error-message">{errors.placeOfPosting}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="reportingDate">Reporting Date</label>
              <input
                type="date"
                id="reportingDate"
                name="reportingDate"
                value={formData.reportingDate}
                onChange={handleInputChange}
                className={errors.reportingDate ? "input-error" : ""}
              />
              {errors.reportingDate && (
                <span className="error-message">{errors.reportingDate}</span>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="workHoursStart">Work Hours Start</label>
              <input
                type="time"
                id="workHoursStart"
                name="workHoursStart"
                value={formData.workHoursStart}
                onChange={handleInputChange}
                className={errors.workHoursStart ? "input-error" : ""}
              />
              {errors.workHoursStart && (
                <span className="error-message">{errors.workHoursStart}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="workHoursEnd">Work Hours End</label>
              <input
                type="time"
                id="workHoursEnd"
                name="workHoursEnd"
                value={formData.workHoursEnd}
                onChange={handleInputChange}
                className={errors.workHoursEnd ? "input-error" : ""}
              />
              {errors.workHoursEnd && (
                <span className="error-message">{errors.workHoursEnd}</span>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="weeklyHoliday">Weekly Holiday</label>
              <input
                type="text"
                id="weeklyHoliday"
                name="weeklyHoliday"
                value={formData.weeklyHoliday}
                onChange={handleInputChange}
                className={errors.weeklyHoliday ? "input-error" : ""}
              />
              {errors.weeklyHoliday && (
                <span className="error-message">{errors.weeklyHoliday}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="stipend">Stipend</label>
              <input
                type="number"
                id="stipend"
                name="stipend"
                value={formData.stipend}
                onChange={handleInputChange}
                className={errors.stipend ? "input-error" : ""}
              />
              {errors.stipend && (
                <span className="error-message">{errors.stipend}</span>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="salary">Salary</label>
              <input
                type="number"
                id="salary"
                name="salary"
                value={formData.salary}
                onChange={handleInputChange}
                className={errors.salary ? "input-error" : ""}
              />
              {errors.salary && (
                <span className="error-message">{errors.salary}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="salaryPolicy">Salary Policy</label>
              <input
                type="text"
                id="salaryPolicy"
                name="salaryPolicy"
                value={formData.salaryPolicy}
                onChange={handleInputChange}
                className={errors.salaryPolicy ? "input-error" : ""}
              />
              {errors.salaryPolicy && (
                <span className="error-message">{errors.salaryPolicy}</span>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="benefitsPolicy">Benefits Policy</label>
              <input
                type="text"
                id="benefitsPolicy"
                name="benefitsPolicy"
                value={formData.benefitsPolicy}
                onChange={handleInputChange}
                className={errors.benefitsPolicy ? "input-error" : ""}
              />
              {errors.benefitsPolicy && (
                <span className="error-message">{errors.benefitsPolicy}</span>
              )}
            </div>
          </div>

          <div className="form-actions">
            <button
              type="button"
              onClick={handleGenerate}
              disabled={isGenerated}
              className="generate-button"
            >
              Generate Agreement
            </button>

            {isGenerated && (
              <div className="buttons-container">
                <button
                  type="button"
                  className="download-button"
                  onClick={() => handleDownload("PDF")}
                >
                  Download as PDF
                </button>
                <button
                  type="button"
                  className="download-button"
                  onClick={() => handleDownload("Word")}
                >
                  Download as Word
                </button>
                <button
                  type="button"
                  className="delete-button"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeServiceAgreement;
