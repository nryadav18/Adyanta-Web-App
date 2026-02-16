import { Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import AchievementTwo from "../component/section/achievement-2";
import Blog from "../component/section/blog";
import Instructor from "../component/section/instructor";
import Skill from "../component/section/skill";
import Student from "../component/section/student";


const subTitle = "About Our Adyanta";
const title = "Guiding Students Towards Global Opportunities";
const desc = "Adyanta Overseas Education Consultants guide students towards international educational opportunities with personalized counseling and expert guidance. Adyanta has successfully helping students achieve their academic goals abroad.";

const year = "10+";
const expareance = "Years Of Experiences";



const aboutList = [
    {
        imgUrl: 'assets/images/about/icon/01.jpg',
        imgAlt: 'about icon nryadav nryadav',
        title: 'Career Counseling',
        desc: 'We have a specialized team of experts who have the one-to-one interactive session with the students, parents and provide orientation through various sessions.',
    },
    {
        imgUrl: 'assets/images/about/icon/02.jpg',
        imgAlt: 'about icon nryadav nryadav',
        title: 'University Selection',
        desc: 'Our dedicated team takes care about every student and makes them understand the academic score of the student and guides them towards the same.',
    },
    {
        imgUrl: 'assets/images/about/icon/03.jpg',
        imgAlt: 'about icon nryadav nryadav',
        title: 'Visa Guidance',
        desc: 'We provide complete assistance and guidance to the student visa and the expert panel is always ready and gets involved in the preparation of the documents necessary to process the student visa.',
    },
]


const AboutPage = () => {
    return ( 
        <Fragment>
            <Header />
            <PageHeader title={'About Our ADYANTA'} curPage={'About'} />
            <div className="about-section style-3 padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center">
                        <div className="col">
                            <div className="about-left">
                                <div className="about-thumb">
                                    <img src="assets/fly-assets/gallery/3.jpg" alt="about" />
                                </div>
                                <div className="abs-thumb">
                                    {/* <img src="assets/fly-assets/gallery/4.jpg" alt="about" /> */}
                                </div>
                                <div className="about-left-content">
                                    <h3>{year}</h3>
                                    <p>{expareance}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="about-right">
                                <div className="section-header">
                                    <span className="subtitle">{subTitle}</span>
                                    <h2 className="title">{title}</h2>
                                    <p>{desc}</p>
                                </div>
                                <div className="section-wrapper">
                                    <ul className="lab-ul">
                                        {aboutList.map((val, i) => (
                                            <li key={i}>
                                                <div className="sr-left">
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                </div>
                                                <div className="sr-right">
                                                    <h5>{val.title}</h5>
                                                    <p>{val.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Skill />
            {/* <Student /> */}
            <Instructor />
            <AchievementTwo />
            {/* <Blog /> */}
            <Footer />
        </Fragment>
    );
}

export default AboutPage;
 