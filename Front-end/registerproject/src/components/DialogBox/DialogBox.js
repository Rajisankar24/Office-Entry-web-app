import React, { useState } from "react";
import "./DialogBox.css";
import { GrClose } from "react-icons/gr";

const DialogBox = ({
  modal,
  toggleModal,
  followUpsData,
  saveNewData,
  setSaveStatus,
  saveStatus,
}) => {
  // console.log(followUpsData);
  const getNewData = (e) => {
    setSaveStatus({ ...saveStatus, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div>
        {modal &&
          followUpsData.map((item, index) => {
            const { _id, purpose, business, personName, process } = item;
            // console.log(process);
            return (
              <div className="dialog-box" key={index}>
                <div className="overlay"></div>
                <div className="modal-content">
                  <div className="top-head">
                    <h2 className="head">Next Follow-Up</h2>
                  </div>
                  <div className="name-purpose">
                    <h2 className="cls-purpose">{purpose}</h2>
                  </div>
                  <div className="busi-per-name">
                    <h3 className="cls-busi">{business}</h3>
                    <div className="dot">.</div>
                    <h3 className="cls-perName">{personName}</h3>
                  </div>
                  <div className="seperat"></div>
                  <form className="dialog-form" key={index}>
                    <label className="sts">Status</label>
                    <select
                      className="select-status"
                      name="status"
                      onChange={getNewData}
                    >
                      <option value="">--Select Status--</option>
                      <option value="done">done</option>
                      <option value="postponed">postponed</option>
                      <option value="next">next</option>
                    </select>
                    <div>
                      <label className="nt-box">Note</label>
                      <textarea
                        className="textarea"
                        name="note"
                        onChange={getNewData}
                      />
                    </div>
                    {saveStatus.status === "done" ? (
                      <div>
                        <label className="date-bx">Follow-up Date</label>
                        <input
                          type="date"
                          className="dt-box"
                          name="nextDate"
                          onChange={getNewData}
                          disabled
                        />
                      </div>
                    ) : (
                      <div>
                        <label className="date-bx">Follow-up Date</label>
                        <input
                          type="date"
                          className="dt-box"
                          name="nextDate"
                          onChange={getNewData}
                        />
                      </div>
                    )}
                    <div className="btn-container">
                      <button
                        type="button"
                        className="save-btn"
                        onClick={() => saveNewData(item)}
                      >
                        Save
                      </button>
                    </div>
                  </form>
                  <GrClose className="close-btn" onClick={toggleModal} />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default DialogBox;
