import PaginatedBlog from '@components/PaginatedBlog'
import Pagination from '@components/Pagination'
import Link from "next/link";

import PageBanner from "@components/PageBanner";
import PopularPosts from "@components/sections/PopularPosts";
import Layouts from "@layouts/Layouts";

const Blog = ( props ) => {

  const category = props.category
  const post = props.post

  return (
    <Layouts>
      <PageBanner pageTitle={"مقالات"} breadTitle={"وبلاگ"} anchorLabel={"مقالات"} anchorLink={"#blog"} paddingBottom={1} />

      <PopularPosts posts={post} />

      {/* blog */}
      <section> 
        <div className="container mil-p-120-120">
          <div className="row align-items-center mil-mb-30">
              <div className="col-lg-4 mil-mb-30">
                  <h3 className="mil-up">دسته بندی ها :</h3>
              </div>
              <div className="col-lg-8 mil-mb-30">
                  <div className="mil-adaptive-right mil-up">

                      <ul className="mil-category-list">
                        <li><Link href="/blog" className="mil-active">همه</Link></li>
                          {category.map((item, key) => (
                          <li key={`categories-item-${key}`}><Link href={`/blog/category/${item.id}`}>{item.title}</Link></li>
                          ))}
                      </ul>
                  </div>
              </div>
          </div>
          <div className="row">
              <PaginatedBlog
                items={post}
              />
              
              <Pagination
                currentPage={1}
                totalItems={props.post.total}
                perPage={2}
                renderPageLink={(id) => `/blog/page/${id}`}
              />
          </div>
        </div>
      </section>
      {/* blog end */}

    </Layouts>
  );
};
export default Blog;

export async function getStaticProps(){
  const res = await fetch("http://127.0.0.1:8000/blog")
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