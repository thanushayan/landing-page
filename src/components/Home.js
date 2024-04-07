import React from "react";
import img from "../asset/hero.png";
import image2 from "../asset/image 2.png";
import image3 from "../asset/image 3.png";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Home = () => {
  return (
    <div style={{ backgroundColor: "white", overflow: "hidden" }}>
      <section className="hero-section">
        <Container fluid className="p-0">
          <Row>
            <Col className="p-0 position-relative">
              <img src={img} alt="Hero Image" className="img-fluid w-100" />

              <Card
                className="position-absolute bottom-0 start-0 m-5 ml-lg-5 d-none d-lg-block"
                style={{
                  background: "linear-gradient(to right, #4DCA79, #1CBDDD)",
                  borderRadius: 0,
                  border: "none",
                }}
              >
                <Card.Body>
                  <Card.Title>
                    <h1 style={{ color: "white" }}>
                      We Crush Your <br />
                      Competitors, Goals, And
                      <br />
                      Sales Record - Without
                      <br />
                      The B.S.
                    </h1>
                  </Card.Title>
                  <Button
                    variant="primary"
                    style={{ backgroundColor: "#F28D35", border: "none" }}
                  >
                    GET FREE CONSULTATION
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col className=" d-lg-none">
              <Card
                style={{
                  background: "linear-gradient(to right, #4DCA79, #1CBDDD)",
                  borderRadius: 0,
                  border: "none",
                }}
              >
                <Card.Body>
                  <Card.Title>
                    <h1 style={{ color: "white" }}>
                      We Crush Your <br />
                      Competitors, Goals, And
                      <br />
                      Sales Record - Without
                      <br />
                      The B.S.
                    </h1>
                  </Card.Title>
                  <Button
                    variant="primary"
                    style={{ backgroundColor: "#F28D35", border: "none" }}
                  >
                    GET FREE CONSULTATION
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <Row className="justify-content-center align-items-center m-5">
        <Col md={4} className="text-center d-lg-block d-md-block d-none">
          <img
            alt="Logo"
            src={image2}
            width="200"
            className="d-inline-block align-center"
          />
        </Col>

        <Col md={8} className=" d-lg-block d-md-block d-none">
          <Card style={{ border: "none" }}>
            <Card.Body>
              <Card.Title>
                <h3 style={{ color: "#6B3CC9" }}>
                  Web & Mobile App Development
                </h3>
              </Card.Title>
              <Card.Text className="text-black">
                Your web and mobile Apps are pieces of the puzzle to grow your
                business. We use frameworks which tailor content and engagement
                methods to respond to different intents shown by your potential
                customers who interact with your business online.
              </Card.Text>
              <Button
                variant="primary"
                style={{ backgroundColor: "#F28D35", border: "none" }}
              >
                LEARN MORE
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} className="text-center d-sm-block d-md-none">
          <img
            alt="Logo"
            src={image2}
            width="200"
            className="d-inline-block align-center"
          />
        </Col>

        <Col sm={12} className="text-center d-sm-block d-md-none">
          <Card style={{ border: "none" }}>
            <Card.Body>
              <Card.Title>
                <h3 style={{ color: "#6B3CC9" }}>
                  Web & Mobile App Development
                </h3>
              </Card.Title>
              <Card.Text className="text-black">
                Your web and mobile Apps are pieces of the puzzle to grow your
                business. We use frameworks which tailor content and engagement
                methods to respond to different intents shown by your potential
                customers who interact with your business online.
              </Card.Text>
              <Button
                variant="primary"
                style={{ backgroundColor: "#F28D35", border: "none" }}
              >
                LEARN MORE
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center align-items-center">
 
  <Col md={8} className=" d-lg-block d-md-block d-none">
    <Card style={{ border: "none" }} className="m-3 p-5">
      <Card.Body>
        <Card.Title>
          <h3 style={{ color: "#6B3CC9" }}>
            Digital Strategy Consulting
          </h3>
        </Card.Title>
        <Card.Text className="text-black">
          Your digital strategy should complement the overall marketing
          strategy of the company. In online marketing, each component
          will never work in isolation, and every business needs a
          different mix. We provide a clear concept and strategic overview
          to find the most efficient model for your business.
        </Card.Text>
        <Button
          variant="primary"
          style={{ backgroundColor: "#F28D35", border: "none" }}
        >
          LEARN MORE
        </Button>
      </Card.Body>
    </Card>
  </Col>


  <Col md={4} className="text-center d-lg-block d-md-block d-none">
    <img
      alt="Logo"
      src={image3}
      width="200"
      className="d-inline-block align-center"
    />
  </Col>

  
  <Col sm={12} className="text-center d-sm-block d-md-none">
    <img
      alt="Logo"
      src={image3}
      width="200"
      className="d-inline-block align-center"
    />
  </Col>
  <Col sm={12} className="text-center d-sm-block   d-md-none">
    <Card style={{ border: "none" }} className="m-3">
      <Card.Body>
        <Card.Title>
          <h3 style={{ color: "#6B3CC9" }}>
            Digital Strategy Consulting
          </h3>
        </Card.Title>
        <Card.Text className="text-black">
          Your digital strategy should complement the overall marketing
          strategy of the company. In online marketing, each component
          will never work in isolation, and every business needs a
          different mix. We provide a clear concept and strategic overview
          to find the most efficient model for your business.
        </Card.Text>
        <Button
          variant="primary"
          style={{ backgroundColor: "#F28D35", border: "none" }}
        >
          LEARN MORE
        </Button>
      </Card.Body>
    </Card>
  </Col>
</Row>

    </div>
  );
};

export default Home;