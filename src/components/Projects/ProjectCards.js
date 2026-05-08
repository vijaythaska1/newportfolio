import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
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
          lineHeight: 1.7,
          flex: 1,
          display: "-webkit-box",
          WebkitLineClamp: 4,
          WebkitBoxOrient: "vertical",
          overflow: "hidden"
        }}>
          {props.description}
        </Card.Text>
        <div style={{ marginTop: "16px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
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
                background: "rgba(0, 212, 255, 0.15)",
                border: "1px solid rgba(0, 212, 255, 0.4)",
                color: "#00d4ff",
                boxShadow: "none"
              }}
            >
              <CgWebsite size={14} />
              Live Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
