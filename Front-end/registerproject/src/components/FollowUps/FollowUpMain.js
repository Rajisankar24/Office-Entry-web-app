import React from "react";
import { useGlobal } from "../AppProvider/AppProvider";
import FollowUps from "./FollowUps";

const FollowUpMain = ({ registeredData }) => {
  // console.log(registeredData.data)
  const fullData = registeredData.data;
  const processData = fullData.filter((val) => val.furtherProcess === "yes");
  // console.log(processData);
  return (
    <div>
      <FollowUps processData={processData} />
    </div>
  );
};

export default FollowUpMain;
