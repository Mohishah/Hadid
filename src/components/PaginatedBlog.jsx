import Link from "next/link";
import Date from '@library/date';

const PaginationPage = ({ items }) => {
    return (
      <>
        {items.posts.map((item, index) => (
        <div className="col-lg-12" key={`post-${index}`}>

            <Link href={`/blog/${item.id}`} className="mil-blog-card mil-blog-card-hori mil-more mil-mb-60">
                <div className="mil-cover-frame mil-up">
                    <img src={item.image} alt={item.title} />
                </div>
                <div className="mil-post-descr">
                    <div className="mil-labels mil-up mil-mb-30">
                        <div className="mil-label mil-upper mil-accent">{item.category.title}</div>
                        <div className="mil-label mil-upper me-5"><Date dateString={item.date} /></div>
                    </div>
                    <h4 className="mil-up mil-mb-30">{item.title}</h4>
                    <p className="mil-post-text mil-up mil-mb-30">{item.full.introTitle}</p>
                    <div className="mil-link mil-dark mil-arrow-place mil-up">
                        <span>مطالعه بیشتر</span>
                    </div>
                </div>
            </Link>

        </div>
        ))}
      </>
    );
  };
  export default PaginationPage;
  