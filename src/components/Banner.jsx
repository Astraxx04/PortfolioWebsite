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
                                    <h1 className="text-5xl md:text-6xl pt-72 md:pt-8">Wassup My fellas!! How's life? t3</h1>
                                    <p className='text-justify px-0'>
                                        I'm a Full Stack Developer with 1.5+ years of experience,
                                        building scalable and high-performance web applications using Django,
                                        DRF, GoLang and AWS. I enjoy solving complex problems, designing reliable systems,
                                        and building customer-focused solutions that perform well at scale. <br /> <br />

                                        Currently exploring Artificial Intelligence and Machine Learning
                                        to expand my engineering toolkit and build smarter applications. <br /><br />

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
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
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
