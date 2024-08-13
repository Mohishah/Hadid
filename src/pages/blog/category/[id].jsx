import Layouts from "@layouts/Layouts";
import Date from '@library/date';
import Link from "next/link";
import PageBanner from "@components/PageBanner";

const PostsDetail = ( props ) => {

    const category = props.category
    const post = props.post

  return (
    <Layouts>
      
      <PageBanner pageTitle={post.category.title} breadTitle={post.category.title} anchorLabel={"مقالات"} anchorLink={"#blog"} paddingBottom={1} />
      
      {/* blog */}
      <section id="blog">
          <div className="container mil-p-120-120">
              <div className="row align-items-center mil-mb-30">
                  <div className="col-lg-4 mil-mb-30">
                      <h3 className="mil-up">دسته بندی ها :</h3>
                  </div>
                  <div className="col-lg-8 mil-mb-30">
                      <div className="mil-adaptive-right mil-up">

                          <ul className="mil-category-list">
                              <li key={`categories-item-0`}><Link href="/blog">همه</Link></li>
                              {category.map((item, key) => (
                              <li key={`categories-item-${key}`}><Link href={`/blog/category/${item.id}`} className={ item.id == post.category.id ? "mil-active" : ""}>{item.title}</Link></li>
                              ))}
                          </ul>
                      </div>
                  </div>
              </div>
              <div className="row">
                  {post.posts.map((item, key) => (              
                  <div className="col-lg-12" key={`posts-item-${key}`}>

                      <a href={`/blog/${item.id}`} className="mil-blog-card mil-blog-card-hori mil-more mil-mb-60">
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
                                  <span>مطالعه بیشتر</span>
                              </div>
                          </div>
                      </a>

                  </div>
                  ))}
              </div>
          </div>
      </section>
      {/* blog end */}


    </Layouts>
  );
};
export default PostsDetail;

export async function getStaticPaths() {
    const res = await fetch('http://127.0.0.1:8000/blog/category')
    const category = await res.json()
    const paths = category.map(u=>{
        return { params: { id: `${u.id}` } }
    })
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps(context){
    const { params } = context
    const res = await fetch(`http://127.0.0.1:8000/blog/category/${params.id}`)
    const post = await res.json()
    const res2 = await fetch("http://127.0.0.1:8000/blog/category")
    const category = await res2.json()
    return {
        props : {
          post : post,
          category : category
        },
        revalidate : 10
    }
}