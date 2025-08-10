import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../assets/css/extras.css';

function Extras({ title, data }) {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 2,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1200 },
            items: 2,
        },
        tablet: {
            breakpoint: { max: 1200, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };


    return (
        <section className="extras" id="extras">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-left font-semibold">{title}</h2>
                        <div className="extras-bx wow zoomIn">
                            <Carousel
                                responsive={responsive}
                                infinite
                                autoPlay
                                autoPlaySpeed={3000}
                                arrows={false}
                                className="owl-carousel owl-theme extras-slider"
                            >
                                
                                {data.map((item, index) => (
                                    <div
                                        key={index}
                                        className="overflow-hidden flex flex-col mx-auto w-[360px] md:w-[500px] h-auto"
                                    >
                                        <div className="h-[250px] p-2 w-auto">
                                            <img
                                                src={item.img}
                                                alt={item.title}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'fill',
                                                }}
                                            />
                                        </div>
                                        <div className="p-2 pt-4 text-left flex-1">
                                            <p className="font-bold text-2xl">{item.title}</p>
                                            <p className='text-justify'>{item.description}</p>
                                            {item.links && (
                                                <div className="flex gap-x-2 flex-wrap">
                                                    {Object.entries(item.links).map(([label, url], linkIndex) => (
                                                        <a
                                                            key={linkIndex}
                                                            href={url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="link-button text-white no-underline"
                                                        >
                                                            {label}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Extras;
