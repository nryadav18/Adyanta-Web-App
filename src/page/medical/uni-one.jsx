import { Component, Fragment } from "react";
import Footer from "../../component/layout/footer";
import HeaderNew from "../../component/layout/header-new";
import UniversityOnePageHeader from "../../component/layout/medical/page-header-1";
import UniversityOneAuthor from "../../component/sidebar/medical/uni-one-author";
import UniversityOneComment from "../../component/sidebar/medical/uni-one-comments";
import UniversityOneSideBarOne from "../../component/sidebar/medical/uni-one-sidebar-1";
import UniversityOneSideBarTwo from "../../component/sidebar/medical/uni-one-sidebar-2";
import UniversityOneSideBarThree from "../../component/sidebar/medical/uni-one-sidebar-3";


const UniversityOne = () => {
    return (
        <Fragment>
            <HeaderNew />
            <UniversityOnePageHeader />
            <div className="course-single-section padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="main-part">
                                <div className="course-item">
                                    <div className="course-inner">
                                        <div className="course-content">
                                            <h3>Avicenna University Overview</h3>
                                            <p>Avicenna International Medical University, located in Bishkek, the capital of Kyrgyzstan, is a prestigious institution registered with both the Ministry of Justice and the Ministry of Health of the Kyrgyz Republic. Holding a license in higher professional education, Avicenna is dedicated to training qualified medical specialists for Kyrgyzstan and countries worldwide, including India, Pakistan, Bangladesh, Nepal, Nigeria, America, Turkey, and Egypt. It's a popular choice for <b>Indian students seeking MBBS in Kyrgyzstan.</b></p>
                                            <p>With a diverse student body of over 3,000 students from various countries, Avicenna International Medical University offers a truly international learning environment. The university boasts a faculty of experienced doctors and candidates of medical science who are actively involved in the training process. This ensures students receive high-quality education and mentorship from qualified professionals.</p>
                                            <p>Avicenna International Medical University is committed to providing a modern and effective medical education. The university combines modern training programs, a well-equipped technical material base, innovative training technologies, and a qualified faculty to enhance the quality of training. The institute’s departments are also actively involved in both fundamental and applied research in priority areas of medicine, providing students with opportunities to engage in cutting-edge research.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="course-item">
                                    <div className="course-inner">
                                        <div className="course-content">
                                            <h3>Eligibility Criteria</h3>
                                            <ul className="lab-ul">
                                                <li style={{ fontSize : '20px', fontWeight : 500 }}><i className="icofont-tick-mark"></i>Candidates should have a score of at least 50% and subjects as Physics, Chemistry and Biology</li>
                                                <li style={{ fontSize : '20px', fontWeight : 500 }}><i className="icofont-tick-mark"></i>Candidate should have passed NEET</li>
                                                <li style={{ fontSize : '20px', fontWeight : 500 }}><i className="icofont-tick-mark"></i>Candidate should be of 18 years before the year changes</li>
                                                <li style={{ fontSize : '20px', fontWeight : 500 }}><i className="icofont-tick-mark"></i>Candidate should not be above 25 years of age</li>
                                            </ul>
                                            <h4>Must have Documents</h4>
                                            <ul className="lab-ul">
                                                <li style={{ fontSize : '20px', fontWeight : 500 }}><i className="icofont-tick-mark"></i>Passport first-page (Scan)</li>
                                                <li style={{ fontSize : '20px', fontWeight : 500 }}><i className="icofont-tick-mark"></i>SSC/O Levels Certificates</li>
                                                <li style={{ fontSize : '20px', fontWeight : 500 }}><i className="icofont-tick-mark"></i>HSSC/Intermediate or A-Levels Certificates</li>
                                                <li style={{ fontSize : '20px', fontWeight : 500 }}><i className="icofont-tick-mark"></i>Result awaiting students can also apply (Hope certificate needed in this case, available with the school/college student was in).</li>
                                                <li style={{ fontSize : '20px', fontWeight : 500 }}><i className="icofont-tick-mark"></i>Police Clearance Report</li>
                                                <li style={{ fontSize : '20px', fontWeight : 500 }}><i className="icofont-tick-mark"></i>Medical Check-up Report</li>
                                                <li style={{ fontSize : '20px', fontWeight : 500 }}><i className="icofont-tick-mark"></i>Latest photo with white background</li>
                                                <li style={{ fontSize : '20px', fontWeight : 500 }}><i className="icofont-tick-mark"></i>NEET Score Card</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="course-video">
                                    <div className="course-video-title">
                                        <h4>More Details</h4>
                                    </div>
                                    <div className="course-video-content">
                                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="accordion01">
                                                    <button className="d-flex flex-wrap justify-content-between adyanta-bg-color cur-poin bd-cute" data-bs-toggle="collapse" data-bs-target="#videolist1" aria-expanded="true" aria-controls="videolist1"><span className="cur-poin">Recognized by Major Organizations like:</span> </button>
                                                </div>
                                                <div id="videolist1" className="accordion-collapse collapse show" aria-labelledby="accordion01" data-bs-parent="#accordionExample">
                                                    <ul className="lab-ul video-item-list">
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px' }}>Ministry of Education, Kyrgyzstan</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px' }}>Ministry of Education, Kyrgyzstan</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px' }}>GMC (General Medical Council, UK)</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px' }}>WHO (World Health Organization)</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px' }}>NMC (National Medical Council, India)</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px' }}>FAIMER (Foundation of Advancement of International Education)</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px' }}>USMLE (United States Medical Licensing Examination)</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px' }}>WFME (World Federation for Medical Education)</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px' }}>ECFMG (Educational Commission for Foreign Medical Graduates, US)</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px' }}>BMDC (Bangladesh Medical &amp; Dental Council)</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="accordion02">
                                                    <button className="d-flex flex-wrap justify-content-between adyanta-bg-color cur-poin bd-cute" data-bs-toggle="collapse" data-bs-target="#videolist2" aria-expanded="true" aria-controls="videolist2"> <span className="cur-poin">Document Required For Avicenna International Medical University</span> </button>
                                                </div>
                                                <div id="videolist2" className="accordion-collapse collapse" aria-labelledby="accordion02" data-bs-parent="#accordionExample">
                                                    <ul className="lab-ul video-item-list">
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px' }}><b>Document Required For Avicenna International Medical University</b></div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px' }}>SSL/O Levels Certificates</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px' }}>HSSC/Intermediate or A-Levels Certificates</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px' }}>Result awaiting students can also apply (Hope certificate needed in this case, available with the school/college student was in).</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px' }}>Police Clearance Report</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px' }}>Latest photo with white background</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px' }}>NEET Score Card Sunstone.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <UniversityOneAuthor />
                                <UniversityOneComment />
                                {/* <Respond /> */}
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar-part">
                                <UniversityOneSideBarOne />
                                <UniversityOneSideBarTwo />
                                <UniversityOneSideBarThree />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default UniversityOne;