import React from "react";
import { TbTarget } from "react-icons/tb";
import { GiCheckMark } from "react-icons/gi";

const TodayFollowUps = ({ todayFollows, today, toggleModal, statusData }) => {
  return (
    <section className="single-container">
      <div>
        <h1 className="flw-head">Today Follow-ups</h1>
      </div>

      {todayFollows.map((val, index) => {
        const { purpose, personName, business, process } = val;
        const dueDate = process.at(-1).nextDate;

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
                  {dueDate === today ? (
                    <>Today</>
                  ) : dueDate === undefined ? (
                    <>Done</>
                  ) : (
                    <></>
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

export default TodayFollowUps;
