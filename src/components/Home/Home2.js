import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
             I’m Jay Joshi, a software engineer who loves turning random sparks of inspiration into smooth, functional digital experiences. I mix creativity with logic, design with code, and caffeine with ambition — usually in that order. My projects aim to be fast, reliable, and just a little bit fun to use. Whether it’s crafting seamless user interfaces or building solid backend systems, I enjoy making ideas come alive. Sure, there are a few bugs along the way, but that’s just part of the story — because perfect code is boring, and I prefer a bit of chaos in creation.
              <br />
              <br />
               
              and exploring new ways to bridge on-chain and off-chain systems.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
