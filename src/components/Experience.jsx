import { Container } from 'react-bootstrap';
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
            role: 'Full Stack Engineer',
            company: 'Indee TV',
            companyLink: 'https://indee.tv/',
            time: 'Nov 2024 - Present',
            work: [
                'Integrated Recurly-based subscription billing for the SaaS platform, supporting multiple plans, proration, invoicing, and webhook-driven payment validation, contributing to an 8% increase in revenue.',
                'Re-architected video transcoding pipelines using AWS Elemental and Zencoder, adding fault-tolerant retries and reducing end-to-end processing time by 10%.',
                'Implemented scheduled cleanup jobs to automatically delete original video assets after a retention period, reducing S3 storage usage by 30% across 4.5M+ videos.',
                'Owned and delivered an end-to-end product on the core platform, building APIs, frontend features, and integrating Strapi CMS for content management.',
            ],
            techstack: 'Python, Django, AWS, PostgreSQL, Strapi, NextJS',
            imgUrl: "",
        },
        {
            role: 'Full Stack Engineering Intern',
            company: 'Indee TV',
            companyLink: 'https://indee.tv/',
            time: 'Jul 2024 - Oct 2024',
            work: [
                'Developed an AWS Lambda-based event processor to aggregate viewer engagement data, leveraging Redis caching to support analytics and enable seamless resume playback functionality.',
                'Migrated REST APIs from exposing internal database IDs to secure, auto-generated public keys, addressing security vulnerabilities and contributing to SOC 2 compliance.',
                'Designed and integrated Stripe payment workflows, including webhook-based event handling to validate successful transactions and gracefully handle payment failures.',
                'Built internal automation scripts to scrape and aggregate external data for operations and sales teams, reducing manual effort and turnaround time.',
            ],
            techstack: 'Python, Django, AWS, BeautifulSoup, PostgreSQL',
            imgUrl: require('../assets/img/experience/Indee-Internship.jpg'),
        },
        {
            role: 'QA Intern',
            company: 'iManage',
            companyLink: 'https://www.imanage.com/',
            time: 'Jan 2024 - Jun 2024',
            work: [
                'Created comprehensive test plans, test cases, and test scripts to ensure thorough test coverage and traceability.',
                'Identified, documented, and tracked issues, defects, and bugs discovered during testing.',
                'Developed reusable Python utilities and authored YAML scripts for data generation, facilitating efficient product testing.',
            ],
            techstack: 'Python, YAML, Manual Testing',
            imgUrl: require('../assets/img/experience/iManage-Internship.jpg'),
        },
    ];

    return (
        <section
            className={`experience relative py-20 overflow-hidden ${inView ? 'fade-up' : ''}`}
            ref={ref}
            id="experience"
        >
            <Container>
                <div className="relative">
                    <h2 className="text-5xl font-bold text-center mb-16 pt-16 text-white tracking-tight">
                        Experience
                    </h2>

                    <div className="relative z-10">
                        {projects.map((project, index) => {
                            return <ExperienceCard key={index} index={index} totalProjects={projects.length} {...project} />;
                        })}
                    </div>
                </div>
            </Container>
            <img
                className="exp-background-img opacity-30"
                src={colorSharp}
                alt="BgImage"
            />
        </section>
    );
}

export default Experience;
