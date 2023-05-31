import React from "react";
import Home from "../Pages/Home/Home";
import Navigation from "../Shared/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";

const Main = () => {
  return (
    <div>
   <Navigation></Navigation>
   <Outlet>
   </Outlet>
   <Footer></Footer>
    </div>
  );
};

export default Main;
