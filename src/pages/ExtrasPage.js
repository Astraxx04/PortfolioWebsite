import '../assets/css/extras.css';
import Extras from '../components/Extras';

function ExtrasPage() {
    const achievementsData = [
        { 
            title: 'Smart India Hackathon 2023', 
            description: 'Participated in the prestigious Smart India Hackathon 2023 and was declared Winner of SIH 2023 for developing a real-time monitoring solution for infrastructure development.', 
            img: require('../assets/img/extras/achievements/sih.jpeg'),
            links: {
                Website: "https://main--ninja-hattori.netlify.app",
                GitHub: "https://github.com/Pratyaksh-DORA/Pratyaksh",
            }
        },
    ];

    const certificationsData = [
        { 
            title: 'Go - The Complete Guide', 
            description: 'This course is a comprehensive journey through the world of Go. From basic syntax to advanced features, this course covers every aspect needed to master Go.', 
            img: require('../assets/img/extras/certificates/go-lang.jpg'),
            links: {
                Credentials: "https://www.udemy.com/certificate/UC-50c4595c-959e-421f-a7d0-071a4261e5f8/",
            }
        },
        { 
            title: 'React Basics', 
            description: 'This course was a comprehensive journey through the world of React. From understanding the fundamental concepts to exploring advanced features, it covered every aspect.', 
            img: require('../assets/img/extras/certificates/react-basics.jpg'), 
            links: {
                Credentials: "https://www.coursera.org/account/accomplishments/certificate/8E6RBSLCZ44G",
            }
        },
        { 
            title: 'What is Data Science?', 
            description: 'This course gave me a clear understanding of what data science is, what data scientists do, and the various career paths available in the field.', 
            img: require('../assets/img/extras/certificates/data-science.jpg'), 
            links: {
                Credentials: "https://www.coursera.org/account/accomplishments/certificate/VGZS9AUA3TEF",
            }
        },
        { 
            title: 'Introduction to Git and Github', 
            description: 'This course taught me how to use Git for version control, manage code and configuration file versions, and set up GitHub to create and organize remote repositories.', 
            img: require('../assets/img/extras/certificates/git-github.jpg'), 
            links: {
                Credentials: "https://www.coursera.org/account/accomplishments/certificate/ET5CLVB9WYND"
            }
        },
        { 
            title: 'HTML, CSS and JS for Web Developers', 
            description: 'This course taught me how crucial the web page is to user experience and how to design and develop fast, responsive, and user-friendly interfaces that work seamlessly across all devices.', 
            img: require('../assets/img/extras/certificates/html-css-js.jpg'), 
            links: {
                Credentials: "https://www.coursera.org/account/accomplishments/certificate/T2KMENGPFDMF",
            }
        },
    ];

    const volunteeringData = [
        { 
            title: 'IITM WebOps Team', 
            description: 'Volunteered as a member of the WebOps team in the Backend and Mobile Apps division for Paradox 2025. Contributed to building and optimizing features using Python, Django, PostgreSQL, and React Native to deliver a seamless and scalable user experience.', 
            img: require('../assets/img/extras/volunteering/webops.png'),
            links: {
                Paradox: require('../assets/img/extras/volunteering/paradox.jpg'),
                Margazhi: require('../assets/img/extras/volunteering/margazhi.jpg'),
            }
        },
        { 
            title: 'Genesis Head', 
            description: 'Successfully organized and executed impactful events, including blood donation and dental camps, achieving the highest recorded participant footfall for a socio-cultural event. Spearheaded the planning and execution of two 24-hour hackathons, "Hackman"', 
            img: require('../assets/img/extras/volunteering/genesis.jpeg'),
            links: {
                Catalysis: require('../assets/img/extras/volunteering/catalysis.jpeg'),
            }
        },
        { 
            title: 'Arcis Avionics Team', 
            description: 'Contributed to developing an RC plane as part of a multidisciplinary team. Selected and implemented avionics systems tailored to challenge requirements. Utilized Ansys Workbench for structural analysis and Arduino for avionics integration. Achieved 19th place globally for the Technical Design Report.',
            img: require('../assets/img/extras/volunteering/arcis.jpg'),
            links: {
                "AIAA-DBF": require('../assets/img/extras/volunteering/aiaa-dbf.png'),
            }
        },
    ];

    return (
        <div className="extras-container pt-24">
            {/* <video
                autoPlay
                muted
                loop
                playsInline
                className="banner-video"
            >
                <source src={require('../assets/video/test.mp4')} type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}
            <div className="">
                <Extras title="Achievements" data={achievementsData}/>
                <Extras title="Certifications" data={certificationsData} />
                <Extras title="Volunteering" data={volunteeringData}/>
            </div>
        </div>
    );
}

export default ExtrasPage;
