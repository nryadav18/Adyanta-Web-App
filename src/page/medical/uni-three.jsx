import { Component, Fragment } from "react";
import Footer from "../../component/layout/footer";
import HeaderNew from "../../component/layout/header-new";
import UniversityThreePageHeader from "../../component/layout/medical/page-header-3";
import UniversityCommonSideBarOne from "../../component/sidebar/medical/uni-com-sidebar";


const UniversityThree = () => {
    return (
        <Fragment>
            <HeaderNew />
            <UniversityThreePageHeader />
            <div className="course-single-section padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="main-part">
                                <div className="course-item">
                                    <div className="course-inner">
                                        <div className="course-content">
                                            <h3>Georgian Universities</h3>
                                            <p>Georgian Universities are registered with the Ministry of Justice of the Kyrgyz Republic, Ministry of education of Kyrgyz Republic, and Ministry of Health of Kyrgyz Republic at the address Bishkek city (capital) Avezova Street 6/2 bearing a License in higher professional education.</p>
                                            <p>The higher institution is meant for training qualified specialists in the medical sphere for both the Kyrgyz Republic and other countries of the world including India, Pakistan, Bangladesh, Nepal, Nigeria, America, Turkey, and Egypt. More than 1000 students are studying from these countries.</p>
                                            <p>There are doctors & candidates of medical science participating in the training process. The combination of utilization of modern training programs, technical material base, new training technologies, and qualified teachers promotes the improvement of training quality. Institute’s departments will be working out both the fundamental and applied research problems in medicines priority direction.</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="course-video">
                                    <div className="course-video-title">
                                        <h4>Our Suggested Georgian Universities (Click to View)</h4>
                                    </div>
                                    <div className="course-video-content">
                                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="accordion01">
                                                    <button className="d-flex flex-wrap justify-content-between adyanta-bg-color cur-poin bd-cute" data-bs-toggle="collapse" data-bs-target="#videolist1" aria-expanded="true" aria-controls="videolist1"><span className="cur-poin fnt-big">Akaki Tsereteli State University</span> </button>
                                                </div>
                                                <div id="videolist1" className="accordion-collapse collapse" aria-labelledby="accordion01" data-bs-parent="#accordionExample">
                                                    <ul className="lab-ul video-item-list">
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight : 600 }}>The University was set up in Tbilisi, Georgia in 1930. Nowadays, it has shifted to Kutaisi and hence is also known as Kutaisi University. The university was named as Akaki Tsereteli State University after the famous Georgian poet Akaki Tsereteli. It was founded under the direction of the famous Georgian historian Ivane Javakhishvili.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight : 600 }}>The university is recognized by WHO and NMC among other organizations. Recognition from NMC helps students even when they return back to India. Thus the physicians from these institutions are well respected throughout the world. </div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight : 600 }}>The education cost charge in the university is extremely affordable for the Indian students.  Akaki Tsereteli State University is a government research university in Tbilisi (Georgia) and established on July 1930. </div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight : 600 }}>From assisting with application requirements to offering insights into suitable programs, we ensure that every student feels confident and well-prepared for enrollment.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="accordion02">
                                                    <button className="d-flex flex-wrap justify-content-between adyanta-bg-color cur-poin bd-cute" data-bs-toggle="collapse" data-bs-target="#videolist2" aria-expanded="true" aria-controls="videolist2"> <span className="cur-poin fnt-big">Batumi Shota Rustaveli State University</span> </button>
                                                </div>
                                                <div id="videolist2" className="accordion-collapse collapse" aria-labelledby="accordion02" data-bs-parent="#accordionExample">
                                                    <ul className="lab-ul video-item-list">
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight : 600 }}>This university is present in Batumi, Adjara, a place in Georgia. The institution is recognized by WHO and NMC along other organizations. The university is well known all over the world for its medical studies.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight : 600 }}>The cost is not a major factor as it is reasonable for the Indians. Recognition from NMC helps the students even after returning to India. The university provides hostel and mess facilities to the students.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight : 600 }}>We assist in the elaborate and easy steps of obtaining MBBS admission in Georgia at Batumi Shota Rustaveli State University. The university was established in 1923 and its rector is Merab Khalvashi. The university has an urban campus, more than 2000 academic staff, and around 6000 students.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight : 600 }}>Sunstone educations offers visa counseling, documentation check, financial assistance, application submission at Batumi Shota Rustaveli State University.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="accordion03">
                                                    <button className="d-flex flex-wrap justify-content-between adyanta-bg-color cur-poin bd-cute" data-bs-toggle="collapse" data-bs-target="#videolist3" aria-expanded="true" aria-controls="videolist3"><span className="cur-poin fnt-big">Tbilisi State Medical University</span> </button>
                                                </div>
                                                <div id="videolist3" className="accordion-collapse collapse" aria-labelledby="accordion03" data-bs-parent="#accordionExample">
                                                    <ul className="lab-ul video-item-list">
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight : 600 }}>The university is one of the leading medical universities of Georgia. The university has about 7500 undergraduate and 3000 postgraduate students. Some other organizations that have recognized it are the European Commission for Education, NMC etc.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight : 600 }}>The university provides degrees in the field of Dental, Medical, Nursing, Surgery and Pharmacy. The quality of teaching has made its rank 7th in Georgia and 6279 worldwide. </div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight : 600 }}>We assist in the elaborate and easy steps of obtaining MBBS admission in Georgia at Tbilisi State Medical University.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight : 600 }}>The university is famous for quality education and recognized, listed and accredited with the Georgian Education Ministry, National Medical Commission, International Medical Education Directory, World Health Organization, Educational Commission for Foreign Medical Graduates Other Medical Authorities.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="accordion04">
                                                    <button className="d-flex flex-wrap justify-content-between adyanta-bg-color cur-poin bd-cute" data-bs-toggle="collapse" data-bs-target="#videolist4" aria-expanded="true" aria-controls="videolist4"> <span className="cur-poin fnt-big">Georgian National University</span> </button>
                                                </div>
                                                <div id="videolist4" className="accordion-collapse collapse" aria-labelledby="accordion04" data-bs-parent="#accordionExample">
                                                    <ul className="lab-ul video-item-list">
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight : 600 }}>The Georgian National University – SEU was founded on behalf of Ilia Chavchavadze in 2001. It existed over 20 years and is situated amidst the New Ultra-Modern Infrastructure of the College of Medicine. This biggest and one of the most prestigious Medical Colleges is located in the core of Tbilisi – The Mega and Georgia’s Most Pleasant Capital City.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight : 600 }}>This University is spread across 21 Acres. An investment of 25 Million US Dollars (200 Crores) in the Educational Infrastructure, has Well – Established International Standard Medical facilities like Robotic-Surgical training medical equipment, 3D Anatomage & Cadavers, Simulated Mannequin Station, Team Learning Center (TLC), Ultra-Modern Library, Most Advanced Research Center, Simulation Center, High-Tech Laboratories and Highly Advanced Student Reading Room.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight : 600 }}>SEU is Georgia’s biggest medical university in Europe (Euro-Asia), offering internationally accredited degrees that are recognized all over the world.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="accordion05">
                                                    <button className="d-flex flex-wrap justify-content-between adyanta-bg-color cur-poin bd-cute" data-bs-toggle="collapse" data-bs-target="#videolist5" aria-expanded="true" aria-controls="videolist5"><span className="cur-poin fnt-big">New Vision University</span> </button>
                                                </div>
                                                <div id="videolist5" className="accordion-collapse collapse" aria-labelledby="accordion05" data-bs-parent="#accordionExample">
                                                    <ul className="lab-ul video-item-list">
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight : 600 }}>This is one of the major universities of medical science in Georgia. The university was established in the year 2013. The university is among the fastest-growing universities of the region. One of the reasons for the success of the university is the brilliant faculty that is engaged with the university.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight : 600 }}>The institution is recognized by many global bodies including WHO and NMC. The university utilizes the best available facilities to produce professionals in the field of medicine. The New Vision University has established its Non-Commercial Entity in 2013 and the NVU Hospital was established in 2014. The NVU team includes more than 400 practitioners, scholars, and professors as well as over thousands of students belonging to 25 different countries.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight : 600 }}>We assist with elaborated and easy steps of obtaining MBBS admission in Georgia at New Vision University.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="accordion06">
                                                    <button className="d-flex flex-wrap justify-content-between adyanta-bg-color cur-poin bd-cute" data-bs-toggle="collapse" data-bs-target="#videolist6" aria-expanded="true" aria-controls="videolist6"> <span className="cur-poin fnt-big">David Tvildiani Medical University</span> </button>
                                                </div>
                                                <div id="videolist6" className="accordion-collapse collapse" aria-labelledby="accordion06" data-bs-parent="#accordionExample">
                                                    <ul className="lab-ul video-item-list">
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight : 600 }}>David Tvildiani Medical University is a university that was established in 1989. Presently the university has about 400 to 500 students. The university is ranked at 22 in Georgia and 9771 in the world. The university is one of the best medical universities in the world.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight : 600 }}>The course includes 5 years of academic studies and 1 year of the internship course. The university is quite affordable for Indian students. The university is also recognized by the NMC.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight : 600 }}>It has a branch or Medical School named “AIETI”. The university provides high quality scientifically-oriented medical education that meets international benchmarks of medical education.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight : 600 }}>We assist in the elaborate and easy steps of obtaining MBBS admission in Georgia at David Tvildiani Medical University.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar-part">
                                <UniversityCommonSideBarOne />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default UniversityThree;