import { Container, Row, Col } from 'react-bootstrap';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../assets/css/footer.css';
import { useState } from 'react';

function Footer() {
    const [formError, setFormError] = useState('');

    const formInitialDetails = {
        fullName: '',
        email: '',
        message: '',
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');

    const formData = useRef();

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value,
        });
        setButtonText('Send');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !formDetails.fullName ||
            !formDetails.email ||
            !formDetails.message
        ) {
            setFormError(
                'All fields are required. Please fill in all details.'
            );
            setButtonText('Send');
            return;
        }
        setFormError('');
        setButtonText('Sending...');
        emailjs
            .sendForm(
                'service_xbohvtp',
                'template_p8fehnn',
                formData.current,
                'J59UZ8kGY5EhpCjuN'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log(formData);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        setFormDetails({
            fullName: '',
            email: '',
            message: '',
        });
        setButtonText('Sent');
    };

    return (
        <footer className="footer" id="contact">
            <Container>
                <Row className="align-items-start">
                    <h2 className="pt-8 pb-16">Get In Touch</h2>
                    <Col size={12} md={6}>
                        <form ref={formData} onSubmit={handleSubmit}>
                            <Row>
                                <Col size={12} sm={6} className="px-1">
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formDetails.fullName}
                                        placeholder="Full Name"
                                        onChange={(e) =>
                                            onFormUpdate(
                                                'fullName',
                                                e.target.value
                                            )
                                        }
                                    />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formDetails.email}
                                        placeholder="Email Address"
                                        onChange={(e) =>
                                            onFormUpdate(
                                                'email',
                                                e.target.value
                                            )
                                        }
                                    />
                                </Col>
                                <Col size={12} className="px-1">
                                    <textarea
                                        rows="6"
                                        name="message"
                                        value={formDetails.message}
                                        placeholder="Message"
                                        onChange={(e) =>
                                            onFormUpdate(
                                                'message',
                                                e.target.value
                                            )
                                        }
                                    ></textarea>
                                    {formError && (
                                        <p className="error-message text-sm mb-2">
                                            {formError}
                                        </p>
                                    )}
                                    <button type="submit">
                                        <span>{buttonText}</span>
                                    </button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                    <Col size={12} md={6}>
                        <div className="social-icon flex justify-between pt-4 lg:pt-0 md:pt-0 mx-8">
                            <div>
                                <a
                                    href="https://github.com/Astraxx04"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        className="icon"
                                        src={require('../assets/img/icons/github.png')}
                                        alt="Github Icon"
                                    />
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.linkedin.com/in/gagan-s-105706202/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        className="icon"
                                        src={require('../assets/img/icons/linkedin.png')}
                                        alt="LinkedIn Icon"
                                    />
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://leetcode.com/u/astraxx2542/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        className="icon"
                                        src={require('../assets/img/icons/leetcode.png')}
                                        alt="Leetcode Icon"
                                    />
                                </a>
                            </div>
                            <div>
                                <a
                                    href="mailto:gagan200254@gmail.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        className="icon"
                                        src={require('../assets/img/icons/gmail.png')}
                                        alt="Gmail Icon"
                                    />
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.instagram.com/gagans_04/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        className="icon"
                                        src={require('../assets/img/icons/instagram.png')}
                                        alt="Instagram Icon"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="mx-8 text-center">
                            <p>
                                Feel free to connect with me, whether it's for a
                                coding collaboration, a good tech discussion, or
                                if you just want to share your favorite
                                programming pun. Let's make the tech world a bit
                                brighter, one line of code and one joke at a
                                time! 🚀
                            </p>
                        </div>
                    </Col>
                </Row>
                <p className="copyright lg:float-right md:float-right mb-2 text-center mx-10">
                    &copy; Copyright 2025. All Rights Reserved
                </p>
            </Container>
        </footer>
    );
}

export default Footer;
