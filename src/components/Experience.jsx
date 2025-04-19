import { Container, Row } from 'react-bootstrap';
import ExperienceCard from './ExperienceCard';
import colorSharp from '../assets/img/color-sharp.png';
import '../assets/css/experience.css';
import { useInView } from 'react-intersection-observer';

function Experience() {
    const { ref, inView } = useInView({
        triggerOnce: false, // Fade up only once
        threshold: 0.1, // Trigger when 10% of the section is visible
    });
    const projects = [
        {
            role: 'QA Intern',
            company: 'iManage',
            time: 'January 2024 - June 2024',
            work: [
                'Created comprehensive test plans, test cases, and test scripts to ensure thorough test coverage and traceability.',
                'Identified, documented, and tracked issues, defects, and bugs discovered during testing.',
                'Developed reusable Python utilities and authored YAML scripts for data generation, facilitating efficient product testing.',
            ],
            techstack: 'Python, YAML',
            imgUrl: require('../assets/img/experience/iManage-Internship.jpg'),
        },
    ];

    return (
        <section
            className={`experience ${inView ? 'fade-up' : ''}`}
            ref={ref}
            id="experience"
        >
            <div className="container">
                <h2 className="pt-8 pb-12">Experience</h2>
                <Container>
                    <Row>
                        {projects.map((project, index) => {
                            return <ExperienceCard key={index} {...project} />;
                        })}
                    </Row>
                </Container>
            </div>
            <img
                className="exp-background-img"
                src={colorSharp}
                alt="BgImage"
            />
        </section>
    );
}

export default Experience;
