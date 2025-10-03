


const subTitle = "About Our Adyanta";
const title = "Guiding Students Towards International Opportunities";
const desc = "Adyanta Overseas Education Consultants guide students towards international educational opportunities with personalized counseling and expert guidance. Adyanta has successfully helping students achieve their academic goals abroad.";


const aboutList = [
    {
        imgUrl: 'assets/images/about/icon/01.jpg',
        imgAlt: 'about icon nryadav nryadav',
        title: 'Quality Abroad Education',
        desc: 'We make a better path for you to move to aboroad without any hurdles',
    },
    {
        imgUrl: 'assets/images/about/icon/02.jpg',
        imgAlt: 'about icon nryadav nryadav',
        title: '24/7 Guidance & Support',
        desc: 'Mentors here were so skilled and can guide you well at anytime to achieve your goals',
    },
    {
        imgUrl: 'assets/images/about/icon/03.jpg',
        imgAlt: 'about icon nryadav nryadav',
        title: 'Value Added for Money',
        desc: 'We value your money more than you do while giving productivity in every step',
    },
]


const About = () => {
    return (
        <div className="about-section">
            <div className="container">
                <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-end flex-row-reverse">
                    <div className="col">
                        <div className="about-right padding-tb">
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
                    <div className="col">
                        <div className="about-left">
                            <div className="about-thumb">
                                <img src="assets/fly-assets/girl.png" alt="about" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default About;