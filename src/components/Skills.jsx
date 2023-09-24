import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import "../assets/css/skills.css";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
              <Carousel responsive={responsive} infinite={false} className="owl-carousel owl-theme skill-slider pt-16">
                <div className="item">
                  <img src={require("../assets/img/icons/java.png")} alt="java"/>
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={require("../assets/img/icons/python.png")} alt="python"/>
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={require("../assets/img/icons/html.png")} alt="html"/>
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <img src={require("../assets/img/icons/css.png")} alt="css"/>
                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <img src={require("../assets/img/icons/javaScript.png")} alt="javaScript"/>
                  <h5>Java Script</h5>
                </div>
                <div className="item">
                  <img src={require("../assets/img/icons/reactJS.png")} alt="reactJS"/>
                  <h5>ReactJS</h5>
                </div>
              </Carousel>
              <Carousel responsive={responsive} infinite={false} className="owl-carousel owl-theme skill-slider pt-16">
                <div className="item">
                  <img src={require("../assets/img/icons/mongoDB.png")} alt="mongoDB"/>
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img height="512" src={require("../assets/img/icons/expressJS.png")} alt="expressJS"/>
                  <h5 className=''>ExpressJS</h5>
                </div>
                <div className="item">
                  <img src={require("../assets/img/icons/nodeJS.png")} alt="nodeJS"/>
                  <h5>NodeJS</h5>
                </div>
                <div className="item">
                  <img src={require("../assets/img/icons/bootstrap.png")} alt="Bootstrap"/>
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={require("../assets/img/icons/tailwindCSS.png")} alt="tailwindCSS"/>
                  <h5>TailwindCSS</h5>
                </div>
                <div className="item">
                  <img src={require("../assets/img/icons/flask.png")} alt="flask"/>
                  <h5>Flask</h5>
                </div>
              </Carousel>
              <Carousel responsive={responsive} infinite={false} className="owl-carousel owl-theme skill-slider pt-16">
                <div className="item">
                  <img src={require("../assets/img/icons/django.png")} alt="django"/>
                  <h5>Django</h5>
                </div>
                <div className="item">
                  <img src={require("../assets/img/icons/mysql.png")} alt="mysql"/>
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={require("../assets/img/icons/git.png")} alt="git"/>
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={require("../assets/img/icons/jenkins.png")} alt="jenkins"/>
                  <h5>Jenkins</h5>
                </div>
                <div className="item">
                  <img src={require("../assets/img/icons/docker.png")} alt="docker"/>
                  <h5>Docker</h5>
                </div>
                <div className="item">
                  <img src={require("../assets/img/icons/postman.png")} alt="postman"/>
                  <h5>Postman</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="BgImage" />
    </section>
  )
}

export default Skills;