import Banner from '../components/Banner';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Experience from '../components/Experience';

function LandingPage() {
    return (
        <div id="landingPage">
            <Banner />
            <Skills />
            <Projects />
            <Experience />
            <Footer />
        </div>
    );
}

export default LandingPage;
