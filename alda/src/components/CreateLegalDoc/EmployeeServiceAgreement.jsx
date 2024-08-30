import React, { useState } from 'react';
import './EmployeeServiceAgreement.css';

const EmployeeServiceAgreement = () => {
  const [formData, setFormData] = useState({
    executionPlace: '',
    executionDate: '',
    employerName: '',
    employerRepresentative: '',
    employerRepRelation: '',
    employerRepFatherName: '',
    employerOfficeAddress: '',
    employeeName: '',
    employeeRepRelation: '',
    employeeFatherName: '',
    employeeNationality: '',
    employeeAge: '',
    employeeAddress: '',
    employerBusiness: '',
    postApplied: '',
    applicationDate: '',
    appointedPost: '',
    probationPeriod: '',
    employmentDuration: '',
    placeOfPosting: '',
    reportingDate: '',
    workHoursStart: '',
    workHoursEnd: '',
    weeklyHoliday: '',
    stipend: '',
    salary: '',
    salaryPolicy: '',
    benefitsPolicy: '',
  });

  const [errors, setErrors] = useState({});
  const [isGenerated, setIsGenerated] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    for (const [key, value] of Object.entries(formData)) {
      if (!value) newErrors[key] = 'This field is required';
    }
    if (isNaN(formData.employeeAge) || formData.employeeAge <= 0) newErrors.employeeAge = 'Invalid age';
    if (isNaN(formData.stipend) || formData.stipend <= 0) newErrors.stipend = 'Invalid stipend amount';
    if (isNaN(formData.salary) || formData.salary <= 0) newErrors.salary = 'Invalid salary amount';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: '' });
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
      executionPlace: '',
      executionDate: '',
      employerName: '',
      employerRepresentative: '',
      employerRepRelation: '',
      employerRepFatherName: '',
      employerOfficeAddress: '',
      employeeName: '',
      employeeRepRelation: '',
      employeeFatherName: '',
      employeeNationality: '',
      employeeAge: '',
      employeeAddress: '',
      employerBusiness: '',
      postApplied: '',
      applicationDate: '',
      appointedPost: '',
      probationPeriod: '',
      employmentDuration: '',
      placeOfPosting: '',
      reportingDate: '',
      workHoursStart: '',
      workHoursEnd: '',
      weeklyHoliday: '',
      stipend: '',
      salary: '',
      salaryPolicy: '',
      benefitsPolicy: '',
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
                className={errors.executionPlace ? 'input-error' : ''}
              />
              {errors.executionPlace && <span className="error-message">{errors.executionPlace}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="executionDate">Execution Date</label>
              <input
                type="date"
                id="executionDate"
                name="executionDate"
                value={formData.executionDate}
                onChange={handleInputChange}
                className={errors.executionDate ? 'input-error' : ''}
              />
              {errors.executionDate && <span className="error-message">{errors.executionDate}</span>}
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
              required
            />
            {errors.employerName && <span className="error-message">{errors.employerName}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="employerRepresentative">Employer Representative</label>
            <input
              type="text"
              id="employerRepresentative"
              name="employerRepresentative"
              value={formData.employerRepresentative}
              onChange={handleInputChange}
              required
            />
            {errors.employerRepresentative && <span className="error-message">{errors.employerRepresentative}</span>}
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
              required
            />
            {errors.employerRepRelation && <span className="error-message">{errors.employerRepRelation}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="employerRepFatherName">Employer Rep Father Name</label>
            <input
              type="text"
              id="employerRepFatherName"
              name="employerRepFatherName"
              value={formData.employerRepFatherName}
              onChange={handleInputChange}
              required
            />
            {errors.employerRepFatherName && <span className="error-message">{errors.employerRepFatherName}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="employerOfficeAddress">Employer Office Address</label>
            <input
              type="text"
              id="employerOfficeAddress"
              name="employerOfficeAddress"
              value={formData.employerOfficeAddress}
              onChange={handleInputChange}
              required
            />
            {errors.employerOfficeAddress && <span className="error-message">{errors.employerOfficeAddress}</span>}
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
              required
            />
            {errors.employeeName && <span className="error-message">{errors.employeeName}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="employeeRepRelation">Employee Rep Relation</label>
            <input
              type="text"
              id="employeeRepRelation"
              name="employeeRepRelation"
              value={formData.employeeRepRelation}
              onChange={handleInputChange}
              required
            />
            {errors.employeeRepRelation && <span className="error-message">{errors.employeeRepRelation}</span>}
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
              required
            />
            {errors.employeeFatherName && <span className="error-message">{errors.employeeFatherName}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="employeeNationality">Employee Nationality</label>
            <input
              type="text"
              id="employeeNationality"
              name="employeeNationality"
              value={formData.employeeNationality}
              onChange={handleInputChange}
              required
            />
            {errors.employeeNationality && <span className="error-message">{errors.employeeNationality}</span>}
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
              required
            />
            {errors.employeeAge && <span className="error-message">{errors.employeeAge}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="employeeAddress">Employee Address</label>
            <input
              type="text"
              id="employeeAddress"
              name="employeeAddress"
              value={formData.employeeAddress}
              onChange={handleInputChange}
              required
            />
            {errors.employeeAddress && <span className="error-message">{errors.employeeAddress}</span>}
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
          required
        />
        {errors.employerBusiness && <span className="error-message">{errors.employerBusiness}</span>}
      </div>
    </div>

    <div className="form-row">
      <div className="form-group">
        <label htmlFor="postApplied">Post Applied</label>
        <input
          type="text"
          id="postApplied"
          name="postApplied"
          value={formData.postApplied}
          onChange={handleInputChange}
          required
        />
        {errors.postApplied && <span className="error-message">{errors.postApplied}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="applicationDate">Application Date</label>
        <input
          type="date"
          id="applicationDate"
          name="applicationDate"
          value={formData.applicationDate}
          onChange={handleInputChange}
          required
        />
        {errors.applicationDate && <span className="error-message">{errors.applicationDate}</span>}
      </div>
    </div>

    <div className="form-row">
      <div className="form-group">
        <label htmlFor="appointedPost">Appointed Post</label>
        <input
          type="text"
          id="appointedPost"
          name="appointedPost"
          value={formData.appointedPost}
          onChange={handleInputChange}
          required
        />
        {errors.appointedPost && <span className="error-message">{errors.appointedPost}</span>}
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
          required
        />
        {errors.probationPeriod && <span className="error-message">{errors.probationPeriod}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="employmentDuration">Employment Duration</label>
        <input
          type="text"
          id="employmentDuration"
          name="employmentDuration"
          value={formData.employmentDuration}
          onChange={handleInputChange}
          required
        />
        {errors.employmentDuration && <span className="error-message">{errors.employmentDuration}</span>}
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
          required
        />
        {errors.placeOfPosting && <span className="error-message">{errors.placeOfPosting}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="reportingDate">Reporting Date</label>
        <input
          type="date"
          id="reportingDate"
          name="reportingDate"
          value={formData.reportingDate}
          onChange={handleInputChange}
          required
        />
        {errors.reportingDate && <span className="error-message">{errors.reportingDate}</span>}
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
          required
        />
        {errors.workHoursStart && <span className="error-message">{errors.workHoursStart}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="workHoursEnd">Work Hours End</label>
        <input
          type="time"
          id="workHoursEnd"
          name="workHoursEnd"
          value={formData.workHoursEnd}
          onChange={handleInputChange}
          required
        />
        {errors.workHoursEnd && <span className="error-message">{errors.workHoursEnd}</span>}
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
          required
        />
        {errors.weeklyHoliday && <span className="error-message">{errors.weeklyHoliday}</span>}
      </div>
    </div>

    <div className="form-row">
      <div className="form-group">
        <label htmlFor="stipend">Stipend</label>
        <input
          type="number"
          id="stipend"
          name="stipend"
          value={formData.stipend}
          onChange={handleInputChange}
          required
        />
        {errors.stipend && <span className="error-message">{errors.stipend}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="salary">Salary</label>
        <input
          type="number"
          id="salary"
          name="salary"
          value={formData.salary}
          onChange={handleInputChange}
          required
        />
        {errors.salary && <span className="error-message">{errors.salary}</span>}
      </div>
    </div>

    <div className="form-row">
      <div className="form-group">
        <label htmlFor="salaryPolicy">Salary Policy</label>
        <input
          type="text"
          id="salaryPolicy"
          name="salaryPolicy"
          value={formData.salaryPolicy}
          onChange={handleInputChange}
          required
        />
        {errors.salaryPolicy && <span className="error-message">{errors.salaryPolicy}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="benefitsPolicy">Benefits Policy</label>
        <input
          type="text"
          id="benefitsPolicy"
          name="benefitsPolicy"
          value={formData.benefitsPolicy}
          onChange={handleInputChange}
          required
        />
        {errors.benefitsPolicy && <span className="error-message">{errors.benefitsPolicy}</span>}
      </div>
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
              <button type="button" className="delete-button" onClick={handleDelete}>
                Delete
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeServiceAgreement;