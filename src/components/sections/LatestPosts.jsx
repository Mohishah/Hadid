import Date from '@library/date';
import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";

const LatestPostsSection = ( { posts, layout, imageHorizontal } ) => {
    
    return (
        <>
            {/* blog */}
            <section>
                <div className="container mil-p-120-60">
                    <div className="row align-items-center mil-mb-30">
                        <div className="col-lg-6 mil-mb-30">
                            <h3 className="mil-up">مقالات :</h3>
                        </div>
                    </div>
                    <div className="row">
                        {posts.slice(0, 2).map((item, key) => (
                        <div className="col-lg-6" key={`blog-post-${key}`}>

                            <Link href={`/blog/${item.id}`} className="mil-blog-card mil-mb-60">
                                <div className="mil-cover-frame mil-up">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="mil-post-descr">
                                    <div className="mil-labels mil-up mil-mb-30">
                                        <div className="mil-label mil-upper mil-accent">{item.category.title}</div>
                                        <div className="mil-label mil-upper me-4"><Date dateString={item.date} /></div>
                                    </div>
                                    <h4 className="mil-up mil-mb-30">{item.title}</h4>
                                    <p className="mil-post-text mil-up mil-mb-30">{item.full.introTitle}</p>
                                    <div className="mil-link mil-dark mil-arrow-place mil-up">
                                        <ArrowIcon />
                                        <span>مطالعه بیشتر</span>
                                    </div>
                                </div>
                            </Link>

                        </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* blog end */}
        </>
    );
};

export default LatestPostsSection;