import { Container, Row, Col, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "../assets/css/projects.css";
import TrackVisibility from 'react-on-screen';

function Projects() {

  const projects = [
    {
      title: "Track Leaf",
      description: "An effective inventory management system or ensuring the seamless flow of resources while optimizing costs and reducing waste.",
      imgUrl: require("../assets/img/projects/trackleaf.png"),
      gitUrl: "https://github.com/Astraxx04/TrackLeaf", 
      pageUrl: "https://track-leaf-1iwu.vercel.app",
    },
    {
      title: "Hackman v6",
      description: "A web portal designed to streamline hackathon registrations and provide essential information to users.",
      imgUrl: require("../assets/img/projects/hackman.png"),
      gitUrl: "https://github.com/Astraxx04/hackmanv6", 
      pageUrl: "https://www.hackman.in",
    },
    {
      title: "Catalysis",
      description: "A static web portal designed to give necessary information about the events organised during a technical fest.",
      imgUrl: require("../assets/img/projects/catalysis.png"),
      gitUrl: "https://github.com/Astraxx04/catalysis", 
      pageUrl: "https://catalysis.netlify.app",
    },
    {
      title: "Learn Z",
      description: "Design & Development",
      imgUrl: require("../assets/img/projects/ticketshow.png"),
      gitUrl: "https://github.com/Astraxx04/LearnZ", 
      pageUrl: "",
    },
    {
      title: "Ticket Booking",
      description: "A show ticket booking application made from python and flask. It helps users book tickets and helps the admin in identifying trends through graphs",
      imgUrl: require("../assets/img/projects/ticketshow.png"),
      gitUrl: "https://github.com/Astraxx04/ticketshow_mad1", 
      pageUrl: "",
    },
    {
      title: "Organ Procurement",
      description: "Hospitals will be able to request for a required organ and the hospitals with the required organ will be displayed according to their distance.",
      imgUrl: require("../assets/img/projects/organProcurement.png"),
      gitUrl: "https://github.com/Astraxx04/Organ_Procurement_Network", 
      pageUrl: "",
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
                <p>Here are few of the projects I've worked on so far.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard key={index} {...project} />
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
      <img className="background-image-right" src={colorSharp2} alt="BackgroundImg"></img>
    </section>
  )
}

export default Projects;