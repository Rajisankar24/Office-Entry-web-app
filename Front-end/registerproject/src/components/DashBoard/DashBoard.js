import React from "react";
import { Link } from "react-router-dom";

const DashBoard = ({
  phone,
  directVisit,
  directVisitMonth,
  phoneVisitMonth,
}) => {
  return (
    <section>
      <div className="add">
        <button className="add-btn">
          <Link className="add-link" to="/register">
            Add
          </Link>
        </button>
        <div className="dash-bs">
          <>
            <div className="dash-board">
              <h3 className="today-head">Today</h3>
              <div className="line"></div>
              <div className="counts">
                <Link to={`/reg/PhoneCall`} state="today" className="call-link">
                  <button className="calls-btn">
                    <h3> {phone.length}</h3>
                    <p>CALLS</p>
                    {/* <FilterUser /> */}
                  </button>
                </Link>
                <div className="vert-line"></div>
                <Link
                  to={`/reg/DirectVisit`}
                  state="today"
                  className="visit-link"
                >
                  <button className="visitor-btn">
                    <h3>{directVisit.length}</h3>
                    <p>VISITORS</p>
                  </button>
                </Link>
              </div>
            </div>
          </>
          <>
            <div className="dash-board">
              <h3 className="today-head">This Month</h3>
              <div className="line"></div>
              <div className="counts">
                <Link to={`/reg/PhoneCall`} state="month" className="call-link">
                  <button className="calls-btn">
                    <h3> {phoneVisitMonth.length}</h3>
                    <p>CALLS</p>
                    {/* <FilterUser /> */}
                  </button>
                </Link>
                <div className="vert-line"></div>
                <Link
                  to={`/reg/DirectVisit`}
                  state="month"
                  className="visit-link"
                >
                  <button className="visitor-btn">
                    <h3>{directVisitMonth.length}</h3>
                    <p>VISITORS</p>
                  </button>
                </Link>
              </div>
            </div>
          </>
        </div>
      </div>
    </section>
  );
};

export default DashBoard;
