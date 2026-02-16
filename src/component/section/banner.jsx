import { Link } from "react-router-dom";
const subTitle = "Overseas Education";
const title = <h2 className="title"><span className="d-lg-block">Empowering</span> Global Ambitions <span className="d-lg-block">Together</span></h2>;
const desc = "Career Counselling | Choice of University | Admissions | Scholarship | Visa Processing | Mock Interviews | Loan Assistance";


const catagoryList = [
    {
        name: 'Figma',
        link: '#',
    },
    {
        name: 'Adobe XD',
        link: '#',
    },
    {
        name: 'illustration',
        link: '#',
    },
    {
        name: 'Photoshop',
        link: '#',
    },
]


const shapeList = [
    {
        name: '100% Successful Students',
        link: '#',
        className: 'ccl-shape shape-3',
    },
    {
        name: '20K+ Learners',
        link: '#',
        className: 'ccl-shape shape-4',
    },
    {
        name: '10K+ Families Happy',
        link: '#',
        className: 'ccl-shape shape-1',
    },
    {
        name: '20+ Total Institutions',
        link: '#',
        className: 'ccl-shape shape-2',
    },
    {
        name: '10+ Languages',
        link: '#',
        className: 'ccl-shape shape-5',
    },
]

const Banner = () => {
    return (
        <section className="banner-section" style={{ backgroundImage: `url(assets/images/bg-img/06.jpg)` }}>
            <div className="container">
                <div className="section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-xxl-5 col-xl-6 col-lg-10">
                            <div className="banner-content">
                                <h6 className="subtitle text-uppercase fw-medium">{subTitle}</h6>
                                {title}
                                <p className="desc">{desc}</p>
                                {/* <form action="/"> */}
                                {/* <div className="banner-icon">
                                        <i className="icofont-search"></i>
                                    </div> */}
                                {/* <input type="text" placeholder="Keywords of your course" /> */}
                                <Link to="/contact">
                                    <button type="submit" className="adyanta-bg-color" style={{ fontWeight : 600, borderRadius : '6px', color : 'white'}}>Enquire Now</button>
                                </Link>
                                {/* </form> */}
                                <div className="banner-catagory d-flex flex-wrap">
                                    <p style={{ fontWeight : 600 }}>Thanks for choosing us! We appreciate your Choice.</p>
                                    {/* <ul className="lab-ul d-flex flex-wrap">
                                        {catagoryList.map((val, i) => (
                                            <li key={i}><a href={val.link}>{val.name}</a></li>
                                        ))}
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-7 col-xl-6">
                            <div className="banner-thumb">
                                <img src="assets/fly-assets/grad.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="all-shapes"></div>
            <div className="cbs-content-list d-none">
                <ul className="lab-ul" >
                    {shapeList.map((val, i) => (
                        <li className={val.className} key={i}><a  href={val.link}>{val.name}</a></li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Banner;