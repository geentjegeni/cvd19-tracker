import React, { Fragment } from "react";
import Home from "../../components/Home";
import NavContainer from "../Navbar/Navbar";

const HomeContainer = () => {
  return (
    <Fragment>
      <NavContainer/>
      <Home />
    </Fragment>
  );
};

export default HomeContainer;
