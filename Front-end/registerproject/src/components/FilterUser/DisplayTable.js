import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { BsDownload } from "react-icons/bs";
import download from "downloadjs";

const DisplayTable = ({ filterType, listParams, deleteUser }) => {
  // console.log(filterType);

  const downloadImageFile = async (data) => {
    // console.log(data.imageFile);
    // console.log(data._id);
    const file = await axios.get(
      `http://localhost:5000/app/downloadImage/${data._id}`,
      {
        responseType: "blob",
      }
    );
    // console.log(file);
    return download(file.data, data.personName);
  };

  const deleteData = (data) => {
    alert("Deleted successfully");
    deleteUser(data);
  };

  return (
    <section>
      <table className="tbl">
        <thead>
          <tr className="tbl-row-head">
            <th>Entry Date</th>
            <th>Person Name</th>
            <th>Mobile No</th>
            <th>Purpose</th>
            <th>Business</th>
            <th>Call Time</th>
            <th>In Time</th>
            <th>Out Time</th>
            <th>Actions</th>
            <th>Images</th>
          </tr>
        </thead>
        <tbody>
          {filterType === [] ? (
            <tr>
              <td>no data found</td>
            </tr>
          ) : (
            filterType.map((items, index) => {
              const {
                _id,
                date,
                personName,
                mobileNo,
                purpose,
                notes,
                business,
                imageFile,
                process,
                note,
                nextDate,
                callTime,
                inTime,
                outTime,
              } = items;
              // console.log(process.map((val) => val.nextDate));
              // console.log(items);

              return (
                <tr className="tbl-row" key={index}>
                  <td className="tbl-data">{date}</td>
                  <td className="tbl-data-personName">{personName}</td>
                  <td className="tbl-data-phoneCall">{mobileNo}</td>
                  <td className="tbl-data-purpose">{purpose}</td>
                  <td className="tbl-data-business">{business}</td>
                  {listParams === "PhoneCall" ? (
                    <td className="tbl-data-time">{callTime}</td>
                  ) : (
                    <td>--</td>
                  )}
                  {listParams === "DirectVisit" ? (
                    <>
                      <td className="tbl-data-time">{inTime}</td>
                      <td className="tbl-data-time">{outTime}</td>
                    </>
                  ) : (
                    <>
                      <td className="tbl-data-time">--</td>
                      <td className="tbl-data-time">--</td>
                    </>
                  )}
                  <td>
                    <button
                      type="button"
                      className="dlt-btn-icon"
                      onClick={() => deleteData(items)}
                    >
                      <RiDeleteBin6Line className="del-icon" />
                    </button>
                    <Link
                      to={`/register/${_id}`}
                      state={items}
                      className="edt-btn-icon"
                    >
                      <FiEdit3 className="edit-icon" />
                    </Link>
                  </td>

                  <td>
                    {imageFile !== null ? (
                      <>
                        <BsDownload
                          className="dl-icon"
                          onClick={() => downloadImageFile(items)}
                        />
                      </>
                    ) : (
                      <div>--</div>
                    )}{" "}
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </section>
  );
};

export default DisplayTable;
