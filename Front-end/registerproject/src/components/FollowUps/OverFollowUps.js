import React from "react";
import { TbTarget } from "react-icons/tb";
import { GiCheckMark } from "react-icons/gi";
import { Link } from "react-router-dom";

const OverFollowUps = ({ overDueData, today, toggleModal }) => {
  // console.log(checkIfDone);
  return (
    <section className="section-center">
      <div>
        <h1 className="flw-head">Pending Follow-ups</h1>
      </div>
      {overDueData.map((val, index) => {
        const { purpose, personName, business, process } = val;

        const dueDate = process.at(-1).nextDate;
        const diff = Math.abs(new Date(today) - new Date(dueDate));
        const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));

        return (
          <div className="target-point" key={index}>
            <div className="icons">
              <TbTarget className="tar-icon" />
              {process.some((val) => val.status === "done") ? (
                <GiCheckMark
                  className="green-mark"
                  onClick={() => toggleModal(val, process)}
                />
              ) : (
                <GiCheckMark
                  className="tick-mark"
                  onClick={() => toggleModal(val, process)}
                />
              )}
            </div>
            <div className="data-container">
              <div className="purpose-date">
                <h3 className="purpose">{purpose}</h3>
                <div className="days-ago">
                  {dueDate == undefined ? (
                    <>Done</>
                  ) : diffDays === 1 ? (
                    <>{diffDays} day ago</>
                  ) : (
                    <>{diffDays} days ago</>
                  )}
                </div>
              </div>
              <div className="pro-names">
                <p className="busi-name">{business}</p>
                <h1 className="seperate">.</h1>
                <p className="p-name">{personName}</p>
              </div>
              <p className="txt-note">
                {process.slice(-1).map((val, index) => {
                  const { note } = val;
                  return (
                    <div key={index} className="qry-note">
                      {note}
                    </div>
                  );
                })}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default OverFollowUps;
