import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
const projects = [
    {
    title: "Mirai Global (PVT) Ltd",
    description: "Created a responsive, modern website for Mirai Global,Japan agency.",
    imgUrl: projImg2,
    link: "https://www.miraiglobal.jp"
  },
  {
    title: "PLATTO",
    description: "Designed and developed a responsive, user-friendly food ordering application.",
    imgUrl: projImg1,
    link: "https://nawo6TGJD.github.io/Platto/"
  },

  {
    title: "Portfolio Website",
    description: "Responsive Design",
    imgUrl: projImg3,
    link: "https://example.com/project3"
  },
    {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg1,
    link: "https://example.com/project1"
  },
  {
    title: "E-commerce App",
    description: "React & Node.js",
    imgUrl: projImg2,
    link: "https://example.com/project2"
  },
  {
    title: "Portfolio Website",
    description: "Responsive Design",
    imgUrl: projImg3,
    link: "https://example.com/project3"
  },
];
const projects2= [
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg1,
    link: "https://example.com/project1"
  },
  {
    title: "E-commerce App",
    description: "React & Node.js",
    imgUrl: projImg2,
    link: "https://example.com/project2"
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
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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
