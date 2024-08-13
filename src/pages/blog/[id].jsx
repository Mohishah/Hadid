import Layouts from "@layouts/Layouts";
import Date from '@library/date';
import PageBanner from "@components/PageBanner";
import RelatedPostsSection from "@components/sections/RelatedPosts";

const PostsDetail = ( props ) => {
  
  const postData = props.postData;
  const posts = props.posts

  return (
    <Layouts>
      <PageBanner pageTitle={postData.full.introTitle} breadTitle={postData.title} align={"center"} headingSize={2} />
      
      {/* publication */}
      <section id="blog">
          <div className="container mil-p-120-90">
              <div className="row justify-content-center">
                  <div className="col-lg-12">

                      <div className="mil-image-frame mil-horizontal mil-up">
                          <img src={postData.image} alt={postData.title} className="mil-scale" data-value-1=".90" data-value-2="1.15" />
                      </div>
                      <div className="mil-info mil-up mil-mb-90">
                          <div>دسته بندی : &nbsp;<span className="mil-dark">{postData.category.title}</span></div>
                          <div>تاریخ : &nbsp;<span className="mil-dark"><Date dateString={postData.date} /></span></div>
                          <div>نویسنده : &nbsp;<span className="mil-dark">{postData.author}</span></div>
                      </div>

                  </div>
                  <div className="col-lg-8">

                      <div className="mil-text mil-up mil-mb-60" dangerouslySetInnerHTML={{__html : postData.full.content_desc}} />
                      
                          <div className="row">
                              {postData.gallery.map((item, key) => (
                              <div className="col-lg-6" key={`gallery-item-${key}`}>

                                  <div className="mil-image-frame mil-horizontal mil-up mil-mb-30">
                                      <img src={item.image} alt="blog-deatail" />
                                  </div>

                              </div>
                              ))}
                          </div>

                          <div className="mil-text mil-up" dangerouslySetInnerHTML={{__html : postData.full.content_des2}} />
                      
                  </div>
              </div>
          </div>
      </section>
      {/* publication end */}

      <RelatedPostsSection items={posts} />
    </Layouts>
  );
};
export default PostsDetail;

export async function getStaticPaths() {
  const res = await fetch('http://127.0.0.1:8000/blog')
  const post = await res.json()
  const paths = post.posts.map(u=>{
      return { params: { id: `${u.id}` } }
  })
  return {
      paths,
      fallback: true
  }
}

export async function getStaticProps(context){
  const { params } = context
  const res = await fetch(`http://127.0.0.1:8000/blog/${params.id}`)
  const postData = await res.json()
  const res2 = await fetch("http://127.0.0.1:8000/blog")
  const posts = await res2.json()
  return {
      props : {
        postData : postData,
        posts : posts
      },
      revalidate : 10
  }
}