import React from "react";
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
export default function Section2() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const sendEmail = () => {
    console.log("Enviando email");
  };
  return (
    <>
      <div
        className="section section-contact-us text-center"
        id="contact-section"
      >
        <Container>
          <h2 className="title">Quieres contactarte con nosotros?</h2>
          <p className="description">
            Para la utilización de nuestros productos y servicios, debes de ser
            registrado por nuestra área de ventas.
          </p>
          <Row>
            <Col className="text-center ml-auto mr-auto" lg="6" md="8">
              <InputGroup
                className={
                  "input-lg" + (firstFocus ? " input-group-focus" : "")
                }
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="now-ui-icons users_circle-08"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Nombre y apellido..."
                  type="text"
                  onFocus={() => setFirstFocus(true)}
                  onBlur={() => setFirstFocus(false)}
                ></Input>
              </InputGroup>
              <InputGroup
                className={"input-lg" + (lastFocus ? " input-group-focus" : "")}
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="now-ui-icons ui-1_email-85"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Email..."
                  type="email"
                  onFocus={() => setLastFocus(true)}
                  onBlur={() => setLastFocus(false)}
                ></Input>
              </InputGroup>
              <div className="textarea-container">
                <Input
                  cols="80"
                  name="name"
                  placeholder="Escribe un mensaje..."
                  rows="4"
                  type="textarea"
                ></Input>
              </div>
              <div className="send-button">
                <Button
                  block
                  className="btn-round"
                  color="info"
                  onClick={(e) => sendEmail()}
                  size="lg"
                >
                  Enviar mensaje
                </Button>
              </div>
            </Col>
          </Row>
          <br />
          <br />
          <Row className="justify-content-md-center sharing-area text-center">
            <Col className="text-center" lg="8" md="12">
              <h3>Gracias por contactarnos!</h3>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-neutral btn-icon btn-round"
                color="twitter"
                href="https://www.twitter.com/encodely"
                id="tooltip86114138"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip86114138">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="facebook"
                href="https://www.facebook.com/encodely"
                id="tooltip735272548"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip735272548">
                Like us
              </UncontrolledTooltip>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="linkedin"
                href="https://www.linkedin.com/in/chemalug"
                id="tooltip647117716"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip647117716">
                Developer profile
              </UncontrolledTooltip>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="github"
                href="https://github.com/encodely"
                id="tooltip331904895"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip331904895">
                Star on Github
              </UncontrolledTooltip>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
