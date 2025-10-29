import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Jay Joshi</span>{" "}
            from <span className="purple">Rajkot, India</span>.
            <br />
            I’m a Second Year B.Tech Student{" "}
            <br />Currently Working As {" "}
            <span className="purple">A GDG Design Lead</span> from{" "}
            <span className="purple">At Marwadi University</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Series 📺
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
