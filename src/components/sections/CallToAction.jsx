import Link from "next/link";

import ArrowIcon from "@layouts/svg-icons/Arrow";

const CallToActionSection = ( { bg } ) => {
  return (
    <>
        {/* call to action */}
        <section className="mil-soft-bg">
            <div className="container mil-p-120-120">
                <div className="row">
                    <div className="col-lg-10">
                        <span className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up" dangerouslySetInnerHTML={{__html : "جهت ارتباط با مشاوران ما تماس بگیرید ..."}} />
                    </div>
                </div>
                <div className="mil-center">
                    <h2 className="mil-up mil-mb-60" dangerouslySetInnerHTML={{__html : "تماس با ما"}} />
                    <div className="mil-up">
                        <Link href="/contact" className="mil-button mil-arrow-place">
                            <ArrowIcon />
                            <span>تماس با ما</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        {/* call to action end */}
    </>
  );
};

export default CallToActionSection;