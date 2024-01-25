import React, { useState } from "react";
import OverFollowUps from "./OverFollowUps";
import TodayFollowUps from "./TodayFollowUps";
import "./FollowUps.css";
import UpComFollowUp from "./UpComFollowUp";
import MainComp from "../DialogBox/MainComp";

const FollowUps = ({ processData }) => {
  // console.log(processData);
  const today = new Date().toISOString().split("T")[0];

  const [modal, setModal] = useState(false);
  const [followUpsData, setFollowUpsData] = useState();

  // console.log(statusData);
  const toggleModal = (data, items) => {
    setModal(!modal);
    setFollowUpsData([data]);
    console.log(items);
  };

  const todayFollows = processData.filter(
    (val) =>
      val.process.at(-1).nextDate === today ||
      (val.process.at(-1).status === "done" &&
        val.process.at(-2).nextDate === today)
  );
  // console.log(todayFollows);

  const overDueData = processData.filter(
    (val) => val.process.at(-1).nextDate < today
  );
  // console.log(overDueData);

  const upCommingData = processData.filter(
    (val) =>
      val.process.at(-1).nextDate > today ||
      (val.process.at(-1).status === "done" &&
        val.process.at(-2).nextDate > today)
  );
  // console.log(upCommingData);

  return (
    <div className="follow-up-container">
      <TodayFollowUps
        todayFollows={todayFollows}
        today={today}
        toggleModal={toggleModal}
      />
      <OverFollowUps
        overDueData={overDueData}
        today={today}
        toggleModal={toggleModal}
      />
      <UpComFollowUp
        upCommingData={upCommingData}
        today={today}
        toggleModal={toggleModal}
      />
      <MainComp
        modal={modal}
        toggleModal={toggleModal}
        followUpsData={followUpsData}
        setModal={setModal}
      />
    </div>
  );
};

export default FollowUps;
