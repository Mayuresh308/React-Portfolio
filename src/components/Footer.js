import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/Mayuresh308"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/mayuresh-devadkar-874403224"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://mayuresh308.github.io/coming-soon/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Made by Mayuresh Devadkar</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
