import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "10px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, letterSpacing: "-0.3px" }}>
              Know Who <strong className="purple">I Am</strong>
            </h1>
            <div className="gradient-line" style={{ margin: "0 0 24px 0" }} />
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset</strong>
        </h1>
        <div className="gradient-line" style={{ marginBottom: "10px" }} />
        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I Use
        </h1>
        <div className="gradient-line" style={{ marginBottom: "10px" }} />
        <Toolstack />
        <Github />
      </Container>
    </Container>
  );
}

export default About;
