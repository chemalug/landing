import React from "react";
import { Container } from "reactstrap";
import img from "../../assets/img/bg4.jpg";

export default function Header() {
  let pageHeader = React.createRef();

  return (
    <>
      <div className="page-header">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../../assets/img/bg4.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>

        <Container>
          <div className="content-center ">
            <img
              alt="..."
              className="n-logo"
              src="https://encodely.dev/img/logow-alt.png"
            ></img>
            <h1 className="h1-seo">Technology | Innovation</h1>
            <h3>Desarrollo, creatividad e innovación.</h3>
          </div>
          <div style={{ height: "500px" }}></div>
        </Container>
      </div>
    </>
  );
}
