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
              title="AIRMS"
              description="AIRMS (AI Risk Mitigation System) detects, analyzes, and reduces potential AI-related risks in real time. Using the Presidio Algorithm, it ensures safe, transparent, and reliable AI operations through intelligent monitoring and predictive risk prevention."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="AIVA"
              description="AIVA (AI Virtual Assistant) is an intelligent voice-based system designed to perform real-time tasks through speech and text commands. It integrates automation and natural interaction to enhance user productivity and deliver seamless digital assistance."
              ghLink="https://github.com/jay0237/AIVA"
              demoLink="https://aiva-frontend-xljmvqyaoq-uc.a.run.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="3D Project"
              description="My 3D React Portfolio showcases creativity through interactive design and smooth animations. It features dynamic 3D objects for an engaging user experience, blending modern UI/UX with responsive performance to present my projects in a visually immersive way."
              ghLink="https://github.com/jay0237/Portfoilio-React"
              demoLink="https://jay0237.github.io/Portfoilio-React/#about"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
