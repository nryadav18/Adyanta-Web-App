
import CountUp from 'react-countup';
import React, { useRef, useEffect, useState } from 'react';

const subTitle = "START TO SUCCESS";
const title = "Achieve Your Goals With ADYANTA";


const achievementList = [
    {
        count: '10000',
        desc: 'Processional Courses in World',
    },
    {
        count: '1000',
        desc: 'Skilled Students from Adyanta',
    },
    {
        count: '30',
        desc: 'Qualified Foreign Countries',
    },
    {
        count: '10',
        desc: 'Years of Experience',
    }
]

const AchievementTwo = () => {
    const sectionRef = useRef(null);
    const [startCount, setStartCount] = useState(false);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio >= 0.5) {
                    setStartCount(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => observer.disconnect();
    }, []);

    return (
        <div className="achievement-section padding-tb" ref={sectionRef}>
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="counter-part mb-4">
                        <div className="row g-4 row-cols-lg-4 row-cols-sm-2 row-cols-1 justify-content-center">
                            {achievementList.map((val, i) => (
                                <div className="col" key={i}>
                                    <div className="count-item">
                                        <div className="count-inner">
                                            <div className="count-content">
                                                <h2>
                                                    <span className="count">
                                                        {startCount ? <CountUp end={val.count} /> : 0}
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
 
export default AchievementTwo;