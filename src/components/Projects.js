import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/pi1.jpg";
import projImg2 from "../assets/img/pi2.jpg";
import projImg3 from "../assets/img/pi3.jpg";
import projImg4 from "../assets/img/pi4.jpg";
import projImg5 from "../assets/img/pi5.jpg";
import projImg6 from "../assets/img/pi6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Placement Cell Application",
      description:
        "Developed a Placement Cell web app with React, Node.js, Express, and MongoDB for managing student placements, including user authentication, profile management, job postings, and application tracking. Deployed on Render.",
      imgUrl: projImg1,
    },
    {
      title: "Employee Review System",
      description: "Developed a backend application for employee feedback, task assignment, and review management, enhancing workplace dynamics and supporting company growth.",
      imgUrl: projImg2,
    },
    {
      title: "Number-Plate-Detection",
      description: "Created an automatic number plate recognition system using TensorFlow and EasyOCR to accurately identify and extract license plate information, enhancing security and toll collection efficiency.",
      imgUrl: projImg3,
    },
    {
      title: "Body Language Decoder",
      description: "Developed a body language decoder with MediaPipe and Python for real-time gesture and movement analysis, leveraging pose estimation for applications in interactive systems and virtual reality.",
      imgUrl: projImg4,
    },
    {
        title: "Speech-to-Text ",
      description: "Python app for audio-to-text transcription using SpeechRecognition with error handling and WER evaluation, demonstrating expertise in NLP and audio processing. Technologies used: Python, SpeechRecognition, jiwer, Google Speech Recognition API.",
      imgUrl: projImg5,
    },
    {
      title: "Rock vs Mine Prediction",
      description: "Implemented machine learning algorithms in Python to classify underwater objects as rocks or mines using the Sonar dataset, which includes 208 sonar signal observations and 60 features.",
      imgUrl: projImg6,
    },
  ];

  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    "The difference between a successful project and an
                    unsuccessful one is in the execution."
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
