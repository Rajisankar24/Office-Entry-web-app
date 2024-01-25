import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainComponent from "../DashBoard/MainComponent";
import FilterUserPage from "../FilterUser/FilterUserPage";
import MainForm from "../Form/MainForm";

const RoutePage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainComponent />}></Route>
        <Route path="/register" element={<MainForm />}></Route>
        <Route path="/register/:id" element={<MainForm />}></Route>
        <Route path="/reg/:list" element={<FilterUserPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutePage;
