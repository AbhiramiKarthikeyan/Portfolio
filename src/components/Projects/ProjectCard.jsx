import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";

const ProjectCard = (props) => {
  return (
    <Card
      className="project-card-view"
      
    >
      <Card.Img
        variant="top"
        src={props.imgPath}
        
        alt="card-img"
      className="project-card-image img-fluid "
      />
      <Card.Body
        className="project-card-body"
      >
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", fontSize: "15px" }}>
        <strong>Overview :</strong>  {props.description}
        </Card.Text>
       {props.tech && <Card.Text style={{ textAlign: "justify", fontSize: "15px" }}>
          <strong>Stack :</strong> {props.tech}
        </Card.Text>}
       {props.note && <Card.Text style={{ textAlign: "justify", fontSize: "15px" }}>
          <strong>Note :</strong>
          {props.note}
        </Card.Text>}
        <div className="d-flex justify-content-start flex-column flex-md-row w-100  gap-2 gap-md-4">
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "flex-end",
              textAlign: "center",
              position: "relative",
              bottom: "0px",
            }}
          >
            <BsGithub /> &nbsp;
            {"GitHub"}
          </Button>

          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{
                marginTop: "",
                display: "flex",
                justifyContent: "center",
                alignContent: "flex-end",
                alignItems: "center",
                textAlign: "center",
                position: "static",
                bottom: "0px",
              }}
            >
              <CgWebsite /> &nbsp;
              {"Live Link"}
            </Button>
          )}
          {props.demoVideo && (
            <Button
              variant="primary"
              href={props.demoVideo}
              target="_blank"
              style={{
                marginTop: "",
                display: "flex",
                justifyContent: "center",
                alignContent: "flex-end",
                alignItems: "center",
                textAlign: "center",
                position: "static",
                bottom: "0px",
              }}
            >
              <FaYoutube />
              &nbsp;
              {"Demo Video"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};
export default ProjectCard;
