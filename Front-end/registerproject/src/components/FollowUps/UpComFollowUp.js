import React from "react";
import { TbTarget } from "react-icons/tb";
import { GiCheckMark } from "react-icons/gi";
const UpComFollowUp = ({ upCommingData, today, toggleModal }) => {
  return (
    <section className="single-container">
      <div>
        <h1 className="flw-head">UpComming Follow-ups</h1>
      </div>
      {upCommingData.map((val, index) => {
        const { purpose, personName, business, process } = val;

        const dueDate = process.at(-1).nextDate;
        const diff = Math.abs(new Date(dueDate) - new Date(today));
        const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));

        return (
          <div className="target-point" key={index}>
            <div className="icons">
              <TbTarget className="target-icon" />
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
                <h3 className="purpose-name">{purpose}</h3>
                <div className="days-ago">
                  {dueDate === undefined ? (
                    <>Done</>
                  ) : diffDays === 1 ? (
                    <>In {diffDays} day</>
                  ) : (
                    <>In {diffDays} days</>
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

export default UpComFollowUp;
