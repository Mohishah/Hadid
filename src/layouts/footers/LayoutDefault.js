import Link from "next/link";
import AppData from "@data/app.json"; 
import { useRouter } from 'next/router';


const DefaultFooter = ( { extraClass } ) => {
  const { asPath } = useRouter();
  
  return (
    <>
    {/* footer */}
    <footer className="mil-dark-bg">
        <div className="mi-invert-fix">
            <div className="container mil-p-120-60">
                <div className="row justify-content-between">
                    <div className="col-md-4 col-lg-3 mil-mb-60">

                        <div className="mil-muted mil-logo mil-up mil-mb-30">{AppData.footer.logo.text}</div>

                        <p className="mil-muted mil-up mil-mb-30 mt-5 pt-5">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>

                    </div>
                    <div className="col-md-7 col-lg-7">
                        <div className="row justify-content-end">
                            <div className="col-md-6 col-lg-7">

                                <nav className="mil-footer-menu mil-mb-60">
                                    <ul>
                                        {AppData.footer.menu.map((item, key) => (
                                        <li key={`footer-menu-item-${key}`} className={((asPath.indexOf( item.link ) != -1 && item.link != '/' ) || asPath == item.link ) ? "mil-active mil-up" : "mil-up"}>
                                            <Link href={item.link}>{item.label}</Link>
                                        </li>
                                        ))}
                                    </ul>
                                </nav>

                            </div>
                            <div className="col-md-6 col-lg-5">

                                <ul className="mil-menu-list mil-up mil-mb-60">
                                    <li><h5 className="mil-muted mil-up mil-mb-30">شماره تماس ها :</h5></li>
                                    <li><p className="mil-muted mil-up">021-88888164</p></li>
                                    <li><p className="mil-muted mil-up mil-mb-30">09128362806</p></li>
                                    <li><h5 className="mil-muted mil-up mil-mb-30 mt-5">ایمیل :</h5></li>
                                    <li><p className="mil-muted mil-up">sinaAlavi@gmail.com</p></li>
                                    <li><p className="mil-muted mil-up">sinaAlavi@gmail.com</p></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-between flex-sm-row-reverse">
                    <div className="col-md-7 col-lg-7">

                        <div className="row justify-content-between">

                            <div className="col-md-6 col-lg-5 mil-mb-60">

                                <h6 className="mil-muted mil-up mil-mb-30">تهران</h6>

                                <p className="mil-muted mil-up">میدان آرژانتین انتهای خیابان الوند نبش اهورا مزدا</p>

                            </div>
                            <div className="col-md-6 col-lg-5 mil-mb-60">

                                <h6 className="mil-muted mil-up mil-mb-30">تهران</h6>

                                <p className="mil-muted mil-up">میدان آرژانتین انتهای خیابان الوند نبش اهورا مزدا</p>

                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 col-lg-5 mil-mb-60">

                        <div className="mil-vert-between">
                            <div className="mil-mb-30">
                                <ul className="mil-social-icons mil-up">
                                    {AppData.social.map((item, key) => (
                                    <li key={`footer-social-item-${key}`}><a href={item.link} target="_blank" className="social-icon"><i className={item.icon} /></a></li>
                                    ))}
                                </ul>
                            </div>

                            <a href="https://alvandtechnology.com/" className="mil-light-soft mil-up">© Alvand Technology</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </footer>
    {/* footer end */}
    </>
  );
};
export default DefaultFooter;
