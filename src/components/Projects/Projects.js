import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Vendor Portal"
              description="Vendor Portal developed as per client needs, which includes Admin, Vendor and ProjectHead to manage all the projects and to mark the status wether the project is active or inactive or paid or unpaid."
              ghLink="#"
              
            />
          </Col>

         
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Tellus - A Ecommerce Site for Farmers"
              description="Revolutionize agricultural commerce with our innovative blockchain-based e-commerce platform tailored for farmers. Powered by Ethereum, our site ensures secure and transparent transactions. Built with cutting-edge technologies like HTML, CSS, and React JS, we provide a seamless and user- friendly experience for farmers in the digital marketplace."
              ghLink=""
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="DDoS attack and its Prevention"
              description="Led a cybersecurity project developing robust DDoS attack prevention measures, enhancing network resilience and mitigating potential disruptions. Implemented advanced defense strategies and collaborated with cross-functional teams to fortify the system against cyber threats. Successfully safeguarded critical infrastructure and maintained uninterrupted service availability."
              ghLink=""
              demoLink=""
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Door Unlock System using Face Recognition"
              description="Trained Door unlock system using Face Recognition, built with Python and OpenCv"
              
              ghLink=""
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
