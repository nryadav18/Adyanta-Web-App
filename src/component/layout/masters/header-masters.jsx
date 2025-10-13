import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const phoneNumber = "+91-7989848568";
const address1 = "vamsi@adyanta.co";
const address2 = "adyantaoverseas.kakinada@gmail.com";



let socialList = [
    {
        iconName: 'icofont-facebook-messenger',
        siteLink: '#',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
    },
    {
        iconName: 'icofont-vimeo',
        siteLink: '#',
    },
    {
        iconName: 'icofont-skype',
        siteLink: '#',
    },
    {
        iconName: 'icofont-rss-feed',
        siteLink: '#',
    },
]

const HeaderMasters = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFiexd, setHeaderFiexd] = useState(false);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            setHeaderFiexd(true);
        } else {
            setHeaderFiexd(false);
        }
    });

    return (
        <header className={`header-section ${headerFiexd ? "header-fixed fadeInUp" : ""}`}>
            <div className={`header-top ${socialToggle ? "open" : ""}`}>
                <div className="container" style={{ backgroundColor: 'transparent' }}>
                    <div className="header-top-area">
                        <ul className="lab-ul left">
                            <li><i className="icofont-ui-call"></i> <span>{phoneNumber}</span></li>
                            <li><i className="icofont-email"></i> {address1}</li>
                            <li><i className="icofont-email"></i> {address2}</li>
                        </ul>
                        <ul className="lab-ul social-icons d-flex align-items-center" id="header-social-icons">
                            <li><p>Find us on : </p></li>
                            {socialList.map((val, i) => (
                                <li key={i}><a href={val.siteLink}><i className={val.iconName}></i></a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo">
                            <Link to="/"><img src="assets/fly-assets/mainlogo.png" style={{ width: '350px', height: '100px' }} alt="logo" /></Link>
                        </div>
                        <div className="menu-area">
                            <div className="menu">
                                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                    <li><NavLink to="/">Home</NavLink></li>
                                    {/* <li className="menu-item-has-children">
                                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Home</a>
                                        <ul className="lab-ul">
                                            <li><NavLink to="/">Home One</NavLink></li>
                                            <li><NavLink to="/index-2">Home Two</NavLink></li>
                                            <li><NavLink to="/index-3">Home Three</NavLink></li>
                                            <li><NavLink to="/index-4">Home Four</NavLink></li>
                                            <li><NavLink to="/index-5">Home Five</NavLink></li>
                                            <li><NavLink to="/index-6">Home Six</NavLink></li>
                                            <li><NavLink to="/index-7">Home Seven</NavLink></li>
                                        </ul>
                                    </li> */}
                                    <li className="menu-item-has-children">
                                            <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Country</a>
                                            <ul className="lab-ul dropdown-menu">
                                            <li><NavLink to="/masters-usa">USA</NavLink></li>
                                            <li><NavLink to="/masters-canada">Canada</NavLink></li>
                                            <li><NavLink to="/masters-australia">Australia</NavLink></li>
                                            <li><NavLink to="/masters-uk">UK</NavLink></li>
                                            <li className="menu-item-has-children">
                                                <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">European Countries</a>
                                                <ul className="lab-ul dropdown-menu">
                                                    <li><NavLink to="/masters-germany">Germany</NavLink></li>
                                                    <li><NavLink to="/masters-france">France</NavLink></li>
                                                    <li><NavLink to="/masters-italy">Italy</NavLink></li>
                                                    <li><NavLink to="/masters-spain">Spain</NavLink></li>
                                                    <li><NavLink to="/masters-ireland">Ireland</NavLink></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><NavLink to="/coming-soon">Gallery</NavLink></li>
                                    <li><NavLink to="/contact">Contact</NavLink></li>
                                </ul>
                            </div>

                            {/* <Link to="/login" className="login"><i className="icofont-user"></i> <span>LOG IN</span> </Link>
                            <Link to="/signup" className="signup"><i className="icofont-users"></i> <span>SIGN UP</span> </Link> */}

                            <div className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`} onClick={() => setMenuToggle(!menuToggle)}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="ellepsis-bar d-lg-none" onClick={() => setSocialToggle(!socialToggle)}>
                                <i className="icofont-info-square"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderMasters;