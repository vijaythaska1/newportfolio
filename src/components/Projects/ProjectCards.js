import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaApple, FaGooglePlay } from "react-icons/fa";

function ProjectCards(props) {
  const isAppStore = props.demoLink && props.demoLink.includes("apps.apple.com");

  return (
    <Card className="project-card-view">
      <div style={{
        overflow: "hidden",
        background: "rgba(255,255,255,0.03)",
        borderBottom: "1px solid rgba(255,255,255,0.08)"
      }}>
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt={props.title}
          style={{
            height: "180px",
            objectFit: "contain",
            padding: "20px",
            transition: "transform 0.4s ease"
          }}
          onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
        />
      </div>
      <Card.Body style={{ padding: "20px 22px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
        <Card.Title style={{
          fontWeight: 700,
          fontSize: "1.05rem",
          color: "#f0f4ff",
          marginBottom: "10px",
          letterSpacing: "-0.2px"
        }}>
          {props.title}
        </Card.Title>
        <Card.Text style={{
          textAlign: "left",
          color: "#8892b0",
          fontSize: "0.85rem",
          lineHeight: 1.6,
          marginBottom: "16px"
        }}>
          {props.description}
        </Card.Text>
        <div style={{ marginTop: "auto", display: "flex", gap: "8px", flexWrap: "wrap", paddingTop: "12px" }}>
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.82rem" }}
          >
            <BsGithub size={14} />
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.82rem",
                background: isAppStore ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 212, 255, 0.15)",
                border: isAppStore ? "1px solid rgba(255, 255, 255, 0.3)" : "1px solid rgba(0, 212, 255, 0.4)",
                color: isAppStore ? "#ffffff" : "#00d4ff",
                boxShadow: "none"
              }}
            >
              {isAppStore ? <FaApple size={15} /> : <CgWebsite size={14} />}
              {isAppStore ? "App Store" : "Live Demo"}
            </Button>
          )}
          {props.playLink && (
            <Button
              variant="primary"
              href={props.playLink}
              target="_blank"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.82rem",
                background: "rgba(0, 230, 118, 0.15)",
                border: "1px solid rgba(0, 230, 118, 0.4)",
                color: "#00e676",
                boxShadow: "none"
              }}
            >
              <FaGooglePlay size={13} />
              Play Store
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
