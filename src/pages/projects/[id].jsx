import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";
import ProjectInnerOne from "@components/ProjectInnerOne";


const ProjectDetail = ( props ) => {
  
  const projects = props.projects;

  let prev = {
    "id": 0,
    "key": 0
  }

  let next = {
    "id": 0,
    "key": 0
  }

  props.allProjects.forEach(function(item, key){
    if ( item.id == projects.id ) {
      prev.key = key - 1;
      next.key = key + 1;
    }
  })

  props.allProjects.forEach(function(item, key){
    if ( key == prev.key ) {
      prev.id = item.id;
    }
    if ( key == next.key ) {
      next.id = item.id;
    }
  });

  return (
    <Layouts>
      <PageBanner pageTitle={projects.full.introTitle} breadTitle={projects.title} anchorLabel={"اطلاعات بیشتر"} anchorLink={"#project"} />

        <ProjectInnerOne postData={projects} prev={prev} next={next} />

      <CallToActionSection />

    </Layouts>
  );
};
export default ProjectDetail;

export async function getStaticPaths() {
  const res = await fetch('http://127.0.0.1:8000/project')
  const project = await res.json()
  const paths = project.map(u=>{
      return { params: { id: `${u.id}` } }
  })
  return {
      paths,
      fallback: true
  }
}

export async function getStaticProps(context) {
  const { params } = context
  const res = await fetch(`http://127.0.0.1:8000/project/${params.id}`)
  const projects = await res.json()
  const rese = await fetch("http://127.0.0.1:8000/project")
  const allProjects = await rese.json()
  return {
      props: {
        projects : projects,
        allProjects : allProjects
      },
      revalidate : 10
  }
}