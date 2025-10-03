
import Rating from "../rating";

const title = "Key Benefits of Choosing Kyrgyzstan for Your MBBS Studies";

const commentList = [
    {
        imgUrl: 'assets/images/author/02.jpg',
        imgAlt: 'nryadav',
        name: 'Direct Admissions and Streamlined Process',
        date: 'Jun 5, 2022 at 12:41 pm',
        desc: 'Unlike many countries that require entrance examinations for medical school admission, Kyrgyzstan offers direct admission to MBBS programs. This streamlined process allows students to apply directly to universities without the added pressure of entrance exams, saving time and effort.',
    },
    {
        imgUrl: 'assets/images/author/03.jpg',
        imgAlt: 'nryadav',
        name: 'Globally Recognized Medical Qualifications',
        date: 'Jun 5, 2022 at 12:41 pm',
        desc: 'Kyrgyzstan’s medical degrees hold recognition from various international organizations, including the Medical Council of India (NMC), the World Health Organization (WHO), and others. This global recognition ensures that graduates can pursue further studies or practice medicine in various countries after passing the necessary licensing exams.',
    },
    {
        imgUrl: 'assets/images/author/02.jpg',
        imgAlt: 'nryadav',
        name: 'English Medium of Instruction and Language Support',
        date: 'Jun 5, 2022 at 12:41 pm',
        desc: 'English serves as the primary medium of instruction in Kyrgyz medical universities, making it easier for international students, particularly those from India, to follow the curriculum. While English is the primary language of instruction, universities often encourage students to learn basic Kyrgyz or Russian to enhance their communication skills during clinical training.',
    },
    {
        imgUrl: 'assets/images/author/03.jpg',
        imgAlt: 'nryadav',
        name: 'Dedicated MCI/NMC Coaching and Preparation',
        date: 'Jun 5, 2022 at 12:41 pm',
        desc: 'To support students preparing for the National Medical Commission (NMC) screening test (formerly MCI screening test), universities in Kyrgyzstan provide dedicated coaching and preparation programs. These programs help students familiarize themselves with the exam format and content, increasing their chances of success.',
    },
    {
        imgUrl: 'assets/images/author/02.jpg',
        imgAlt: 'nryadav',
        name: 'Comfortable and Secure Accommodation',
        date: 'Jun 5, 2022 at 12:41 pm',
        desc: 'Universities in Kyrgyzstan offer separate hostel facilities for male and female students, ensuring a comfortable and secure living environment. These hostels are equipped with essential amenities and staffed with security personnel to ensure student safety and well-being.',
    },
    {
        imgUrl: 'assets/images/author/03.jpg',
        imgAlt: 'nryadav',
        name: 'Indian Cuisine and a Welcoming Environment ',
        date: 'Jun 5, 2022 at 12:41 pm',
        desc: 'Understanding the importance of familiar food and culture, many universities in Kyrgyzstan provide Indian mess facilities or offer Indian food options in their canteens. This helps create a more welcoming and comfortable environment for Indian students.',
    },
    {
        imgUrl: 'assets/images/author/02.jpg',
        imgAlt: 'nryadav',
        name: 'High-Quality Internships and Clinical Experience',
        date: 'Jun 5, 2022 at 12:41 pm',
        desc: 'Affiliated hospitals provide students with excellent internship opportunities and practical clinical experience. These hospitals are equipped with modern medical technology and provide students with exposure to a wide range of medical cases, allowing them to develop their clinical skills and knowledge.',
    },
    {
        imgUrl: 'assets/images/author/03.jpg',
        imgAlt: 'nryadav',
        name: 'Enrichment Through Extracurricular Activities',
        date: 'Jun 5, 2022 at 12:41 pm',
        desc: 'Beyond academics, universities in Kyrgyzstan offer a variety of extracurricular activities, including seminars, sports, cultural events, workshops, and conferences. These activities provide students with opportunities to broaden their horizons, develop new skills, and network with peers.',
    },
    {
        imgUrl: 'assets/images/author/03.jpg',
        imgAlt: 'nryadav',
        name: 'Cost-Effective Medical Education',
        date: 'Jun 5, 2022 at 12:41 pm',
        desc: 'One of the most significant advantages of pursuing MBBS in Kyrgyzstan is the affordability of medical education. Tuition fees and living costs are generally lower compared to many other countries, making it a financially viable option for aspiring doctors.',
    },
    {
        imgUrl: 'assets/images/author/03.jpg',
        imgAlt: 'nryadav',
        name: 'High Quality of Life and Infrastructure',
        date: 'Jun 5, 2022 at 12:41 pm',
        desc: 'Kyrgyzstan offers a good standard of living at an affordable cost. The country has made significant progress in various sectors, including healthcare, education, and transportation, providing residents with access to essential amenities and services.',
    },
]


const UniversityOneComment = () => {
    return (
        <div className="comments">
            <h4 className="title-border">{title}</h4>
            <ul className="comment-list">
                {commentList.map((val, i) => (
                    <li className="comment" key={i}>
                        {/* <div className="com-thumb">
                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                        </div> */}
                        <div className="com-content">
                            <div className="com-title">
                                <div className="com-title-meta">
                                    <h6> {i+1}. {val.name}</h6>
                                    {/* <span> {val.date} </span> */}
                                </div>
                                {/* <Rating /> */}
                            </div>
                            <p>{val.desc}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UniversityOneComment;