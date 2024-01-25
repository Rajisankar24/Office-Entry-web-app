import React, { useState } from "react";
import MyForm from "./MyForm";
import { useGlobal } from "../AppProvider/AppProvider";
import { useLocation, useNavigate } from "react-router-dom";

const MainForm = () => {
  const { registeredData, createData } = useGlobal();
  //   const myData = registeredData.data;
  const navigator = useNavigate();
  const editMember = useLocation();
  const editDataState = editMember.state;

  const [editUser, setEditUser] = useState(editDataState || []);
  return (
    <div>
      <MyForm
        navigator={navigator}
        createData={createData}
        editUser={editUser}
      />
    </div>
  );
};

export default MainForm;
