import PaginatedBlog from '@components/PaginatedBlog'
import Pagination from '@components/Pagination'
import Link from "next/link";

import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";

const Blog = ( { post, currentPage, category } ) => {

  return (
    <Layouts>
      <PageBanner pageTitle={"مقالات"} breadTitle={"وبلاگ"} anchorLabel={"مقالات"} anchorLink={"#blog"} paddingBottom={1} />

      {/* blog */}
      <section> 
        <div className="container mil-p-120-120">
          <div className="row align-items-center mil-mb-30">
              <div className="col-lg-4 mil-mb-30">
                  <h3 className="mil-up">دسته بندی ها:</h3>
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
                currentPage={currentPage}
                totalItems={post.total}
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

export async function getStaticPaths() {
  const res = await fetch('http://127.0.0.1:8000/blog/')
  const post = await res.json()
  const paths = post.posts.map(u=>{
      return { params: { id: `${u.id}` } }
  })
  return {
      paths,
      fallback: 'blocking'
  }
}

export async function getStaticProps(context){
  const {params} = context
  const page = params?.id || 1

  const res = await fetch(`http://127.0.0.1:8000/blog/?page=${params.id}`)
  const post = await res.json()
  const res2 = await fetch("http://127.0.0.1:8000/blog/category")
  const category = await res2.json()

  if (page == 1) {
    return {
      redirect: {
        destination: '/blog',
        permanent: false,
      },
    }
  }

  return {
      props : {
        post : post,
        category : category,
        currentPage: page,

      },
      revalidate : 10
  }
}