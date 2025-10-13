
import Rating from "../rating";

const title = "Popular Courses to Study in the United Kingdom for Indian Students";

const commentList = [
    {
        imgUrl: 'assets/images/author/02.jpg',
        imgAlt: 'nryadav',
        name: 'Engineering',
        date: 'Jun 5, 2022 at 12:41 pm',
        desc: 'Engineering programs in the United Kingdom are highly regarded for their academic excellence and practical focus. Students can pursue degrees in disciplines such as electrical engineering, mechanical engineering, computer science, civil engineering, and aerospace engineering. The United Kingdom\'s rich tradition in engineering and innovation provides students with opportunities to engage in cutting-edge research and industry collaborations.',
    },
    {
        imgUrl: 'assets/images/author/03.jpg',
        imgAlt: 'nryadav',
        name: 'Business and Management',
        date: 'Jun 5, 2022 at 12:41 pm',
        desc: 'Business-related programs are popular among Indian students seeking to study in the United Kingdom. The country is home to prestigious business schools offering programs such as MBA (Master of Business Administration) and specialized master\'s degrees in finance, marketing, entrepreneurship, and management. With a dynamic business environment and access to global markets, the United Kingdom provides a conducive setting for aspiring business leaders and entrepreneurs.',
    },
    {
        imgUrl: 'assets/images/author/02.jpg',
        imgAlt: 'nryadav',
        name: 'Computer Science and Information Technology',
        date: 'Jun 5, 2022 at 12:41 pm',
        desc: 'The United Kingdom is a leading destination for computer science and IT programs, attracting students interested in areas such as artificial intelligence, cybersecurity, data science, and software engineering. Renowned universities offer state-of-the-art facilities and research opportunities, allowing students to gain practical skills and knowledge in high-demand fields.',
    },
    {
        imgUrl: 'assets/images/author/03.jpg',
        imgAlt: 'nryadav',
        name: 'Health Sciences and Medicine',
        date: 'Jun 5, 2022 at 12:41 pm',
        desc: 'Medical and health-related programs are highly esteemed in the United Kingdom, with top-ranking medical schools and healthcare institutions offering degrees in medicine, nursing, public health, pharmacy, and biomedical sciences. Students benefit from clinical placements, research opportunities, and exposure to innovative healthcare practices, preparing them for rewarding careers in healthcare.',
    },
    {
        imgUrl: 'assets/images/author/02.jpg',
        imgAlt: 'nryadav',
        name: 'Social Sciences and Humanities',
        date: 'Jun 5, 2022 at 12:41 pm',
        desc: 'Programs in social sciences and humanities are valued for their emphasis on critical thinking, analysis, and communication skills. Students can explore disciplines such as psychology, sociology, economics, political science, and international relations, gaining insights into human behavior, societies, and global issues. The United Kingdom\'s rich cultural heritage and academic diversity provide a stimulating environment for academic and personal growth.',
    }
]


const MastersCommentFour = () => {
    return (
        <div className="comments">
            <h3 className="title-border" style={{ fontSize: '30px', fontWeight: 'bold' }}>{title}</h3>
            <ul className="comment-list">
                {commentList.map((val, i) => (
                    <li className="comment" key={i}>
                        {/* <div className="com-thumb">
                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                        </div> */}
                        <div className="com-content">
                            <div className="com-title">
                                <div className="com-title-meta">
                                    <h4> {i+1}. {val.name}</h4>
                                    {/* <span> {val.date} </span> */}
                                </div>
                                {/* <Rating /> */}
                            </div>
                            <p>{val.desc}</p>
                        </div>
                    </li>
                ))}
                <p><b><i>Overall, Indian students have a wealth of options when considering studying in the United Kingdom, with opportunities to pursue their academic interests and career goals in a dynamic and culturally diverse environment. It's essential for students to conduct thorough research and carefully evaluate their options to find the right course and institution that aligns with their aspirations.</i></b></p>
            </ul>
        </div>
    );
}

export default MastersCommentFour;