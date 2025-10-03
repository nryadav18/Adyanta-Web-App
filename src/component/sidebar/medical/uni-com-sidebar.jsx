
import { Link } from "react-router-dom";

const price = "Admission Process";
const excenge = "Limited time offer";
const paymentTitle = "Secure Payment:";
const shareTitle = "Share This Course:";
const btnText = "Enroll Now";

const csdcList = [
    {
        iconName: 'icofont-ui-alarm',
        leftText: 'Document Shared',
        rightText: 'Beginner',
    },
    {
        iconName: 'icofont-book-alt',
        leftText: 'Application Submitted',
        rightText: '10 week',
    },
    {
        iconName: 'icofont-signal',
        leftText: 'Offer Received',
        rightText: '08',
    },
    {
        iconName: 'icofont-video-alt',
        leftText: 'Offer Accepted',
        rightText: '18x',
    },
    {
        iconName: 'icofont-abacus-alt',
        leftText: 'Deposit Paid',
        rightText: '0',
    },
    {
        iconName: 'icofont-hour-glass',
        leftText: 'Visa Approved',
        rightText: '80',
    },
    {
        iconName: 'icofont-certificate',
        leftText: 'Registered At University',
        rightText: 'Yes',
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

const UniversityCommonSideBarOne = () => {
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

export default UniversityCommonSideBarOne;