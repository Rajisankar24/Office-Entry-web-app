import React from "react";
import { useGlobal } from "../AppProvider/AppProvider";
import FollowUpMain from "../FollowUps/FollowUpMain";
import DashBoard from "./DashBoard";
import "./DashBoard.css";

const MainComponent = () => {
  const { registeredData } = useGlobal();
  const myNewData = registeredData.data;
  // console.log(myNewData.date);

  const today = new Date().toISOString().split("T")[0];
  const dates = new Date();
  const firstDate = new Date(dates.getFullYear(), dates.getMonth(), 2)
    .toISOString()
    .split("T")[0];

  const directVisit = myNewData.filter(
    (val) => val.date === today && val.registerType === "DirectVisit"
  );

  const phone = myNewData.filter(
    (val) => val.date === today && val.registerType === "PhoneCall"
  );

  const directVisitMonth = myNewData.filter(
    (val) =>
      val.date >= firstDate &&
      val.date <= today &&
      val.registerType === "DirectVisit"
  );

  const phoneVisitMonth = myNewData.filter(
    (val) =>
      val.date >= firstDate &&
      val.date <= today &&
      val.registerType === "PhoneCall"
  );

  return (
    <div>
      <>
        <h2 className="dashboard-container">Dash Board</h2>
      </>
      <DashBoard
        phone={phone}
        directVisit={directVisit}
        directVisitMonth={directVisitMonth}
        phoneVisitMonth={phoneVisitMonth}
      />
      <FollowUpMain registeredData={registeredData} />
    </div>
  );
};

export default MainComponent;
