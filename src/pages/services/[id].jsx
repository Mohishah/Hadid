import Layouts from "@layouts/Layouts";
import PageBanner from "@/src/components/PageBanner";

import { useEffect } from "react";

import { Accordion } from "../../common/utilits";


import PricingSection from "@components/sections/Pricing";

const ServiceDetail = ( props ) => {
  const service = props.service;
  const process = props.process

  useEffect(() => {
    Accordion();
  }, []);

  return (
    <Layouts>
      <PageBanner pageTitle={service.full.introTitle} breadTitle={service.title} anchorLabel={"خدمات ما"} anchorLink={"#service"} />

      {/* service */}
      <section id="service">
          <div className="container mil-p-120-90">
              <div className="row justify-content-between">
                  <div className="col-lg-4 mil-relative mil-mb-90">

                      <h4 className="mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : service.full.title_desc}} />
                      <p className="mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : service.full.content_desc}} />

                  </div>
                  <div className="col-lg-6">

                      {service.list.map((item, key) => (
                      <div className="mil-accordion-group mil-up" key={`service-list-${key}`}>
                          <div className="mil-accordion-menu">

                              <p className="mil-accordion-head">{item.label}</p>

                              <div className="mil-symbol mil-h3">
                                  <div className="mil-plus">+</div>
                                  <div className="mil-minus">-</div>
                              </div>

                          </div>
                          <div className="mil-accordion-content mil-text" dangerouslySetInnerHTML={{__html : item.value}} />
                      </div>
                      ))}

                  </div>
              </div>
          </div>
      </section>
      {/* service end */}
      
      <PricingSection process={process} />

      
    </Layouts>
  );
};
export default ServiceDetail;

export async function getStaticPaths() {
  const res = await fetch('http://127.0.0.1:8000/service')
  const service = await res.json()
  const paths = service.map(u=>{
      return { params: { id: `${u.id}` } }
  })
  return {
      paths,
      fallback: true
  }
}

export async function getStaticProps(context) {
  const { params } = context
  const res = await fetch(`http://127.0.0.1:8000/service/${params.id}`)
  const service = await res.json()
  const rese = await fetch("http://127.0.0.1:8000/service/process")
  const process = await rese.json()
  return {
      props: {
        service : service,
        process : process
      },
      revalidate : 10
  }
}