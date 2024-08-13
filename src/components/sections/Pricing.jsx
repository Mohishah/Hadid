import React from "react";
import Link from "next/link";

import ArrowIcon from "@layouts/svg-icons/Arrow";

const PricingSection = ({process}) => {
    
    return (
        <>
        {/* prices */}
        <section className="mil-dark-bg">
            <div className="mi-invert-fix">
                <div className="container mil-p-120-120">
                    <div className="mil-center">
                        <p className="mil-light-soft mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : "روند فعالیت ما"}} />
                        <h3 className="mil-muted mil-up mil-mb-120 " dangerouslySetInnerHTML={{__html : 'فرایند پویا و دقیق'}} />
                    </div>

                    {process.map((item, key) => (
                    <Link href="#" className="mil-price-card mil-choose mil-accent-cursor mil-up" key={`pricing-item-${key}`}>
                        <div className="row align-items-center">
                            <div className="col-lg-2">
                                <div className="mil-price-number mil-mb-30">
                                    <span className="mil-accent">{item.number}</span>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <h5 className="mil-muted mil-mb-30" dangerouslySetInnerHTML={{__html : item.title}} />
                            </div>
                            <div className="col-lg-6">
                                <p className="mil-light-soft mil-mb-30" dangerouslySetInnerHTML={{__html : item.text}} />
                            </div>
                        </div>
                    </Link>
                    ))}

                    <div className="mil-center mil-mt-60">
                        <Link href='/contact' className="mil-button  mil-arrow-place">
                            <ArrowIcon />
                            <span>ارتباط با ما</span>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
        {/* prices end */}
        </>
    );
};

export default PricingSection;

