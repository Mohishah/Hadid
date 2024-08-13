import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";

const TeamData = [
    {
        "image": "/img/faces/1.jpg",
        "name": "Anna Oldman",
        "role": "Art Director",
        "social": [
            {
                "link": "https://behance.net/",
                "icon": "fab fa-behance",
                "title": "Behance"
            },
            {
                "link": "https://dribbble.com/",
                "icon": "fab fa-dribbble",
                "title": "Dribbble"
            },
            {
                "link": "https://twitter.com/",
                "icon": "fab fa-twitter",
                "title": "Twitter"
            },
            {
                "link": "https://github.com/",
                "icon": "fab fa-github",
                "title": "Github"
            }
        ]
    },
    {
        "image": "/img/faces/3.jpg",
        "name": "Oscar Freeman",
        "role": "Frontend Dev",
        "social": [
            {
                "link": "https://behance.net/",
                "icon": "fab fa-behance",
                "title": "Behance"
            },
            {
                "link": "https://dribbble.com/",
                "icon": "fab fa-dribbble",
                "title": "Dribbble"
            },
            {
                "link": "https://twitter.com/",
                "icon": "fab fa-twitter",
                "title": "Twitter"
            },
            {
                "link": "https://github.com/",
                "icon": "fab fa-github",
                "title": "Github"
            }
        ]
    },
    {
        "image": "/img/faces/2.jpg",
        "name": "Emma Newman",
        "role": "Founder",
        "social": [
            {
                "link": "https://behance.net/",
                "icon": "fab fa-behance",
                "title": "Behance"
            },
            {
                "link": "https://dribbble.com/",
                "icon": "fab fa-dribbble",
                "title": "Dribbble"
            },
            {
                "link": "https://twitter.com/",
                "icon": "fab fa-twitter",
                "title": "Twitter"
            },
            {
                "link": "https://github.com/",
                "icon": "fab fa-github",
                "title": "Github"
            }
        ]
    },
    {
        "image": "/img/faces/4.jpg",
        "name": "Lisa Trueman",
        "role": "UI/UX Designer",
        "social": [
            {
                "link": "https://behance.net/",
                "icon": "fab fa-behance",
                "title": "Behance"
            },
            {
                "link": "https://dribbble.com/",
                "icon": "fab fa-dribbble",
                "title": "Dribbble"
            },
            {
                "link": "https://twitter.com/",
                "icon": "fab fa-twitter",
                "title": "Twitter"
            },
            {
                "link": "https://github.com/",
                "icon": "fab fa-github",
                "title": "Github"
            }
        ]
    },
    {
        "image": "/img/faces/5.jpg",
        "name": "Tom Oldman",
        "role": "Art Director",
        "social": [
            {
                "link": "https://behance.net/",
                "icon": "fab fa-behance",
                "title": "Behance"
            },
            {
                "link": "https://dribbble.com/",
                "icon": "fab fa-dribbble",
                "title": "Dribbble"
            },
            {
                "link": "https://twitter.com/",
                "icon": "fab fa-twitter",
                "title": "Twitter"
            },
            {
                "link": "https://github.com/",
                "icon": "fab fa-github",
                "title": "Github"
            }
        ]
    },
    {
        "image": "/img/faces/6.jpg",
        "name": "Corey Trueman",
        "role": "Technical Director",
        "social": [
            {
                "link": "https://behance.net/",
                "icon": "fab fa-behance",
                "title": "Behance"
            },
            {
                "link": "https://dribbble.com/",
                "icon": "fab fa-dribbble",
                "title": "Dribbble"
            },
            {
                "link": "https://twitter.com/",
                "icon": "fab fa-twitter",
                "title": "Twitter"
            },
            {
                "link": "https://github.com/",
                "icon": "fab fa-github",
                "title": "Github"
            }
        ]
    },
    {
        "image": "/img/faces/7.jpg",
        "name": "Justin Newman",
        "role": "Copywriter",
        "social": [
            {
                "link": "https://behance.net/",
                "icon": "fab fa-behance",
                "title": "Behance"
            },
            {
                "link": "https://dribbble.com/",
                "icon": "fab fa-dribbble",
                "title": "Dribbble"
            },
            {
                "link": "https://twitter.com/",
                "icon": "fab fa-twitter",
                "title": "Twitter"
            },
            {
                "link": "https://github.com/",
                "icon": "fab fa-github",
                "title": "Github"
            }
        ]
    },
    {
        "image": "/img/faces/8.jpg",
        "name": "Spunkie",
        "role": "Paw giver",
        "social": [
            {
                "link": "https://behance.net/",
                "icon": "fab fa-behance",
                "title": "Behance"
            },
            {
                "link": "https://dribbble.com/",
                "icon": "fab fa-dribbble",
                "title": "Dribbble"
            },
            {
                "link": "https://twitter.com/",
                "icon": "fab fa-twitter",
                "title": "Twitter"
            },
            {
                "link": "https://github.com/",
                "icon": "fab fa-github",
                "title": "Github"
            }
        ]
    }
]

const Team = (props) => {
  return (
    <Layouts>
        <PageBanner pageTitle={"اعضای تیم ما"} breadTitle={"تیم"} anchorLabel={"تیم ما"} anchorLink={"#team"} />
      
        {/* team */}
        <section id="team">
            <div className="container mil-p-120-90">
                <div className="row">
                    {props.team.map((item, key) => (
                    <div className="col-sm-6 col-md-4 col-lg-3" key={`team-item-${key}`}>

                        <div className="mil-team-card mil-up mil-mb-30">
                            <img src={item.image} alt={item.name} />
                            <div className="mil-description">
                                <div className="mil-secrc-text">
                                    <h5 className="mil-muted mil-mb-5">{item.name}</h5>
                                    <p className="mil-link mil-light-soft mil-mb-10">{item.role}</p>
                                    <ul className="mil-social-icons mil-center">
                                        {item.social.map((social_item, social_key) => (
                                        <li key={`team-item-${key}-${social_key}`}><a href={social_item.link} target="_blank" className="social-icon">{social_item.title}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    ))}
                </div>
            </div>
        </section>
        {/* team end */}

      <CallToActionSection />
    </Layouts>
  );
};
export default Team;

export async function getStaticProps(){
    const res = await fetch("http://127.0.0.1:8000/team/")
    const team = await res.json()
    return {
        props : {
            team,
        },
        revalidate : 10
    }
}