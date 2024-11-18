import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { 
  AiFillGithub, 
  AiOutlineTwitter, 
  AiFillInstagram 
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const socialLinks = [
    {
      href: "https://github.com/vijaythaska1",
      icon: <AiFillGithub />,
      label: "GitHub"
    },
    {
      href: "https://twitter.com/VIJAYSH96442927",
      icon: <AiOutlineTwitter />,
      label: "Twitter"
    },
    {
      href: "https://www.linkedin.com/in/vijay-sharma1",
      icon: <FaLinkedinIn />,
      label: "LinkedIn"
    },
    {
      href: "https://www.instagram.com/vijay_sharma_0011",
      icon: <AiFillInstagram />,
      label: "Instagram"
    }
  ];

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm passionate about programming and continuously expanding my skills. 🚀
              <br /><br />
              Proficient in modern technologies like{" "}
              <i><b className="purple">Python, JavaScript, and TypeScript</b></i>
              <br /><br />
              My interests focus on developing{" "}
              <i>
                <b className="purple">Innovative Web Technologies</b> and exploring{" "}
                <b className="purple">Blockchain Solutions</b>
              </i>
              <br /><br />
              I specialize in building robust applications using{" "}
              <b className="purple">Node.js</b>, modern JavaScript frameworks like{" "}
              <i><b className="purple">React.js and Next.js</b></i>
            </p>
          </Col>
          <Col md={4} className="myAvtar text-center">
            <Tilt>
              <img 
                src={myImg} 
                className="img-fluid rounded-circle" 
                alt="Personal Avatar" 
              />
            </Tilt>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={12} className="home-about-social text-center">
            <h1>CONNECT WITH ME</h1>
            <p>
              Feel free to <span className="purple">reach out</span> on social media
            </p>
            <div className="home-about-social-links d-flex justify-content-center">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons mx-2"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;