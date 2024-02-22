import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
} from "react-icons/di";
import {
  SiRedux,
  SiMongodb,
  SiHtml5,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiFirebase,
  SiTypescript
} from "react-icons/si";
import { FaReact } from "react-icons/fa"; // Using FaReact instead of SiMaterialui

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px", scale: "" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://en.wikipedia.org/wiki/HTML" style={{ textDecoration: "none", color: "#f06529" }} target="_blank" rel="noopener noreferrer">
          <SiHtml5 />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://example.com/javascript" style={{ textDecoration: "none", color: "#f0db4f" }} target="_blank" rel="noopener noreferrer">
          <DiJavascript1 />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://example.com/typescript" style={{ textDecoration: "none", color: "blue" }} target="_blank" rel="noopener noreferrer">
          <SiTypescript />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://react.dev/" style={{ textDecoration: "none", color: "#00d8ff" }} target="_blank" rel="noopener noreferrer">
          <DiReact />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://example.com/nodejs" style={{ textDecoration: "none", color: "green" }} target="_blank" rel="noopener noreferrer">
          <DiNodejs />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://example.com/express" style={{ textDecoration: "none", color: "gray" }} target="_blank" rel="noopener noreferrer">
          <SiExpress />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://example.com/mongodb" style={{ textDecoration: "none", color: "green" }} target="_blank" rel="noopener noreferrer">
          <SiMongodb />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://example.com/redux" style={{ textDecoration: "none", color: "purple" }} target="_blank" rel="noopener noreferrer">
          <SiRedux />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://example.com/tailwindcss" style={{ textDecoration: "none", color: "cyan" }} target="_blank" rel="noopener noreferrer">
          <SiTailwindcss />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://example.com/bootstrap" style={{ textDecoration: "none", color: "purple" }} target="_blank" rel="noopener noreferrer">
          <SiBootstrap />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://example.com/materialui" style={{ textDecoration: "none", color: "blue" }} target="_blank" rel="noopener noreferrer">
          <FaReact /> {/* Use FaReact instead of SiMaterialui */}
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://example.com/firebase" style={{ textDecoration: "none", color: "yellow" }} target="_blank" rel="noopener noreferrer">
          <SiFirebase />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://example.com/git" style={{ textDecoration: "none", color: "#e84d31" }} target="_blank" rel="noopener noreferrer">
          <DiGit />
        </a>
      </Col>
    </Row>
  );
}

export default Techstack;

