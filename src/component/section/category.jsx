
import { Link } from "react-router-dom";

const subTitle = "What We offer ?";
const title = "Our Popular Streams To Get Guidance";
const btnText = "Click to Contact Us!";


const categoryList = [
    {
        imgUrl: 'assets/fly-assets/engineering.png',
        imgAlt: 'Engineering Streams',
        title: 'Engineering Streams',
        count: '9 Institutions',
        route: '/coming-soon'
    },
    {
        imgUrl: 'assets/fly-assets/medical.png',
        imgAlt: 'Medical Streams',
        title: 'Medical Streams',
        count: '7 Institutions',
        route: '/medical'
    },
    {
        imgUrl: 'assets/fly-assets/management.png',
        imgAlt: 'Management Streams',
        title: 'Management Streams',
        count: '3 Institutions',
        route: '/coming-soon'
    },
    {
        imgUrl: 'assets/fly-assets/business.png',
        imgAlt: 'Business Streams',
        title: 'Business Streams',
        count: '6 Institutions',
        route: '/coming-soon'
    }
]


const Category = () => {
    return (
        <div className="category-section padding-tb">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row g-10 justify-content-center row-cols-xl-6 row-cols-md-3 row-cols-sm-2 row-cols-1">
                        {categoryList.map((val, i) => (
                            <Link to={val.route} key={i}><div className="col">
                                <div className="category-item text-center">
                                    <div className="category-inner">
                                        <div className="category-thumb" style={{ borderRadius: '0px' }}>
                                            <img src={`${val.imgUrl}`} alt={val.imgAlt} />
                                        </div>
                                        <div className="category-content">
                                            <h6>{val.title}</h6>
                                            <span>{val.count}</span>
                                        </div>
                                    </div>
                                </div>
                            </div></Link>
                        ))}
                    </div>
                    <div className="text-center mt-5">
                        <Link to="/contact" className="lab-btn"><span>{btnText}</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;