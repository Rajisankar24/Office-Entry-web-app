import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import DisplayTable from "./DisplayTable";
import FilterTypes from "./FilterTypes";
import "./FilterUser.css";

const FilterUserDisplay = ({ businessData, deleteUser }) => {
  const { list } = useParams();
  const states = useLocation();
  // console.log(states.state);
  const visitType = ["PhoneCall", "DirectVisit"];
  const newDate = new Date().toISOString().split("T")[0];

  const dates = new Date();
  const firstDate = new Date(dates.getFullYear(), dates.getMonth(), 2)
    .toISOString()
    .split("T")[0];

  const [listParams, setListParams] = useState(list);
  const [fDate, setFDate] = useState();
  const [lDate, setLDate] = useState(newDate);
  const [filterType, setFilterType] = useState([]);
  const [filtDatas, setFiltDatas] = useState([]);

  const filterForData = axios
    .get(
      `http://localhost:5000/app/${fDate}/filteredDatas?date=${lDate}&registerType=${listParams}`
    )
    .then((res) => {
      // console.log(res.data);
      setFilterType(res.data);
      // setTabelLists(res.data);
    });

  const toDateHandler = (e) => {
    const value = e.target.value;
    setLDate(value);
  };

  const fromDateHandler = (e) => {
    const val = e.target.value;
    setFDate(val);
  };

  const handleVistorFilter = (e) => {
    const typeValue = e.target.value;
    setListParams(typeValue);
  };

  const handlePurpose = (e) => {
    const value = e.target.value;
    const filterPurpose = filterType.filter((val) => val.purpose === value);
    setFiltDatas(filterPurpose);
    // console.log(filterPurpose);li
  };

  const handleBusinessFilter = (e) => {
    const value = e.target.value;
    const filtByBusiness = filtDatas.filter((val) => val.business === value);
    setFiltDatas(filtByBusiness);
    // console.log(filtByBusiness);
  };

  useEffect(() => {
    if (states.state == "today") {
      setFDate(newDate);
      // console.log(fDate);
    } else {
      setFDate(firstDate);
    }
  }, []);

  useEffect(() => {
    setFiltDatas(filterType);
  }, [filterType.length]);

  return (
    <section>
      <FilterTypes
        visitType={visitType}
        todayDate={newDate}
        list={list}
        handlePurpose={handlePurpose}
        handleVistorFilter={handleVistorFilter}
        toDateHandler={toDateHandler}
        fromDateHandler={fromDateHandler}
        businessData={businessData}
        handleBusinessFilter={handleBusinessFilter}
        firstDate={firstDate}
        states={states}
      />
      <DisplayTable
        filterType={filtDatas}
        listParams={listParams}
        deleteUser={deleteUser}
      />
    </section>
  );
};

export default FilterUserDisplay;
