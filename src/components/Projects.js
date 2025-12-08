import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
import projImg12 from "../assets/img/project-img12.png";  

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
const projects = [
    {
    title: "Mirai Global (PVT) Ltd",
    description: "Created a responsive, modern website for Mirai Global,Japan agency. ",
    imgUrl: projImg2,
    link: "https://www.miraiglobal.jp"
  },
  {
    title: "PLATTO",
    description: "React.js - Frontend Development",
    imgUrl: projImg1,
    link: "https://nawo6TGJD.github.io/Platto/"
  },

  {
    title: "BrewaHub",
    description: "Java , Spring Boot, MySQL - Backend Development",
    imgUrl: projImg3,
    link: "https://github.com/nawo6TGJD/BrewHub.git"
  },
    {
    title: "Cloud Mart",
    description: "Java , Spring Boot, MySQL - Backend Development",
    imgUrl: projImg4,
    link: "https://example.com/project1"
  },
  {
    title: "YumZone",
    description: "React.js - Frontend Development",
    imgUrl: projImg5,
    link: "https://example.com/project2"
  },
  {
    title: "CommerceX ",
    description: "React.js , Springboot , java - Full Stack Development",
    imgUrl: projImg6,
    link: "https://example.com/project3"
  },
    {
    title: " ByteBazaar ",
    description: "Springboot , java - Backend Development",
    imgUrl: projImg7,
    link: "https://example.com/project3"
  },
];
const projects2= [
  {
    title: "CalFit",
    description: "Flutter Application",
    imgUrl: projImg8,
    link: "https://example.com/project1"
  },
  {
    title: "Slice",
    description: "Flutter Application",
    imgUrl: projImg9,
    link: "https://example.com/project2"
  },
    {
    title: "Cosmos",
    description: "Flutter and Node.js Full Stack Application",
    imgUrl: projImg10,
    link: "https://example.com/project2"
  },
    {
    title: "Recipe App ",
    description: "React Native Application",
    imgUrl: projImg11,
    link: "https://example.com/project2"
  },
  
];

const projects3= [
  {
    title: "Final Year Research Project",
    description: "AI-Based Sinhala News Credibility Ranking System",
    imgUrl: projImg12,
    link: "https://example.com/project1"
  },
 
  
];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Mobile-Apps</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Ai-Research</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                         <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
