/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a href="https://www.encodely.dev" target="_blank">
                Encodely
              </a>
            </li>
            <li>
              <a href="https://code.encodely.dev" target="_blank">
                Code in cloud
              </a>
            </li>
            <li>
              <a href="https://blog.encodely.dev" target="_blank">
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            href="https://www.invisionapp.com?ref=nukr-dark-footer"
            target="_blank"
          >
            Invision
          </a>
          . Coded by{" "}
          <a href="https://www.linkedin.com/in/chemalug" target="_blank">
            José Miranda
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
