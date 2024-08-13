
const AboutSection = ({about}) => {
    return (
        <>
            {/* about */}
            <section id="about">
                <div className="container mil-p-120-30">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-6 col-xl-5">

                            <div className="mil-mb-90">
                                <h2 className="mil-up mil-mb-60" dangerouslySetInnerHTML={{__html : about.title}} />
                                <div className="mil-text mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : about.description}} />
                                
                                <div className="mil-about-quote">
                                    <div className="mil-avatar mil-up">
                                        <img src={about.icon} alt={about.title} />
                                    </div>
                                    <h6 className="mil-quote mil-up me-4" dangerouslySetInnerHTML={{__html : about.subtitle}} />
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-5">

                            <div className="mil-about-photo mil-mb-90">
                                <div className="mil-up mil-img-frame" style={{"paddingBottom": "160%"}}>
                                    <img src={about.image} alt={about.title} className="mil-scale" data-value-1="1" data-value-2="1.2" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* about end */}
        </>
    );
};

export default AboutSection;