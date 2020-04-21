import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar
        className={"fixed-top " + navbarColor}
        expand="lg"
        color="warning"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="https://www.encodely.dev"
              target="_blank"
              id="navbar-brand"
            >
              Encodely
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Software, hardware and cloud computing
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler text-righte"
              style={{ color: "white" }}
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
            >
              <span className="navbar-toggler-bar top-bar">
                <h6>
                  <i className="fas fa-bars"></i>
                </h6>
              </span>
            </button>
          </div>
          <Collapse
            className="justify-content-end "
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="#login"
                  className="text-center"
                  style={{ width: "150px" }}
                >
                  <i className="fas fa-user" style={{ width: "20px" }}></i>
                  <p>Login</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <Button
                  className="nav-link btn-neutral"
                  href="#contacto"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact-section").scrollIntoView();
                  }}
                  id="upgrade-to-pro"
                  style={{ width: "150px", color: "black" }}
                >
                  <i
                    className="fas fa-sign-in-alt"
                    style={{ width: "20px" }}
                  ></i>
                  <p>Registro</p>
                </Button>
                <UncontrolledTooltip target="#upgrade-to-pro">
                  Contacta a ventas para más información
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://twitter.com/Encodely_dev"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/encodely"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.linkedin.com/in/chemalug"
                  target="_blank"
                  id="linkedin-tooltip"
                >
                  <i className="fab fa-linkedin"></i>
                  <p className="d-lg-none d-xl-none">Linkedin</p>
                </NavLink>
                <UncontrolledTooltip target="#linkedin-tooltip">
                  Go to developer profile
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
