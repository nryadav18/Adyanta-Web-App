
import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";


const subTitle = "World-class Counsellers";
const title = "Guided By Well Experienced Counsellers";

const instructorList = [
    {
        imgUrl: 'assets/fly-assets/team/vamsi_3.png',
        imgAlt: 'instructor nryadav nryadav',
        name: 'G. Vamsi Krishna',
        degi: 'Director of Adyanta',
    },
    {
        imgUrl: 'assets/fly-assets/team/malleswararao.png',
        imgAlt: 'instructor nryadav nryadav',
        name: 'G. Malleshwara Rao',
        degi: 'Senior Counselor',
    },
    {
        imgUrl: 'assets/fly-assets/team/badri.png',
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


const Instructor = () => {
    return (
        <div className="instructor-section padding-tb section-bg">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-5">
                        {instructorList.map((val, i) => (
                            <div className="col" key={i}>
                                <div className="instructor-item">
                                    <div className="instructor-inner">
                                        <div className="instructor-thumb">
                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                        </div>
                                        <div className="instructor-content">
                                            {/* <Link to="/team-single"> */}
                                                <h4>{val.name}</h4>
                                            {/* </Link> */}
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
                    {/* <div className="text-center footer-btn">
                        <p>Want to help people learn, grow and achieve more in life?<Link to="/team">Become an instructor</Link></p>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Instructor;