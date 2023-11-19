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
      description: "Deployment under process",
      imgUrl: require("../assets/img/projects/learnz.png"),
      gitUrl: "https://github.com/Astraxx04/LearnZ", 
      pageUrl: "https://astraxx200254.pythonanywhere.com",
    },
    {
      title: "Ticket Booking",
      description: "A Python and Flask app for ticket booking, allowing users to book tickets and enabling admin to track trends with graphs.",
      imgUrl: require("../assets/img/projects/ticketshow.png"),
      gitUrl: "https://github.com/Astraxx04/ticketshow_mad1", 
      pageUrl: "https://astraxx04.pythonanywhere.com",
    },
    {
      title: "Organ Procurement",
      description: "Hospitals can request organs, and nearby hospitals with available organs will be displayed based on proximity.",
      imgUrl: require("../assets/img/projects/organProcurement.png"),
      gitUrl: "https://github.com/Astraxx04/Organ_Procurement_Network", 
      pageUrl: "https://astraxx2542.pythonanywhere.com",
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