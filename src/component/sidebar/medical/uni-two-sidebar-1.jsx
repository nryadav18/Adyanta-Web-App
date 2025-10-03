
import { Link } from "react-router-dom";

const price = "Admission Process of IEU";
const excenge = "Limited time offer";
const paymentTitle = "Secure Payment:";
const shareTitle = "Share This Course:";
const btnText = "Enroll Now";

const csdcList = [
    {
        iconName: 'icofont-ui-alarm',
        leftText: 'Filling Out the Application',
        rightText: 'Beginner',
    },
    {
        iconName: 'icofont-book-alt',
        leftText: 'Letter of Application for Admission',
        rightText: '10 week',
    },
    {
        iconName: 'icofont-signal',
        leftText: 'Documents submission',
        rightText: '08',
    },
    {
        iconName: 'icofont-video-alt',
        leftText: 'Examination of the Documents',
        rightText: '18x',
    },
    {
        iconName: 'icofont-abacus-alt',
        leftText: 'Wait for the Counseling Procedure to Begin.',
        rightText: '0',
    },
    {
        iconName: 'icofont-hour-glass',
        leftText: 'Obtain a letter of invitation from the university.',
        rightText: '80',
    },
    {
        iconName: 'icofont-certificate',
        leftText: 'Make an application for a student visa as well as a travel visa.',
        rightText: 'Yes',
    },
    {
        iconName: 'icofont-globe',
        leftText: 'Pay a visit to the University',
        rightText: 'English',
    },
    {
        iconName: 'icofont-globe',
        leftText: 'Pay the appropriate entry fees in accordance with university regulations.',
        rightText: 'English',
    },
    {
        iconName: 'icofont-globe',
        leftText: 'Complete the requirements for admission to Kyrgyzstans Medical School, including a 6-year bond.',
        rightText: 'English',
    },
]

const socialList = [
    {
        siteLink: '#',
        iconName: 'icofont-twitter',
        className: 'twitter',
    },
    {
        siteLink: '#',
        iconName: 'icofont-vimeo',
        className: 'vimeo',
    },
    {
        siteLink: '#',
        iconName: 'icofont-rss',
        className: 'rss',
    },
]

const UniversityTwoSideBarOne = () => {
    return (
        <div className="course-side-detail">
            <div className="csd-title adyanta-bg-color">
                <div className="csdt-left">
                    <h4 className="mb-0">{price}</h4>
                </div>
                <div className="csdt-right">
                    <i style={{ fontSize: '32px', color: 'white' }} className="icofont-certificate"></i>
                </div>
            </div>
            <div className="csd-content">
                <div className="csdc-lists">
                    <ul className="lab-ul">
                        {csdcList.map((val, i) => (
                            <li key={i}>
                                <div className="csdc-left" style={{ fontSize: '18px', fontWeight: 500 }}>{i + 1}. {val.leftText}</div>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* <div className="sidebar-payment">
                    <div className="sp-title">
                        <h6>{paymentTitle}</h6>
                    </div>
                    <div className="sp-thumb">
                        <img src="assets/images/pyment/01.jpg" alt="CodexCoder" />
                    </div>
                </div>
                <div className="sidebar-social">
                    <div className="ss-title">
                        <h6>{shareTitle}</h6>
                    </div>
                    <div className="ss-content">
                        <ul className="lab-ul">
                            {socialList.map((val, i) => (
                                <li key={i}><a href={val.siteLink} className={val.className}><i className={val.iconName}></i></a></li>
                            ))}
                        </ul>
                    </div>
                </div> */}
                <div className="course-enroll">
                    <Link to="/contact" className="lab-btn adyanta-bg-color"><span>{btnText}</span></Link>
                </div>
            </div>
        </div>
    );
}

export default UniversityTwoSideBarOne;