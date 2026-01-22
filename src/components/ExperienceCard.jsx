import '../assets/css/experience.css';
import { useInView } from 'react-intersection-observer';

function ExperienceCard({
    role,
    company,
    companyLink,
    time,
    work,
    techstack,
    imgUrl,
    index,
    totalProjects
}) {
    const handleViewClick = () => {
        window.open(imgUrl, '_blank');
    };

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const isLeft = index % 2 === 0;
    const isFirst = index === 0;
    const isLast = index === totalProjects - 1;

    return (
        <div
            ref={ref}
            className={`experience-item pb-20 flex justify-between items-stretch w-full ${isLeft ? 'flex-row-reverse' : 'flex-row'
                } ${inView ? 'fade-up' : ''}`}
        >
            <div className="w-5/12"></div> {/* Spacer for the other side */}

            {/* Timeline Dot and Connector */}
            <div className="relative z-20 flex flex-col justify-center items-center order-1 w-8">
                {/* Top Line: Connects to previous item */}
                {!isFirst && (
                    <div
                        className="absolute w-1 bg-[#aa367c]"
                        style={{
                            top: '-50%',
                            height: '100%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            zIndex: -1
                        }}
                    ></div>
                )}

                {/* Dot */}
                <div className="w-8 h-8 bg-[#121212] rounded-full border-4 border-[#aa367c] shadow-xl shadow-[#aa367c]/20 z-20 shrink-0"></div>

                {/* Bottom Line: Connects to next item */}
                {!isLast && (
                    <div
                        className="absolute w-1 bg-[#aa367c]"
                        style={{
                            top: '50%',
                            height: '100%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            zIndex: -1
                        }}
                    ></div>
                )}
            </div>

            {/* Content Box */}
            <div className={`order-1 w-5/12 py-4`}>
                <div
                    className="relative p-6 rounded-xl border border-white/10 bg-[#151515] shadow-lg hover:shadow-[#aa367c]/20 transition-shadow duration-300"
                >

                    <div className="flex flex-col mt-2 mb-2">
                        <h3 className="text-2xl font-bold text-white mb-1">{role}</h3>
                        <div className="flex justify-between items-center mt-2 mb-4">
                            <a
                                href={companyLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="no-underline"
                            >
                                <span className="font-semibold text-[#aa367c] text-xl tracking-wide">
                                    {company}
                                </span>
                            </a>
                            <span className="text-gray-400 px-3 py-1 text-xs rounded-lg bg-black/30 border border-white/5">
                                {time}
                            </span>
                        </div>
                    </div>

                    <ul className="list-disc mt-2 list-inside space-y-2 mb-4 text-gray-300 -ml-4">
                        {work.map((point, i) => (
                            <li key={i} className="text-sm leading-relaxed">
                                {point}
                            </li>
                        ))}
                        <p className="text-sm text-gray-400 mb-3">
                            <span className="font-semibold text-white">Tech:</span> {techstack}
                        </p>
                    </ul>
                    {imgUrl && (
                        <div className="flex justify-end">
                            <button
                                onClick={handleViewClick}
                                className="tagline p-2 mt-0 mb-0 rounded-md text-lg bg-sky-400 w-24 h-auto text-white"
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                View
                            </button>
                        </div>
                    )}

                    {/* <div className="border-t  border-white/10 flex justify-end">
                        <button
                            onClick={handleViewClick}
                            className="tagline p-2 rounded-md text-lg bg-sky-400 w-24 h-auto text-white"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            View
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default ExperienceCard;
