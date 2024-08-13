import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import Pentagon from "@layouts/pentagon/Index";

const ServicesSection = ({service}) => {
  return (
    <>
        {/* services */}
        <section className="mil-dark-bg">
            <div className="mi-invert-fix">
                <div className="mil-animation-frame">
                    <div className="mil-animation mil-position-1 mil-scale" data-value-1="2.4" data-value-2="1.4" style={{"top": "300px", "right": "-100px"}}>
                        <Pentagon />
                    </div>
                    <div className="mil-animation mil-position-2 mil-scale" data-value-1="2" data-value-2="1" style={{"left": "150px"}}>
                        <Pentagon />
                    </div>
                </div>
                <div className="container mil-p-120-0">

                    <div className="mil-mb-120">
                        <div className="row">
                            <div className="col-lg-10">
                                <span className="mil-suptitle mil-light-soft mil-suptitle-right mil-up" dangerouslySetInnerHTML={{__html : service.subtitle}} />
                            </div>
                        </div>

                        <div className="mil-complex-text justify-content-center mil-up mil-mb-15">
                            <span className="mil-text-image ms-4"><img src={service.image} alt="team" /></span>
                            <h4 className="mil-h1 mil-muted mil-center" dangerouslySetInnerHTML={{__html : service.title1}} />
                        </div>

                        <div className="mil-complex-text justify-content-center mil-up">
                            <h4 className="mil-h1 mil-muted mil-center" dangerouslySetInnerHTML={{__html : service.title2}} />
                        </div>
                    </div>

                    <div className="row mil-services-grid m-0">
                        {service.serviceItems.map((item, key) => (
                        <div key={`services-item-${key}`} className="col-md-6 col-lg-3 mil-services-grid-item p-0">

                            <Link href='/services' className="mil-service-card-sm mil-up">
                                <h5 className="mil-muted mil-mb-30" dangerouslySetInnerHTML={{__html : item.title}} />
                                <p className="mil-light-soft mil-mb-30">{item.text}</p>
                                <div className="mil-button mil-icon-button-sm mil-arrow-place">
                                    <ArrowIcon />
                                </div>
                            </Link>

                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        {/* services end */}
    </>
  );
};

export default ServicesSection;