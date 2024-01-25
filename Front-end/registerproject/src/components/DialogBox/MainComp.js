import React, { useState } from "react";
import DialogBox from "./DialogBox";
import { useGlobal } from "../AppProvider/AppProvider";

const MainComp = ({ modal, toggleModal, followUpsData, setModal }) => {
  // console.log(statusData);

  const { updateStatus } = useGlobal();
  const [saveStatus, setSaveStatus] = useState({
    _id: "",
    nextDate: Date,
    note: "",
    status: "",
  });

  const newStatus = {
    nextDate: saveStatus.nextDate,
    note: saveStatus.note,
    status: saveStatus.status,
  };

  const saveNewData = (personData) => {
    if (!saveStatus.note || !saveStatus.status) {
      alert("Please enter all fields!");
    } else {
      const processArray = personData.process;
      processArray.push(newStatus);
      // console.log(processArray);
      updateStatus(personData);

      setModal(!modal);
    }
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div>
      <DialogBox
        modal={modal}
        toggleModal={toggleModal}
        followUpsData={followUpsData}
        saveNewData={saveNewData}
        setSaveStatus={setSaveStatus}
        saveStatus={saveStatus}
      />
    </div>
  );
};

export default MainComp;
