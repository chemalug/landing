import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function Section1() {
  return (
    <>
      <div className="section section-download" data-background-color="black">
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h3 className="title">
                Transforma tu empresa a una empresa de aplicaciones
              </h3>
              <h5 className="description">
                Hoy en día, todas las empresas necesitan aplicaciones para
                atraer a sus clientes y administrar sus negocios. Mejora tu
                capacidad para construir, administrar e implementar excelentes
                aplicaciones a escala con Encodely.
              </h5>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-round"
                color="warning"
                href="https://blog.encodely.dev"
                role="button"
                size="lg"
              >
                Blog Encodely
              </Button>
              <Button
                className="btn-round"
                color="primary"
                href="https://code.encodely.dev"
                outline
                role="button"
                size="lg"
              >
                Code Encodely
              </Button>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row className="text-center mt-5">
            <Col className="ml-auto mr-auto" md="8">
              <h2>Want more?</h2>
              <h5 className="description">
                Te apoyamos en la construcción de un prototipo simple o un
                producto crítico para el negocio, te brindamos varias
                plataformas completamente administrada de Encodely o bien por tu
                cuenta, que te brinda el camino más simple para entregar
                implmenetar tus aplicaciones rápidamente.
              </h5>
            </Col>
            <Col md="12">
              <Button
                className="btn-neutral btn-round"
                color="default"
                href="https://plat.encodely.dev"
                size="lg"
                disabled
              >
                <i className="now-ui-icons arrows-1_share-66 mr-1"></i>
                Plataformas
              </Button>
            </Col>
          </Row>
          <br></br>
          <br></br>
        </Container>
      </div>
    </>
  );
}

export default Section1;
