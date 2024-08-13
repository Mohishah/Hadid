import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import Pentagon from "@layouts/pentagon/Index";

const HeroOne = ({hero}) => {
    return (
        <>
            {/* banner */}
            <section className="mil-banner mil-dark-bg">
                <div className="mi-invert-fix">
                    <div className="mil-animation-frame">
                        <div className="mil-animation mil-position-1 mil-scale" data-value-1="7" data-value-2="1.6">
                            <Pentagon />
                        </div>
                        <div className="mil-animation mil-position-2 mil-scale" data-value-1="4" data-value-2="1">
                            <Pentagon />
                        </div>
                        <div className="mil-animation mil-position-3 mil-scale" data-value-1="1.2" data-value-2=".1">
                            <Pentagon />
                        </div>
                    </div>

                    <div className="mil-gradient" />

                    <div className="container">
                        <div className="mil-banner-content mil-up">

                            <h1 className="mil-muted mil-mb-60" dangerouslySetInnerHTML={{__html : hero.title}} />

                            <div className="row">
                                <div className="col-md-7 col-lg-5">
                                    <p className="mil-light-soft mil-mb-60">{hero.description}</p>
                                </div>
                            </div>

                            <Link href="/services" className="mil-button mil-arrow-place mil-btn-space">
                                <ArrowIcon />
                                <span>خدمات ما</span>
                            </Link>

                            <Link href="/projects" className="mil-link mil-muted mil-arrow-place me-5">
                                <ArrowIcon />
                                <span>نمونه کارها</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* banner end */}
        </>
    );
}
export default HeroOne;