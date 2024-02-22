import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import projectFair from '../assets/projects/projectFair.png'
import rentalApp from "../assets/projects/rentalApp.png";
const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12}  className="project-card">
            <ProjectCard
              imgPath={rentalApp}
              isBlog={false}
              title="RentalApp"
              ghLink="https://github.com/AbhiramiKarthikeyan/rentalApp"
              description="RateLab, a MERN-based CMS, offers a responsive UI with React . Secure backend using Node.js and Express, with JWT for authentication. "
              note=" The demoLink will take some time to start up the server."
              demoLink="https://rental-app-navy.vercel.app/"
            
              tech="React , Node.js , Express , MongoDB "
            />
          </Col>

        
     
          <Col md={12}  className="project-card">
            <ProjectCard
              imgPath={projectFair}
              isBlog={false}
              title="ProjectFare (Project Management System)"
              ghLink="https://github.com/AbhiramiKarthikeyan/project-fair"
              description="A centralized hub for sharing projects.User dashboard with CRUD Operations on user projects and profile.Secure authentication using JWT tokens Search function based on author name & languages"
            
              demoLink="project-fair-mern-react.vercel.app/"
              
              tech="React , Node.js , Express , MongoDB"
            />
          </Col>


     
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
