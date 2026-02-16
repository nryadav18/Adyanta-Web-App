import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";

const subTitle = "Featured Courses";
const title = "Pick A Stream To Get Started";


const courseList = [
    {
        imgUrl: 'assets/fly-assets/success/scs1.webp',
        imgAlt: 'Masters Stream',
        price: '10K+',
        cate: 'Masters',
        title: 'Masters Programs - International Admissions',
        totalLeson: 'Guidance & Support',
        schdule: 'Online/Offline',
        authorImgUrl: 'assets/images/course/author/01.jpg',
        authorImgAlt: 'Consultant',
        authorName: 'All Masters Streams',
        btnText: 'Know More',
        route : '/coming-soon'
    },
    {
        imgUrl: 'assets/fly-assets/success/medicos.jpg',
        imgAlt: 'Medical Stream',
        price: '15K+',
        cate: 'Medical',
        title: 'Medical Programs - International Admissions',
        totalLeson: 'Guidance & Support',
        schdule: 'Online/Offline',
        authorImgUrl: 'assets/images/course/author/02.jpg',
        authorImgAlt: 'Consultant',
        authorName: 'All Medical Streams',
        btnText: 'Know More',
        route : '/medical'
    },
    {
        imgUrl: 'assets/fly-assets/success/scs6.jpg',
        imgAlt: 'Management Stream',
        price: '11K+',
        cate: 'Management',
        title: 'Masters Programs - Management Admissoins',
        totalLeson: 'Guidance & Support',
        schdule: 'Online/Offline',
        authorImgUrl: 'assets/images/course/author/03.jpg',
        authorImgAlt: 'Consultant',
        authorName: 'All Management Streams',
        btnText: 'Know More',
        route : '/coming-soon'
    },
    {
        imgUrl: 'assets/fly-assets/success/scs7.jpg',
        imgAlt: 'Business Stream',
        price: '11K+',
        cate: 'Business',
        title: 'Domestic Business School Admissions',
        totalLeson: 'Guidance & Support',
        schdule: 'Online/Offline',
        authorImgUrl: 'assets/images/course/author/03.jpg',
        authorImgAlt: 'Consultant',
        authorName: 'All Business Streams',
        btnText: 'Know More',
        route : '/coming-soon'
    },
];

const Course = () => {
    return (
        <div className="course-section padding-tb section-bg">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center row-cols-xxl-4 row-cols-xl-3 row-cols-md-2 row-cols-1">
                        {courseList.map((val, i) => (
                            <div className="col" key={i}>
                                <div className="course-item">
                                    <div className="course-inner">
                                        <div className="course-thumb">
                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                        </div>
                                        <div className="course-content">
                                            <div className="course-price">{val.price}</div>
                                            <div className="course-category">
                                                <div className="course-cate">
                                                    <a>{val.cate}</a>
                                                </div>
                                                <div className="course-reiew">
                                                    <Rating />
                                                    <span className="ratting-count"> {val.reviewCount}</span>
                                                </div>
                                            </div>
                                            <h4 style={{ fontSize : '20px' }}>{val.title}</h4>
                                            <div className="course-details">
                                                <div className="couse-count"><i className="icofont-video-alt"></i> {val.totalLeson}</div>
                                                <div className="couse-topic"><i className="icofont-signal"></i> {val.schdule}</div>
                                            </div>
                                            <div className="course-footer">
                                                {/* <div className="course-author">
                                                    <span className="ca-name">{val.authorName}</span>
                                                </div> */}
                                                <div className="course-btn" style={{ textAlign: 'center' , width : '100%'}}>
                                                    <Link to={val.route} className="lab-btn-text">{val.btnText} <i className="icofont-external-link"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Course;