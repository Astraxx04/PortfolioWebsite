import Banner from '../components/Banner';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

function LandingPage() {
    return(
        <div id="landingPage">
            <Banner />
            <Skills />
            <Projects />
            <Footer />
        </div>
    );
};

export default LandingPage;