import React, { useState } from "react";
import { saveAs } from "file-saver";
import "./MutualDivorcePetition.css";

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
      const docContent = `
IN THE FAMILY COURT AT MUMBAI
PETITION No.         / 2017

IN THE MATTER OF
NAME : ${formData.petitioner1Name}
AGE : ${formData.petitioner1Age}
OCCUPATION : ${formData.petitioner1Occupation}
ADDRESS : ${formData.petitioner1Address}
Mobile No. ${formData.petitioner1Mobile}
Email ID ${formData.petitioner1Email} ….PETITIONER NO. 1

AND

NAME : ${formData.petitioner2Name}
AGE : ${formData.petitioner2Age}
OCCUPATION : ${formData.petitioner2Occupation}
ADDRESS : ${formData.petitioner2Address}
Mobile No. ${formData.petitioner2Mobile}
Email ID ${formData.petitioner2Email} ….PETITIONER NO. 2

A Petition For divorce by mutual consent U/s
(SPECIFY UNDER WHICH ACT, whether)
U/S 13B Of Hindu Marriage Act
Or
U/S 28 Of Special Marriage Act
Or
U/S 10 A Of Divorce Act

The petitioner above named submits this petition praying to state as follows;

That the petitioners were married to each other at ${formData.marriagePlace} on dated ${formData.marriageDate} according to the ${formData.religion} rites and customs/ceremonies. Or before the Marriage Registrar ….............(Name of City/Town)

That the petitioner no. 1 before marriage was ${formData.preMaritalStatus1} and petitioner no. 2 was ${formData.preMaritalStatus2}.
State the pre-marital status of the parties whether bachelor/ spinster/ divorcee/ widow/ widower.
Mention the maiden name of the wife: ${formData.maidenName}.
Mention the religion and domicile of the parties: ${formData.religion}, ${formData.domicile}.
Clearly mention the date since when the parties are staying separately: ${formData.separationDate}.
State the number of children. Their names and age/ date of birth and custody: ${formData.childrenDetails}.
State the details about pending litigation. Under which section, Act, case number and court. Next date fixed before the competent court: ${formData.pendingLitigation}.
State the details about joint immovable property, if any: ${formData.jointPropertyDetails}.

CONSENT TERMS
The consent terms must include what the parties decided about:
- The permanent alimony
- Custody and access of children
- Division of property/ execution of any regd document in respect of immovable property
- Exchange of articles/jewellery/utensils etc
- Withdrawal of pending litigations
- Any other term to which the parties are consenting: ${formData.consentTerms}

That the petitioners hereby declare and confirm that this petition preferred by them is not collusive.
That there is no coercion, force, fraud, undue influence, misrepresentation etc. in filing the present petition, and our consent is free.
That there is no collusion or connivance between the parties in filing this petition.
That this Court has jurisdiction to try and decide this petition as:
- Whether the marriage was solemnized at Mumbai.
- That the parties lastly stayed together at Mumbai.
- The wife is staying at Mumbai.
- Any other reason supported by document: ${formData.courtJurisdiction}.
That the court fee of Rs. 100 is affixed.
The petitioners will rely upon the documents, a list whereof is annexed herewith.

The petitioners pray that;
This Hon'ble court be pleased to dissolve the marriage between the petitioners, solemnized on ….............. by the decree of divorce by mutual consent under section ….............................
Such other and further reliefs as this Hon'ble Court may deem fit and proper in the nature and circumstances of the case;

VERIFICATION
I …............................. age :....................... years, residing at ….......... the petitioner no. 1 do hereby solemnly declare that what is stated in the foregoing paragraphs of the petition is true to best of my own knowledge and belief save and except for the legal submission. Solemnly Declared at ….........
On this ….....................(Date)
Signature of the petitioner no. 1 Advocate

I …............................. age :....................... years, residing at …......... ..the petitioner no. 2 do hereby solemnly declare that what is stated in the foregoing paragraphs of the petition is true to best of my own knowledge and belief save and except for the legal submission.
Solemnly Declared at ….........
On this ….....................(Date)
Signature of the petitioner no. 2 Advocate

Documents to be attached:
- ID proof of both the parties (Copy of Pan Card/ Driving license /Aadhar Card / Election Card/ Passport).
- Marriage proof (Marriage Registration Certificate/ Invitation Card/ Marriage Photograph/ Affidavit of blood relative) (Minimum two documents mandatory).
- Residential proof (Passport/ Aadhar Card/ Election Card/ any other permissible document).
Additional Documents if required:
- Birth Certificate of minor child.
- Registered document for transfer of property.
- Copy of receipt if articles, jewellery, or utensils are exchanged.
            `;

      const blob = new Blob([docContent], { type: "text/plain;charset=utf-8" });
      setDocumentBlob(blob);
      setIsGenerated(true);
    }
  };

  const handleDownload = (format) => {
    if (documentBlob) {
      const fileName = `MutualDivorcePetition.${format.toLowerCase()}`;
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
        {errors.petitioner1Name && (
          <p className="error">{errors.petitioner1Name}</p>
        )}
        <input
          type="text"
          name="petitioner1Age"
          placeholder="Petitioner 1 Age"
          value={formData.petitioner1Age}
          onChange={handleInputChange}
        />
        {errors.petitioner1Age && (
          <p className="error">{errors.petitioner1Age}</p>
        )}
        <input
          type="text"
          name="petitioner1Occupation"
          placeholder="Petitioner 1 Occupation"
          value={formData.petitioner1Occupation}
          onChange={handleInputChange}
        />
        {errors.petitioner1Occupation && (
          <p className="error">{errors.petitioner1Occupation}</p>
        )}
        <input
          type="text"
          name="petitioner1Address"
          placeholder="Petitioner 1 Address"
          value={formData.petitioner1Address}
          onChange={handleInputChange}
        />
        {errors.petitioner1Address && (
          <p className="error">{errors.petitioner1Address}</p>
        )}
        <input
          type="text"
          name="petitioner1Mobile"
          placeholder="Petitioner 1 Mobile No."
          value={formData.petitioner1Mobile}
          onChange={handleInputChange}
        />
        {errors.petitioner1Mobile && (
          <p className="error">{errors.petitioner1Mobile}</p>
        )}
        <input
          type="email"
          name="petitioner1Email"
          placeholder="Petitioner 1 Email ID"
          value={formData.petitioner1Email}
          onChange={handleInputChange}
        />
        {errors.petitioner1Email && (
          <p className="error">{errors.petitioner1Email}</p>
        )}

        <h3>Petitioner 2</h3>
        <input
          type="text"
          name="petitioner2Name"
          placeholder="Petitioner 2 Name"
          value={formData.petitioner2Name}
          onChange={handleInputChange}
        />
        {errors.petitioner2Name && (
          <p className="error">{errors.petitioner2Name}</p>
        )}
        <input
          type="text"
          name="petitioner2Age"
          placeholder="Petitioner 2 Age"
          value={formData.petitioner2Age}
          onChange={handleInputChange}
        />
        {errors.petitioner2Age && (
          <p className="error">{errors.petitioner2Age}</p>
        )}
        <input
          type="text"
          name="petitioner2Occupation"
          placeholder="Petitioner 2 Occupation"
          value={formData.petitioner2Occupation}
          onChange={handleInputChange}
        />
        {errors.petitioner2Occupation && (
          <p className="error">{errors.petitioner2Occupation}</p>
        )}
        <input
          type="text"
          name="petitioner2Address"
          placeholder="Petitioner 2 Address"
          value={formData.petitioner2Address}
          onChange={handleInputChange}
        />
        {errors.petitioner2Address && (
          <p className="error">{errors.petitioner2Address}</p>
        )}
        <input
          type="text"
          name="petitioner2Mobile"
          placeholder="Petitioner 2 Mobile No."
          value={formData.petitioner2Mobile}
          onChange={handleInputChange}
        />
        {errors.petitioner2Mobile && (
          <p className="error">{errors.petitioner2Mobile}</p>
        )}
        <input
          type="email"
          name="petitioner2Email"
          placeholder="Petitioner 2 Email ID"
          value={formData.petitioner2Email}
          onChange={handleInputChange}
        />
        {errors.petitioner2Email && (
          <p className="error">{errors.petitioner2Email}</p>
        )}

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
        {errors.marriagePlace && (
          <p className="error">{errors.marriagePlace}</p>
        )}
        <input
          type="text"
          name="preMaritalStatus1"
          placeholder="Pre-Marital Status of Petitioner 1"
          value={formData.preMaritalStatus1}
          onChange={handleInputChange}
        />
        {errors.preMaritalStatus1 && (
          <p className="error">{errors.preMaritalStatus1}</p>
        )}
        <input
          type="text"
          name="preMaritalStatus2"
          placeholder="Pre-Marital Status of Petitioner 2"
          value={formData.preMaritalStatus2}
          onChange={handleInputChange}
        />
        {errors.preMaritalStatus2 && (
          <p className="error">{errors.preMaritalStatus2}</p>
        )}
        <input
          type="text"
          name="maidenName"
          placeholder="Maiden Name"
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
        {errors.separationDate && (
          <p className="error">{errors.separationDate}</p>
        )}
        <textarea
          name="childrenDetails"
          placeholder="Children Details"
          value={formData.childrenDetails}
          onChange={handleInputChange}
        />
        {errors.childrenDetails && (
          <p className="error">{errors.childrenDetails}</p>
        )}
        <textarea
          name="pendingLitigation"
          placeholder="Pending Litigation"
          value={formData.pendingLitigation}
          onChange={handleInputChange}
        />
        {errors.pendingLitigation && (
          <p className="error">{errors.pendingLitigation}</p>
        )}
        <textarea
          name="jointPropertyDetails"
          placeholder="Joint Property Details"
          value={formData.jointPropertyDetails}
          onChange={handleInputChange}
        />
        {errors.jointPropertyDetails && (
          <p className="error">{errors.jointPropertyDetails}</p>
        )}
        <textarea
          name="consentTerms"
          placeholder="Consent Terms"
          value={formData.consentTerms}
          onChange={handleInputChange}
        />
        {errors.consentTerms && <p className="error">{errors.consentTerms}</p>}
        <textarea
          name="courtJurisdiction"
          placeholder="Court Jurisdiction"
          value={formData.courtJurisdiction}
          onChange={handleInputChange}
        />
        {errors.courtJurisdiction && (
          <p className="error">{errors.courtJurisdiction}</p>
        )}

        <button
          type="button"
          className=".mutual-divorce-petition"
          onClick={handleGenerate}
        >
          Generate
        </button>

        {isGenerated && (
          <div className="buttons">
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
      </form>
    </div>
  );
};

export default MutualDivorcePetition;
