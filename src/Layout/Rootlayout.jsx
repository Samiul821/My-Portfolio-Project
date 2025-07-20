import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";

const Rootlayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        {/* Outlet for nested routes */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Rootlayout;
