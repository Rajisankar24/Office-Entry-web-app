import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DisplayForm = ({
  setNewProcess,
  newprocess,
  setUserData,
  userData,
  submitEvent,
  editRegData,
  setImageData,
}) => {
  // console.log(userData.registerType);
  // console.log(editRegData);

  const [selectedImage, setSelectedImage] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);

  const imgLocalPath = "http://localhost:5000/";

  useEffect(() => {
    if (selectedImage) {
      setImgUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  const getEvent = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const changeProcess = (e) => {
    setNewProcess({ ...newprocess, [e.target.name]: e.target.value });
  };

  const uploadImage = (e) => {
    setImageData(e.target.files[0]);
    setSelectedImage(e.target.files[0]);
  };

  const removeImage = () => {
    setImgUrl(null);
  };

  var charFormat = /[!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/;
  var char1Format = /[!@#$%^&*()_+\-=\[\]{};':"\\|<>\/?]+/;
  var char2Format = /[0-9]+/;

  return (
    <section>
      <div className="back-btn">
        <button type="button" className="btn-back">
          <Link to="/" className="back-link">
            Back
          </Link>
        </button>
      </div>
      <form className="register-form">
        <h1 className="reg-title">REGISTER</h1>
        <div className="single-field">
          <label className="lbl" htmlFor="typefield">
            register type
          </label>
          <select
            className="select-opt"
            id="typefield"
            name="registerType"
            onChange={getEvent}
          >
            <option value="">--Select Type--</option>
            <option
              value="PhoneCall"
              selected={editRegData.registerType === "PhoneCall"}
            >
              Phone call
            </option>
            <option
              value="DirectVisit"
              selected={editRegData.registerType === "DirectVisit"}
            >
              Direct visit
            </option>
          </select>
        </div>
        <div className="single-field">
          <label className="lbl">
            person name <span className="name-required">*</span>
          </label>
          <input
            type="text"
            name="personName"
            value={userData.personName}
            className="text-box1"
            onChange={getEvent}
            required
          />
        </div>
        <div className="single-field">
          <div className="required-err">
            <span className="err">
              {charFormat.test(userData.personName)
                ? "*name could not contain special character"
                : char2Format.test(userData.personName)
                ? "*name could not contain numbers"
                : ""}
            </span>
          </div>
          <div className="upload">
            {imgUrl === null ? (
              <label className="lbl-upload">Upload Image</label>
            ) : (
              <label className="lbl-upload">Change</label>
            )}

            {userData.isEdit ? (
              <img
                src={
                  imgUrl == null
                    ? `${imgLocalPath}${editRegData.imageFile}`
                    : `${imgLocalPath}null`
                    ? imgUrl
                    : `${editRegData.imageFile}`
                }
                className="pic"
              />
            ) : (
              <img
                src={imgUrl == null ? "default-img.png" : imgUrl}
                className="pic"
              />
            )}
            <div className="input-img">
              <input
                type="file"
                name="uploadImage"
                accept="image/*"
                className="img-insert"
                onChange={uploadImage}
              />
            </div>
            {imgUrl === null ? (
              <></>
            ) : (
              <>
                <button
                  type="button"
                  className="remove-btn"
                  onClick={removeImage}
                >
                  Remove
                </button>
              </>
            )}
          </div>
        </div>
        <div className="single-field-business">
          <label className="lbl">business</label>
          <input
            type="text"
            name="business"
            value={userData.business}
            className="text-box2"
            onChange={getEvent}
          />
        </div>
        <div className="required-err">
          <span className="err">
            {charFormat.test(userData.business)
              ? "*buisness could not contain special character"
              : char2Format.test(userData.business)
              ? "*business could not contain numbers"
              : ""}
          </span>
        </div>
        <div className="single-field">
          <label className="lbl">mobile no</label>
          <input
            type="number"
            name="mobileNo"
            value={userData.mobileNo}
            className="text-box3"
            onChange={getEvent}
          />
        </div>
        <div className="required-err">
          <span className="err">
            {userData.mobileNo.length > 12 ? "*invalid mobile number" : ""}
          </span>
        </div>
        <div className="single-field">
          <label className="lbl">Purpose</label>
          <select className="select-opt2" name="purpose" onChange={getEvent}>
            <option value="">--Select Purpose--</option>
            <option
              value="serviceRequest"
              selected={editRegData.purpose === "serviceRequest"}
            >
              Service Request
            </option>
            <option
              value="salesEnquiry"
              selected={editRegData.purpose === "salesEnquiry"}
            >
              Sales Enquiry
            </option>
            <option
              value="jobEnquiry"
              selected={editRegData.purpose === "jobEnquiry"}
            >
              Job Enquiry
            </option>
            <option value="Others" selected={editRegData.purpose === "Others"}>
              Ohters
            </option>
          </select>
        </div>
        <div className="single-field">
          <label className="lbl">Note</label>
          <textarea
            type="textarea"
            name="notes"
            value={userData.notes}
            className="textarea-box"
            onChange={getEvent}
          />
        </div>
        <div className="required-err-notes">
          <span className="err">
            {char1Format.test(userData.notes)
              ? "*name should not contain special character"
              : ""}
          </span>
        </div>
        <div className="single-field">
          <label className="lbl">Further Process</label>
          <select
            className="select-opt3"
            name="furtherProcess"
            onChange={getEvent}
          >
            <option value="">--Select--</option>
            <option value="yes" selected={editRegData.furtherProcess === "yes"}>
              Yes
            </option>
            <option value="no" selected={editRegData.furtherProcess === "no"}>
              No
            </option>
          </select>
        </div>
        <>
          {userData.furtherProcess === "yes" ? (
            <div>
              <div className="hidden-fld">
                <div className="single-field">
                  <label className="lbl-date">date</label>
                  <input
                    type="date"
                    className="date-box"
                    name="nextDate"
                    value={newprocess.nextDate}
                    onChange={changeProcess}
                  />
                </div>
                <div className="single-field">
                  <label className="lbl-hidden-note">note</label>
                  <textarea
                    className="text-hidden-note"
                    name="note"
                    value={newprocess.note}
                    onChange={changeProcess}
                  />
                </div>
                <div className="required-err">
                  <span className="err">
                    {char1Format.test(newprocess.note)
                      ? "*notes could not contain special character"
                      : ""}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </>
        <div>
          {userData.registerType === "PhoneCall" ? (
            <div className="single-field-hidden">
              <label className="lbl">call time</label>
              <input
                type="time"
                name="callTime"
                value={userData.callTime}
                className="time-box"
                onChange={getEvent}
              />
            </div>
          ) : (
            <div></div>
          )}
          {userData.registerType === "DirectVisit" ? (
            <>
              <div className="single-field">
                <label className="lbl">in time</label>
                <input
                  type="time"
                  className="time-box2"
                  name="inTime"
                  value={userData.inTime}
                  onChange={getEvent}
                />
              </div>
              <div className="single-field">
                <label className="lbl">out time</label>
                <input
                  type="time"
                  className="time-box3"
                  name="outTime"
                  value={userData.outTime}
                  onChange={getEvent}
                />
              </div>
            </>
          ) : (
            <div></div>
          )}
        </div>
        <div className="button-div">
          <button type="button" className="sbt-btn" onClick={submitEvent}>
            {userData.isEdit ? `Update` : `Submit`}
          </button>
        </div>
      </form>
    </section>
  );
};

export default DisplayForm;
