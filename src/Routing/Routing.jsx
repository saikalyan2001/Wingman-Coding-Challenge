import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "../Components/Layout/Navbar/Navbar";
import Sidebar from "../Components/Layout/Sidebar/Sidebar";
import Summary from "../Pages/Summary/Summary";
import Sales from "../Pages/Sales/Sales";
import Chat from "../Pages/Chat/Chat";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Sidebar />

        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
