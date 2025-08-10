import { Container, Row, Col } from 'react-bootstrap';
import '../assets/css/banner.css';
import TrackVisibility from 'react-on-screen';

function Banner() {
    const openResume = () => {
        window.location.href = '/resume';
    };

    return (
        <section className="banner" id="home">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="banner-video"
            >
                <source src={require('../assets/video/test.mp4')} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <Container className="banner-content">
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? 'animate__animated animate__fadeIn'
                                            : ''
                                    }
                                >
                                    <h1 className="text-5xl md:text-6xl pt-72 md:pt-8">Hola! I'm Gagan</h1>
                                    <p className='text-justify'>
                                        Software Developer with a strong
                                        foundation in algorithms, data
                                        structures, and system design, with
                                        hands-on experience in full-stack
                                        development and cloud technologies.
                                        Eager to contribute to innovative
                                        projects and create customer-focused
                                        solutions. Currently, I'm on a thrilling
                                        journey, exploring the enchanting world
                                        of Artificial Intelligence and Machine
                                        Learning. <br />
                                        My mission? To teach machines how to
                                        appreciate a good cup of coffee and tell
                                        me jokes! When I'm not coding or
                                        debugging, you can find me in a coffee
                                        shop ☕, sipping on a latte and
                                        pondering life's mysteries.
                                    </p>
                                    <button
                                        className="tagline"
                                        onClick={openResume}
                                    >
                                        Resume
                                    </button>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <div className='pb-20 md:pb-0'>
                            <img
                                className="rounded-full mx-auto w-80 md:w-96"
                                src={require('../assets/img/profile.jpg')}
                                alt="ProfilePic"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;
