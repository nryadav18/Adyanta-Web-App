
import Rating from "../../sidebar/rating";

const title = "Dream Big Study in Ireland...!";
const desc = "Turn your Ireland study aspirations into reality - it's closer than ever!";
const author = "Adyanta";
const reviewCount = "20K+ reviews";
const videoLink = "https://www.youtube-nocookie.com/embed/jP649ZHA8Tg";


const categoryList = [
    {
        link: 'https://adyanta.co/masters-ireland',
        text: 'Study at Ireland Universities',
        className: 'course-cate adyanta-bg-color',
    }
]


const MastersNinePageHeader = () => {
    return (
        <div className="pageheader-section style-2">
            <div className="container">
                <div className="row justify-content-center justify-content-lg-between align-items-center flex-row-reverse">
                    <div className="col-lg-7 col-12">
                        <div className="pageheader-thumb">
                            <img src="assets/fly-assets/masters/std_ireland.jpg" alt="nryadav" className="w-100" />
                            {/* <a href={videoLink} className="video-button popup" target="_blank"><i className="icofont-ui-play"></i></a> */}
                        </div>
                    </div>
                    <div className="col-lg-5 col-12">
                        <div className="pageheader-content">
                            <div className="course-category">
                                {categoryList.map((val, i) => (
                                    <a href={val.link} target="_blank" className={val.className} key={i}>{val.text}</a>
                                ))}
                            </div>
                            <h2 className="phs-title">{title}</h2>
                            <p className="phs-desc">{desc}</p>
                            <div className="phs-thumb">
                                <img src="assets/fly-assets/mainlogo4.jpg" alt="nryadav" />
                                <span>{author}</span>
                                <div className="course-reiew">
                                    <Rating />
                                    <span className="ratting-count">{reviewCount}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default MastersNinePageHeader;