import React, { useEffect, useState } from "react";
import "./Form.css";
import DisplayForm from "./DisplayForm";
import axios from "axios";

const MyForm = ({ navigator, createData, editUser }) => {
  // console.log(myData.date);

  const [imageData, setImageData] = useState();
  // console.log(imageData);
  const [userData, setUserData] = useState({
    date: new Date().toISOString().split("T")[0],
    registerType: "",
    personName: "",
    business: "",
    mobileNo: "",
    purpose: "",
    notes: "",
    furtherProcess: "",
    inTime: TimeRanges,
    outTime: TimeRanges,
    callTime: TimeRanges,
    isEdit: false,
  });

  const [newprocess, setNewProcess] = useState({
    nextDate: Date,
    note: "",
    status: "new",
  });

  // console.log(dataEdit);

  const submitForm = async () => {
    if (
      !userData.registerType ||
      !userData.personName ||
      !userData.business ||
      !userData.mobileNo ||
      !userData.purpose ||
      !userData.notes ||
      !userData.furtherProcess
    ) {
      alert("please fill all the fields");
    } else if (!userData.isEdit) {
      alert("Registered Successfully");

      const imgFileData = new FormData();
      imgFileData.append("uploadImage", imageData);

      const imgFile = async (data) => {
        const configr = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };

        const fileData = await axios
          .post(`http://localhost:5000/file/uploadImage`, data, configr)
          .then((res) => {
            // console.log(res.data);
            return res.data;
          })
          .catch((error) => {
            console.log(error);
          });

        let newItem = {
          date: userData.date,
          registerType: userData.registerType,
          personName: userData.personName,
          business: userData.business,
          mobileNo: userData.mobileNo,
          imageFile: fileData ? `${fileData.path}` : null,
          purpose: userData.purpose,
          notes: userData.notes,
          furtherProcess: userData.furtherProcess,
          process:
            userData.furtherProcess === "yes"
              ? [
                  {
                    nextDate: newprocess.nextDate,
                    note: newprocess.note,
                    status: newprocess.status,
                  },
                ]
              : null,
          inTime: userData.inTime,
          outTime: userData.outTime,
          callTime: userData.callTime,
          isEdit: userData.isEdit,
        };
        createData(newItem);
        // console.log(newItem);
      };
      imgFile(imgFileData);

      navigator("/");
    } else {
      alert("Form Updated Successfully");

      const imgFileData = new FormData();
      imgFileData.append("uploadImage", imageData);

      const imgFile = async (data) => {
        const configr = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };

        const fileData = await axios
          .post(`http://localhost:5000/file/uploadImage`, data, configr)
          .then((res) => {
            // console.log(res.data);
            return res.data;
          })
          .catch((error) => {
            console.log(error);
          });
        const dataEdit = {
          _id: userData._id,
          date: userData.date,
          registerType: userData.registerType,
          personName: userData.personName,
          business: userData.business,
          mobileNo: userData.mobileNo,
          imageFile: fileData ? `${fileData.path}` : userData.imageFile,
          purpose: userData.purpose,
          notes: userData.notes,
          furtherProcess: userData.furtherProcess,
          process:
            userData.furtherProcess === "yes"
              ? [
                  {
                    nextDate: newprocess.nextDate,
                    note: newprocess.note,
                    status: newprocess.status,
                  },
                ]
              : null,
          inTime: userData.inTime,
          outTime: userData.outTime,
          callTime: userData.callTime,
          isEdit: userData.isEdit,
        };
        createData(dataEdit);
      };
      imgFile(imgFileData);
      navigator(-1);
    }
    setUserData({
      registerType: "",
      personName: "",
      mobileNo: "",
      purpose: "",
      furtherProcess: "",
      inTime: "",
      outTime: "",
      callTime: "",
      notes: "",
    });
  };

  useEffect(() => {
    if (editUser._id != null) {
      setUserData({
        _id: editUser._id,
        date: editUser.date,
        registerType: editUser.registerType,
        personName: editUser.personName,
        business: editUser.business,
        mobileNo: editUser.mobileNo,
        imageFile: editUser.imageFile,
        purpose: editUser.purpose,
        notes: editUser.notes,
        furtherProcess: editUser.furtherProcess,
        process:
          editUser.furtherProcess === "yes"
            ? [
                {
                  nextDate: editUser.nextDate,
                  note: editUser.note,
                  status: editUser.status,
                },
              ]
            : null,
        inTime: editUser.inTime,
        outTime: editUser.outTime,
        callTime: editUser.callTime,
        isEdit: true,
      });
      const processdata = editUser.process;
      if (processdata != null) {
        setNewProcess({
          nextDate: editUser.process[processdata.length - 1].nextDate,
          note: editUser.process[processdata.length - 1].note,
          status: editUser.process[processdata.length - 1].status,
        });
      }
      // console.log(editUser.imageFile);
    }
  }, [editUser]);

  return (
    <div>
      <DisplayForm
        setUserData={setUserData}
        userData={userData}
        submitEvent={submitForm}
        newprocess={newprocess}
        setNewProcess={setNewProcess}
        editRegData={editUser}
        setImageData={setImageData}
      />
    </div>
  );
};

export default MyForm;
