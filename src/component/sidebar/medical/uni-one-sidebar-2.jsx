import { Link } from "react-router-dom";
const title = "Why to Study MBBS at Avicenna?";


const cscContentList = [
    {
        link: '#',
        left: 'A lovely permanent campus',
        right: '30',
    },
    {
        link: '#',
        left: 'High-Quality Education',
        right: '20',
    },
    {
        link: '#',
        left: 'Patient Exposure',
        right: '93',
    },
    {
        link: '#',
        left: 'Affordable Tuition',
        right: '54',
    },
    {
        link: '#',
        left: 'Multicultural Environment',
        right: '28',
    },
    {
        link: '#',
        left: 'Convenient Administrative Structure',
        right: '30',
    },
    {
        link: '#',
        left: 'Excellent Accommodation',
        right: '38',
    },
    {
        link: '#',
        left: 'Provision of Foreign Student Coordinator',
        right: '75',
    },
    {
        link: '#',
        left: 'Excellent Religious Events',
        right: '89',
    }
]


const UniversityOneSideBarTwo = () => {
    return (
        <div className="course-side-cetagory">
            <div className="csc-title adyanta-bg-color">
                <h5 className="mb-0">{title}</h5>
            </div>
            <div className="csc-content">
                <div className="csdc-lists">
                    <ul className="lab-ul">
                        {cscContentList.map((val, i) => (
                            <li key={i}>
                                <div className="csdc-left" style={{ fontSize: '18px', fontWeight: 500 }}>{val.left}</div>
                                {/* <div className="csdc-right">{val.right}</div> */}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default UniversityOneSideBarTwo;