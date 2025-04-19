import { useState } from 'react';
import { Container, Row, Col, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import '../assets/css/projects.css';
import TrackVisibility from 'react-on-screen';
import { useInView } from 'react-intersection-observer';

function Projects() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const [showMiniProjects, setShowMiniProjects] = useState(false);

    const handleMiniProjectsClick = () => {
        setShowMiniProjects(!showMiniProjects);
    };
    const getArrowCharacter = () => (showMiniProjects ? '↑' : '↓');

    const projects = [
        {
            title: 'Pratyaksh',
            description:
                'Pratyaksh offers a solution that combines GIS and Digital Image Processing for real-time progress tracking of infrastructure development.',
            imgUrl: require('../assets/img/projects/pratyaksh.png'),
            gitUrl: 'https://github.com/Pratyaksh-DORA/Pratyaksh',
            pageUrl: 'https://main--ninja-hattori.netlify.app/',
        },
        {
            title: 'Track Leaf',
            description:
                'An effective inventory management system or ensuring the seamless flow of resources while optimizing costs and reducing waste.',
            imgUrl: require('../assets/img/projects/trackleaf.png'),
            gitUrl: 'https://github.com/Astraxx04/TrackLeaf',
            pageUrl: 'https://track-leaf-1iwu.vercel.app',
        },
        {
            title: 'Hackman v7',
            description:
                'A web portal designed to streamline hackathon registrations and provide essential information to users.',
            imgUrl: require('../assets/img/projects/hackmanv7.png'),
            gitUrl: 'https://github.com/Astraxx04/hackmanv7',
            pageUrl: 'https://www.hackman.in',
        },
        {
            title: 'Catalysis2.0',
            description:
                'A MERN Stack application designed to take registrations of participants and provide them with the necessaey information about a technical fest.',
            imgUrl: require('../assets/img/projects/catalysis2.png'),
            gitUrl: 'https://github.com/Astraxx04/Catalysis2.0',
            pageUrl: 'https://isecatalysis.in',
        },
        {
            title: 'Learn Z',
            description:
                'An all-in-one E-learning platform for students and teachers where students can access materials posted by educators.',
            imgUrl: require('../assets/img/projects/learnz.png'),
            gitUrl: 'https://github.com/Astraxx04/LearnZ',
            pageUrl: 'https://astraxx200254.pythonanywhere.com',
        },
        {
            title: 'Ticket Booking',
            description:
                'A Python and Flask app for ticket booking, allowing users to book tickets and enabling admin to track trends with graphs.',
            imgUrl: require('../assets/img/projects/ticketshow.png'),
            gitUrl: 'https://github.com/Astraxx04/ticketshow_mad1',
            pageUrl: 'https://astraxx04.pythonanywhere.com',
        },
    ];

    const extraprojects = [
        {
            title: 'Hackman v6',
            description:
                'A web portal designed to streamline hackathon registrations and provide essential information to users.',
            imgUrl: require('../assets/img/projects/hackmanv6.png'),
            gitUrl: 'https://github.com/Astraxx04/hackmanv6',
            pageUrl: 'https://hackman.netlify.app',
        },
        {
            title: 'Organ Procurement',
            description:
                'Hospitals can request organs, and nearby hospitals with available organs will be displayed based on proximity.',
            imgUrl: require('../assets/img/projects/organProcurement.png'),
            gitUrl: 'https://github.com/Astraxx04/Organ_Procurement_Network',
            pageUrl: 'https://astraxx2542.pythonanywhere.com',
        },
        {
            title: 'Weather App',
            description:
                'A react native application which displays current weather, predicted weather and city details obtained from OpenWeatherMap API',
            imgUrl: require('../assets/img/projects/weatherApp.png'),
            gitUrl: 'https://github.com/Astraxx04/Weather-App',
            pageUrl: 'https://github.com/Astraxx04/Weather-App',
        },
        {
            title: 'Catalysis',
            description:
                'A static web portal designed to give necessary information about the events organised during a technical fest.',
            imgUrl: require('../assets/img/projects/catalysis.png'),
            gitUrl: 'https://github.com/Astraxx04/catalysis',
            pageUrl: 'https://catalysis.netlify.app',
        },
        {
            title: 'Exercise Tracker',
            description:
                'A basic exercise tracker app which allows to create new users and allows users to add , update and delete exercises.',
            imgUrl: require('../assets/img/projects/exerciseTracker.png'),
            gitUrl: 'https://github.com/Astraxx04/ExerciseTracker',
            pageUrl: 'https://exercisetrackerapp.netlify.app',
        },
    ];

    return (
        <section
            ref={ref}
            className={`project pb-4 ${inView ? 'fade-up' : ''}`}
            id="projects"
        >
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? 'animate__animated animate__fadeIn'
                                            : ''
                                    }
                                >
                                    <h2>Projects</h2>
                                    <p>
                                        Here are few of the projects I've worked
                                        on so far.
                                    </p>
                                    <Tab.Container
                                        id="projects-tabs"
                                        defaultActiveKey="first"
                                    >
                                        <Tab.Content
                                            id="slideInUp"
                                            className={
                                                isVisible
                                                    ? 'animate__animated animate__slideInUp'
                                                    : ''
                                            }
                                        >
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {projects.map(
                                                        (project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            );
                                                        }
                                                    )}
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? 'animate__animated animate__fadeIn'
                                            : ''
                                    }
                                >
                                    <div>
                                        {' '}
                                        <p
                                            className="text-xl font-semibold justify-center "
                                            style={{ cursor: 'pointer' }}
                                            onClick={handleMiniProjectsClick}
                                        >
                                            {showMiniProjects
                                                ? 'View less '
                                                : 'View more '}{' '}
                                            {getArrowCharacter()}{' '}
                                        </p>{' '}
                                    </div>
                                    <Tab.Container
                                        id="projects-tabs"
                                        defaultActiveKey="first"
                                    >
                                        <Tab.Content
                                            id="slideInUp"
                                            className={
                                                isVisible
                                                    ? 'animate__animated animate__slideInUp'
                                                    : ''
                                            }
                                        >
                                            <Tab.Pane eventKey="first">
                                                {showMiniProjects && (
                                                    <Row>
                                                        {extraprojects.map(
                                                            (
                                                                project,
                                                                index
                                                            ) => (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        )}
                                                    </Row>
                                                )}
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img
                className="background-image-right"
                src={colorSharp2}
                alt="BackgroundImg"
            ></img>
        </section>
    );
}

export default Projects;
