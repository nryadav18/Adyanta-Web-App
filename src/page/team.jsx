import { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Rating from "../component/sidebar/rating";

const instructorList = [
    {
        imgUrl: 'assets/fly-assets/team/vamsi_3.png',
        imgAlt: 'instructor nryadav nryadav',
        name: 'G. Vamsi Krishna',
        degi: 'Director of Adyanta',
    },
    {
        imgUrl: 'assets/fly-assets/team/malleswararao.jpg',
        imgAlt: 'instructor nryadav nryadav',
        name: 'G. Malleshwara Rao',
        degi: 'Senior Counselor',
    },
    {
        imgUrl: 'assets/fly-assets/team/badri.jpg',
        imgAlt: 'instructor nryadav nryadav',
        name: 'V. Badri',
        degi: 'Marketing Head',
    },
    {
        imgUrl: 'assets/fly-assets/mainlogo4.jpg',
        imgAlt: 'instructor nryadav nryadav',
        name: 'V. Himabindhu',
        degi: 'Senior Applicant',
    },
    {
        imgUrl: 'assets/fly-assets/mainlogo4.jpg',
        imgAlt: 'instructor nryadav nryadav',
        name: 'Sk. Bhasha',
        degi: 'Applicant',
    },
]

const achieveList = [
    {
        imgUrl: 'assets/images/achive/01.png',
        imgAlt: 'achive thumb nryadav nryadav',
        title: 'Start Teaching Today',
        desc: 'Seamlessly engage technically sound coaborative reintermed goal oriented content rather than ethica',
        btnText: 'Become A Instructor',
        siteLink: '#',
    },
    {
        imgUrl: 'assets/images/achive/02.png',
        imgAlt: 'achive thumb nryadav nryadav',
        title: 'If You Join Our Course',
        desc: 'Seamlessly engage technically sound coaborative reintermed goal oriented content rather than ethica',
        btnText: 'Register For Free',
        siteLink: '#',
    },
]



const TeamPage = () => {
    return (
        <Fragment>
            <Header />
            <PageHeader title={'All Team Members'} curPage={'Team'} />
            <div className="instructor-section padding-tb section-bg">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="row g-4 justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
                            {instructorList.map((val, i) => (
                                <div className="col" key={i}>
                                    <div className="instructor-item">
                                        <div className="instructor-inner">
                                            <div className="instructor-thumb">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                            <div className="instructor-content">
                                                <Link to="/team-single"><h4>{val.name}</h4></Link>
                                                <p>{val.degi}</p>
                                                <Rating />
                                            </div>
                                        </div>
                                        {/* <div className="instructor-footer">
                                            <ul className="lab-ul d-flex flex-wrap justify-content-between align-items-center">
                                                <li><i className="icofont-book-alt"></i> {val.courseCount}</li>
                                                <li><i className="icofont-users-alt-3"></i> {val.studentAnroll}</li>
                                            </ul>
                                        </div> */}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="achieve-part mt-5">
                            <div className="row g-4 row-cols-1 row-cols-lg-2">
                                {achieveList.map((val, i) => (
                                    <div className="col" key={i}>
                                        <div className="achieve-item">
                                            <div className="achieve-inner">
                                                <div className="achieve-thumb">
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                </div>
                                                <div className="achieve-content">
                                                    <h4>{val.title}</h4>
                                                    <p>{val.desc}</p>
                                                    <a href={val.siteLink} className="lab-btn"><span>{val.btnText}</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default TeamPage;