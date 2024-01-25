import React, { useState } from "react";

const FilterTypes = ({
  visitType,
  todayDate,
  list,
  handlePurpose,
  handleVistorFilter,
  handleBusinessFilter,
  businessData,
  toDateHandler,
  states,
  fromDateHandler,
  firstDate,
}) => {
  return (
    <section>
      <div className="top-container">
        <div>
          <label className="drb-lbl">From Date</label>
          {states.state == "today" ? (
            <input
              className="dte-box"
              type="date"
              defaultValue={todayDate}
              onChange={fromDateHandler}
            />
          ) : (
            <input
              className="dte-box"
              type="date"
              defaultValue={firstDate}
              onChange={fromDateHandler}
            />
          )}
        </div>
        <div>
          <label className="drb-lbl">To Date</label>
          <input
            className="dte-box"
            type="date"
            defaultValue={todayDate}
            onChange={toDateHandler}
          />
        </div>
        <div>
          <label className="drb-lbl">Register Type</label>
          <select
            className="type-box"
            name="registerType"
            onChange={handleVistorFilter}
          >
            {visitType.map((val, index) => {
              // console.log(val);
              return (
                <option key={index} value={val} selected={val == list}>
                  {val}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label className="drb-lbl">Purpose</label>
          <select
            name="purpose"
            onChange={handlePurpose}
            className="purpose-box"
          >
            <option value="">--Select Purpose--</option>
            <option value="serviceRequest">Service Request</option>
            <option value="salesEnquiry">Sales Enquiry</option>
            <option value="jobEnquiry">Job Enquiry</option>
            <option value="Others">Ohters</option>
          </select>
        </div>
        <div>
          <label className="drb-lbl">Business</label>
          <select
            className="business-box"
            name="business"
            onChange={handleBusinessFilter}
          >
            <option value="" className="drop-business">
              --Select Business--
            </option>
            {businessData.map((val, index) => {
              return (
                <option key={index} value={val} className="option-business">
                  {val}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </section>
  );
};

export default FilterTypes;
