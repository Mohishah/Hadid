
import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import ProjectsMasonry from "@components/ProjectsMasonry";
import CallToActionSection from "@components/sections/CallToAction";


const Projects = (props) => {
  return (
    <Layouts>
      <PageBanner pageTitle={" نمونه کارها"} breadTitle={"نمونه کارها"} anchorLabel={"پروژه های ما"} anchorLink={"#portfolio"} />

      <ProjectsMasonry projects={props.projects} />
      
      <CallToActionSection />
      
    </Layouts>
  );
};
export default Projects;

export async function getStaticProps(){
  const res = await fetch("http://127.0.0.1:8000/project")
  const projects = await res.json()
  return {
      props : {
        projects,
      },
      revalidate : 10
  }
}