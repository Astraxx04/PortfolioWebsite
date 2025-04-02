import "../assets/css/experience.css";
import { useInView } from 'react-intersection-observer';

function ExperienceCard({ role, company, test, time, work, techstack, imgUrl }) {

    const handleViewClick = () => {
        window.open(imgUrl, "_blank");
    };

    test = test || [];
    console.log(test);

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.8,
    });
    

  return (
    <div ref={ref} className={`experience ${inView ? 'fade-up' : ''}`}>

    <div>
        <img className="w-10 h-16 ml-auto mr-auto" src={require("../assets/img/arrow.png")}  alt="arrow" />
    </div>
    <div className="exp-imgbx">
        <div className="p-8">
            <h3>{role}</h3>
            <h5>{company} &nbsp; &nbsp; [{time}]</h5>
            <div className="pt-2">
                {
                    work.map((point, index) => {
                        return(
                            <li className="text-lg" key={index}>{point}</li>
                        )
                    })
                }
            </div>
            <p className="pt-2 pb-2">Tech: {techstack}</p>
            <div className="">
                <button onClick={handleViewClick} className="tagline pb-2 rounded-md text-lg bg-sky-400 float-right w-24 h-auto mr-0">View</button>
            </div>
        </div>
    </div>
    </div>
  );
};

export default ExperienceCard;