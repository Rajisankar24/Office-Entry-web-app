import React from "react";
import { Link } from "react-router-dom";
import { useGlobal } from "../AppProvider/AppProvider";
import FilterUserDisplay from "./FilterUserDisplay";
const FilterUserPage = () => {
  const { registeredData, businessData, delSingleData } = useGlobal();
  const myData = registeredData.data;
  // console.log(businessData);

  return (
    <div>
      <div className="home-btn">
        <button className="btn-home">
          <Link to="/" className="home-link">
            Home
          </Link>
        </button>
      </div>
      <FilterUserDisplay
        userList={myData}
        businessData={businessData}
        deleteUser={delSingleData}
      />
    </div>
  );
};

export default FilterUserPage;
