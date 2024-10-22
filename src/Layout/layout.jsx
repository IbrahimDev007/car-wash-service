import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col relative top-[-20]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#C53030"
          fillOpacity="40"
          d="M0,32L48,53.3C96,75,192,117,288,144C384,171,480,181,576,160C672,139,768,85,864,101.3C960,117,1056,203,1152,208C1248,213,1344,139,1392,101.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <Navbar></Navbar>
      <main className="flex-grow">{children}</main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;