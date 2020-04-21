import React from "react";
/**
 * Import components
 */

import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Section1 from "../components/Sections/Section1";
import DarkFooter from "../components/Footer/Footer";
import Section2 from "../components/Sections/Section2";

export default function IndexPage(props) {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Header />
        <div className="main">
          <Section1 />
          <Section2 />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}
