import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row className="align-items-center">
        <Col md="4" className="footer-copywright">
          <h3 style={{ color: "#5a6785", fontSize: "0.82em" }}>Designed &amp; Built by <span style={{ color: "#6c63ff" }}>Vijay Sharma</span></h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3 style={{ color: "#5a6785", fontSize: "0.82em" }}>© {year} All rights reserved</h3>
        </Col>
        <Col md="4" className="footer-body">
          <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
            {[
              { href: "https://github.com/vijaythaska1", icon: <AiFillGithub size={16} />, label: "GitHub" },
              { href: "https://twitter.com/VIJAYSH9644292", icon: <AiOutlineTwitter size={16} />, label: "Twitter" },
              { href: "https://www.linkedin.com/in/vijay-sharma1", icon: <FaLinkedinIn size={16} />, label: "LinkedIn" },
              { href: "https://www.instagram.com/vijay_sharma_0011/profilecard/?igsh=MXRiNXlyZjdvbHJ3aA==", icon: <AiFillInstagram size={16} />, label: "Instagram" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  border: "1px solid rgba(108,99,255,0.25)",
                  color: "#8892b0",
                  transition: "all 0.25s ease",
                  textDecoration: "none",
                  background: "rgba(255,255,255,0.04)"
                }}
                onMouseOver={e => {
                  e.currentTarget.style.color = "#f0f4ff";
                  e.currentTarget.style.borderColor = "#6c63ff";
                  e.currentTarget.style.background = "rgba(108,99,255,0.15)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseOut={e => {
                  e.currentTarget.style.color = "#8892b0";
                  e.currentTarget.style.borderColor = "rgba(108,99,255,0.25)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
