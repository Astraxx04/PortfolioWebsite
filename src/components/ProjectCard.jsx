import { Col } from 'react-bootstrap';
import '../assets/css/projects.css';

function ProjectCard({ title, description, imgUrl, gitUrl, pageUrl }) {
    const handleGithubClick = () => {
        window.open(gitUrl, '_blank');
    };

    const handleViewClick = () => {
        window.open(pageUrl, '_blank');
    };

    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="projectImage" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div className="mt-4">
                        <button
                            onClick={handleGithubClick}
                            className="tagline p-2 rounded-md text-lg bg-sky-400 ml-8 float-left w-24 h-auto"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Github
                        </button>
                        <button
                            onClick={handleViewClick}
                            className="tagline p-2 rounded-md text-lg bg-sky-400 mr-8 float-right w-24 h-auto"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            View
                        </button>
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default ProjectCard;
