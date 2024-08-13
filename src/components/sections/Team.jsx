import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";

const TeamSection = ({team}) => {

  return (
    <>
        {/* team */}
        <section>
            <div className="container mil-p-120-30">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-5 col-xl-4">

                        <div className="mil-mb-90">
                            <h2 className="mil-up mil-mb-60" dangerouslySetInnerHTML={{__html : 'تیم ما'}} />
                            <div className="mil-text mil-up mil-mb-60" dangerouslySetInnerHTML={{__html : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. "}} />
                            
                            <div className="mil-up"><Link href="/team" className="mil-button mil-arrow-place mil-mb-60"><ArrowIcon /><span>تیم ما</span></Link>
                            </div>

                            <h4 className="mil-up" dangerouslySetInnerHTML={{__html : "لورم ایپسوم متن  از  چاپاست. "}} />
                        </div>

                    </div>
                    <div className="col-lg-6">

                        <div className="mil-team-list">
                            
                            <div className="row mil-mb-60">
                                <div className="col-sm-6">
                                    
                                    {team.slice(0,2).map((item, key) => (

                                    <div key={`services1-item-${key}`} className="mil-team-card mil-up mil-mb-30">
                                        <img src={item.image} alt={item.name} />
                                        <div className="mil-description">
                                            <div className="mil-secrc-text">
                                                <h5 className="mil-muted mil-mb-5">{item.name}</h5>
                                                <p className="mil-link mil-light-soft mil-mb-10">{item.role}</p>
                                            </div>
                                        </div>
                                    </div>

                                    ))}

                                </div>
                                <div className="col-sm-6">

                                    <p className="mil-mobile-hidden mil-text-sm mil-mb-30" style={{"height": "30px"}} dangerouslySetInnerHTML={{__html : ""}} />
                                    
                                    {team.slice(2,4).map((item, key) => (
                                    
                                    <div key={`services2-item-${key}`} className="mil-team-card mil-up mil-mb-30">
                                        <img src={item.image} alt={item.name} />
                                        <div className="mil-description">
                                            <div className="mil-secrc-text">
                                                <h5 className="mil-muted mil-mb-5">{item.name}</h5>
                                                <p className="mil-link mil-light-soft mil-mb-10">{item.role}</p>
                                            </div>
                                        </div>
                                    </div>

                                    ))}

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
        {/* team end */}
    </>
  );
};

export default TeamSection;
