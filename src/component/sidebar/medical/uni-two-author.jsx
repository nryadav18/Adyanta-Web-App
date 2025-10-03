
const name = "Hostel and Accommodation at International European University (IEU)";
const degi = "Assistant Teacher"
const desc = "The hostels are well kept and equipped with all modern conveniences to ensure that students study in a pleasant, orderly, and clean atmosphere. The hostel has separate rooms for boys and girls. A sports complex, a reading area, a café, a kitchen, central heating in the winter, 24-hour Wi-Fi, 3 times meal service, well-equipped rooms, and 24-hour cold and hot water supply are all available at the hostels .In Kyrgyzstan’s medical university hostels, international students will feel safe and secure. All required safety procedures are taken by universities to ensure the safety of students throughout their stay. In Kyrgyzstan, every university hostel has 24-hour CCTV and security guards."


const socialList = [
    {
        link: '#',
        iconName: 'icofont-facebook',
        className: 'facebook',
    },
    {
        link: '#',
        iconName: 'icofont-twitter',
        className: 'twitter',
    },
    {
        link: '#',
        iconName: 'icofont-linkedin',
        className: 'linkedin',
    },
    {
        link: '#',
        iconName: 'icofont-instagram',
        className: 'instagram',
    },
    {
        link: '#',
        iconName: 'icofont-pinterest',
        className: 'pinterest',
    },
]

const UniversityOneAuthor = () => {
    return (
        <div className="authors">
            {/* <div className="author-thumb">
                <img src="assets/images/author/01.jpg" alt="nryadav" />
            </div> */}
            <div className="author-content">
                <h5>{name}</h5>
                {/* <span>{degi}</span> */}
                <p>{desc}</p>
                {/* <ul className="lab-ul social-icons">
                    {socialList.map((val, i) => (
                        <li key={i}>
                            <a href={val.link} className={val.className}><i className={val.iconName}></i></a>
                        </li>
                    ))}
                </ul> */}
            </div>
        </div>
    );
}
 
export default UniversityOneAuthor;