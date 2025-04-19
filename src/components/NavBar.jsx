import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import '../assets/css/navbar.css';

function NavBar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Router>
            <Navbar expand="md p-3" className={scrolled ? 'scrolled' : ''}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link
                                href="/#home"
                                className={`${activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}`}
                                onClick={() => onUpdateActiveLink('home')}
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                href="/#skills"
                                className={`${activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}`}
                                onClick={() => onUpdateActiveLink('skills')}
                            >
                                Skills
                            </Nav.Link>
                            <Nav.Link
                                href="/#projects"
                                className={`${activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}`}
                                onClick={() => onUpdateActiveLink('projects')}
                            >
                                Projects
                            </Nav.Link>
                            <Nav.Link
                                href={'/resume'}
                                className={`${activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'}`}
                                onClick={() => onUpdateActiveLink('resume')}
                            >
                                Resume
                            </Nav.Link>
                            <Nav.Link
                                href={'https://blogs.sgagan.dev'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${activeLink === 'blogs' ? 'active navbar-link' : 'navbar-link'}`}
                                onClick={() => onUpdateActiveLink('blogs')}
                            >
                                Blogs
                            </Nav.Link>
                            <Nav.Link
                                href="/#contact"
                                className={`${activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}`}
                                onClick={() => onUpdateActiveLink('contact')}
                            >
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
}

export default NavBar;
