import CountUp from 'react-countup';
import { useRef, useState, useEffect } from 'react';


const achievementList = [
    {
        iconName: 'icofont-notification',
        count: '10000',
        desc: 'Professional Courses',
    },
    {
        iconName: 'icofont-users-alt-3',
        count: '1000',
        desc: 'Students Enrolled',
    },
    {
        iconName: 'icofont-graduate-alt',
        count: '1000',
        desc: 'Certified Institutions',
    },
    {
        iconName: 'icofont-clock-time',
        count: '10',
        desc: 'Years of Experience',
    },
];

const AchievementThree = () => {
    const sectionRef = useRef(null);
    const [startCount, setStartCount] = useState(false);
    const duration = 3; // Shared duration for all counters (in seconds)

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCount(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="achievement-section style-3 padding-tb" ref={sectionRef}>
            <div className="container" >
                <div className="section-wrapper">
                    <div className="counter-part">
                        <div className="row g-4 row-cols-lg-4 row-cols-sm-2 row-cols-1 justify-content-center">
                            {achievementList.map((val, i) => (
                                <div className="col" key={i}>
                                    <div className="count-item">
                                        <div className="count-inner">
                                            <div className="count-icon">
                                                <i className={val.iconName}></i>
                                            </div>
                                            <div className="count-content">
                                                <h2>
                                                    <span className="count">
                                                        <CountUp end={startCount ? val.count : 0} duration={duration} />
                                                    </span>
                                                    <span>+</span>
                                                </h2>
                                                <p>{val.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AchievementThree;