
import { Link } from "react-router-dom";

const price = "Why MBBS Studies in Kyrgyzstan?";
const excenge = "Limited time offer";
const paymentTitle = "Secure Payment:";
const shareTitle = "Share This Course:";
const btnText = "Enroll Now";


const csdcList = [
    {
        iconName: 'icofont-ui-alarm',
        leftText: 'Alternatives to long-term courses are available.',
        rightText: 'Beginner',
    },
    {
        iconName: 'icofont-book-alt',
        leftText: 'The bulk of Kyrgyzstan’s medical schools are located in or near Bishkek, the country’s capital. These help MBBS students in Kyrgyzstan travel to and from India.',
        rightText: '10 week',
    },
    {
        iconName: 'icofont-signal',
        leftText: 'In Kyrgyzstan, all MBBS institutions have on-campus hostels.',
        rightText: '08',
    },
    {
        iconName: 'icofont-video-alt',
        leftText: 'Air Manas operates nonstop flights between Delhi and Bishkek, with a travel time of 3.10 hours.',
        rightText: '18x',
    },
    {
        iconName: 'icofont-abacus-alt',
        leftText: 'The time difference between India and Kyrgyzstan is only 30 minutes. This means that if you travel from Delhi to Bishkek for your MBBS University, you will arrive at level 3.40 hours, whereas if you return from Bishkek to Delhi, you will arrive at level 2.40 hours.',
        rightText: '0',
    },
    {
        iconName: 'icofont-hour-glass',
        leftText: 'The cost element is one of the key advantages of selecting MBBS in Kyrgyzstan. When compared to some of Indian private medical institutions, you will discover that education costs are lower.',
        rightText: '80',
    },
    {
        iconName: 'icofont-certificate',
        leftText: 'There are various medical colleges in Kyrgyzstan that are recognized by MCI and international organizations such as the World Health Organization.',
        rightText: 'Yes',
    },
    {
        iconName: 'icofont-globe',
        leftText: 'English is the primary medium of instruction in Kyrgyz medical schools. As a result, Indian students would be able to study in Kyrgyzstan medical colleges without difficulty.',
        rightText: 'English',
    },
    {
        iconName: 'icofont-globe',
        leftText: 'Medical education in Kyrgyzstan is of high quality, and the country’s universities have a strong basis.',
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

const UniversityOneSideBarThree = () => {
    return (
        <div className="course-side-detail">
            <div className="csd-title adyanta-bg-color">
                <div className="csdt-left">
                    <h4 className="mb-0">{price}</h4>
                </div>
            </div>
            <div className="csd-content">
                <div className="csdc-lists">
                    <ul className="lab-ul">
                        {csdcList.map((val, i) => (
                            <li key={i}>
                                <div className="csdc-left" style={{ fontSize : '18px', fontWeight : 500 }}>{i + 1}. {val.leftText}</div>
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

export default UniversityOneSideBarThree;