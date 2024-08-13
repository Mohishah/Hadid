import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import HeroOneSection from "@components/sections/HeroOne"
import AboutSection from "@components/sections/About";
import ServicesSection from "@components/sections/Services";
import TeamSection from "@components/sections/Team";
import LatestPostsSection from "@components/sections/LatestPosts";

const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );
const PartnersSlider = dynamic( () => import("@components/sliders/Partners"), { ssr: false } );

const Home1 = (props) => {
  return (
    <Layouts>
      <HeroOneSection hero={props.hero} />
      <AboutSection about={props.about} />
      <ServicesSection service={props.service} />
      <TeamSection team={props.team} />
      <TestimonialSlider testi={props.testi} />
      <PartnersSlider partner={props.partner} />
      <LatestPostsSection posts={props.post.posts} />
    </Layouts>
  );
};
export default Home1;

export async function getStaticProps(){
  const res = await fetch("http://127.0.0.1:8000/blog")
  const post = await res.json()
  const res1 = await fetch("http://127.0.0.1:8000/team/")
  const team = await res1.json()
  const res2 = await fetch("http://127.0.0.1:8000/home/hero")
  const hero = await res2.json()
  const res3 = await fetch("http://127.0.0.1:8000/home/about")
  const about = await res3.json()
  const res4 = await fetch("http://127.0.0.1:8000/home/service")
  const service = await res4.json()
  const res5 = await fetch("http://127.0.0.1:8000/home/partner")
  const partner = await res5.json()
  const res6 = await fetch("http://127.0.0.1:8000/home/test")
  const testi = await res6.json()
  return {
      props : {
        post : post,
        team : team,
        hero : hero,
        about : about,
        service : service,
        partner : partner,
        testi : testi
      },
      revalidate : 10
  }
}

