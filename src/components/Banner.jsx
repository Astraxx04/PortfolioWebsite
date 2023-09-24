import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/banner.css";
import TrackVisibility from 'react-on-screen';

function Banner() {

  const openResume = () => {
    window.location.href = "/resume";
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1 className="pt-8">Yello! I'm Gagan</h1>
                  <p>
                    I'm a final year student pursuing a degree in Information Science and Engineering from DSCE Bangalore. I'm a passionate MERN stack developer who loves to craft web applications that not only look good but also work seamlessly.
                    Currently, I'm on a thrilling journey, exploring the enchanting world of Artificial Intelligence and Machine Learning. <br /><br />
                    Feel free to connect with me, whether it's for a coding collaboration, a good tech discussion, or if you just want to share your favorite programming pun. Let's make the tech world a bit brighter, one line of code and one joke at a time! 🚀
                  </p>
                  <button className="tagline" onClick={openResume}>Resume</button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;