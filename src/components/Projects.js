import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/pi1.jpg";
import projImg2 from "../assets/img/pi2.jpg";
import projImg3 from "../assets/img/pi3.png";
import projImg4 from "../assets/img/pi4.jpg";
import projImg5 from "../assets/img/pi5.jpg";
import projImg6 from "../assets/img/pi6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

// Projects tab details

export const Projects = () => {
  const projects = [
    {
      title: "Placement Cell Application",
      description:
        "Developed a Placement Cell web app with React, Node.js, Express, and MongoDB for managing student placements, including user authentication, profile management, job postings, and application tracking. Deployed on Render.",
      imgUrl: projImg1,
       link:"https://github.com/Mayuresh308/Placement_cell.git",
    },
    {
      title: "Employee Review System",
      description:
        "Developed a backend application for employee feedback, task assignment, and review management, enhancing workplace dynamics and supporting company growth.",
      imgUrl: projImg2,
      link:"https://github.com/Mayuresh308/Employee-Review-System.git",
    },
    {
      title: "MERN Chat Application",
      description:
        "A real-time chat application built with modern web technologies. This app features user authentication, one-on-one messaging, and chat rooms, offering a seamless and interactive communication experience.",
      imgUrl: projImg3,
      link:"https://github.com/Mayuresh308/chat-app.git",
    },
    {
      title: "Rock & Mine Prediction ",
      description:
        "Implemented machine learning algorithms in Python to classify underwater objects as rocks or mines using the Sonar dataset, which includes 208 sonar signal observations and 60 features.",
      imgUrl: projImg4,
      link:"https://github.com/Mayuresh308/Rock-vs-Mine-Prediction.git",
    },
    {
      title: "Speech-to-Text ",
      description:
        "Python app for audio-to-text transcription using SpeechRecognition with error handling and WER evaluation, demonstrating expertise in NLP and audio processing. Technologies used: Python, SpeechRecognition, jiwer, Google Speech Recognition API.",
      imgUrl: projImg5,
      link:"https://github.com/Mayuresh308/Speech-to-Text-with-WER.git",
    },
    {
      title: "React TODO (Todiify)",
      description:
        " A task management app developed with React. It allows users to create, edit, and delete tasks, featuring a clean interface for managing daily to-dos efficiently.",
      imgUrl: projImg6,
      link:"https://github.com/Mayuresh308/React-Todo-application.git",
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
                  <h2>Professional Overview</h2>
                  <p>
                    "The future belongs to those who believe in the beauty of
                    their dreams. "
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Education</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Courses</Nav.Link>
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
                          Bachelor of Technology (B.Tech) in Mechanical
                          Engineering P.D.E.A College of Engineering, Manjari,
                          Hadapsar, Pune Graduated with a CGPA of 8.02 in 2024.
                        </p>
                        <p>
                          Before pursuing my B.Tech, I obtained a Diploma in
                          Engineering from S.E.S Polytechnic in Solapur, with a
                          final percentage of 71.59%.
                        </p>
                        <p>
                          I completed my 10th grade education at Shree
                          Siddheshwar High School, Solapur with a percentage of
                          75%.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Full Stack Web Development Course at Coding Ninjas. This
                          comprehensive course equipped me with the fundamental
                          skills and knowledge necessary to excel in the field
                          of web development. Delivered by Coding Ninjas, a
                          leading online education platform, the curriculum
                          covers a wide range of topics including HTML, CSS,
                          JavaScript, React.js, Node.js, and MongoDB.
                          <a
                            href="https://drive.google.com/drive/folders/182Yey0XgPjXVgdhrjCrtIrdSUm6FReWy?usp=drive_link"
                            target="_blank"
                          >
                            Course certification
                          </a>
                        </p>

                        <p>
                          Machine Learning Symbiosis Skills and Professional
                          University This program delves into the theoretical
                          foundations and practical applications of machine
                          learning algorithms and techniques. Through a blend of
                          theoretical lectures, hands-on assignments, and
                          real-world projects, i have learn regression analysis,
                          classification, clustering, neural networks, and deep
                          learning.
                          <a
                            href="https://drive.google.com/file/d/1LwdgpibbZ2j8QstuksHrD_WiyKMdLm6h/view"
                            target="_blank"
                          >
                            Course certification
                          </a>
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
