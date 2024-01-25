import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
const context = React.createContext();

const AppProvider = ({ children }) => {
  const [registeredData, setRegisteredData] = useState({ data: [] });
  const [businessData, setBusinessData] = useState([]);
  // console.log(registeredData);
  // GETTING ALL REGISTER USER DATA
  const getAllData = () => {
    axios.get("http://localhost:5000/app").then((res) => {
      setRegisteredData({ data: res.data });
      // console.log(res.data);
    });
  };

  // GETTING BUSINESS DATA
  const getBusinessData = () => {
    axios.get("http://localhost:5000/app/business").then((res) => {
      const resultDatas = res.data.filter(Boolean);
      setBusinessData(resultDatas);
      // console.log(resultDatas);
    });
  };

  //CREATE DATA FOR REGISTER
  const createData = (data) => {
    if (!data.isEdit) {
      axios.post("http://localhost:5000/app", data).then((res) => {
        getAllData();
      });
    } else {
      axios
        .patch(`http://localhost:5000/app/update/${data._id}`, data)
        .then((res) => {
          getAllData();
        });
    }
  };

  // FOR UPDATING PROCESS DATA
  const updateStatus = (data) => {
    axios
      .put(`http://localhost:5000/app/status/${data._id}`, data)
      .then((res) => getAllData());
  };

  // DELETING SINGLE USER DATA
  const delSingleData = (data) => {
    // console.log(data._id);
    axios
      .delete(`http://localhost:5000/app/delete/${data._id}`)
      .then((res) => getAllData());
  };

  useEffect(() => {
    getAllData();
    getBusinessData();
  }, []);

  return (
    <div>
      <context.Provider
        value={{
          registeredData,
          createData,
          businessData,
          delSingleData,
          updateStatus,
        }}
      >
        {children}
      </context.Provider>
    </div>
  );
};

export const useGlobal = () => {
  return useContext(context);
};
export { context, AppProvider };
