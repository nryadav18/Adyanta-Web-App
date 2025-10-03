import { Component, Fragment } from "react";
import Footer from "../../component/layout/footer";
import HeaderNew from "../../component/layout/header-new";
import UniversitySixPageHeader from "../../component/layout/medical/page-header-6";
import UniversityCommonSideBarOne from "../../component/sidebar/medical/uni-com-sidebar";

const UniversitySix = () => {
    return (
        <Fragment>
            <HeaderNew />
            <UniversitySixPageHeader />
            <div className="course-single-section padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="main-part">
                                <div className="course-item">
                                    <div className="course-inner">
                                        <div className="course-content">
                                            <h3>Central American Universities</h3>
                                            <p>Central America has become an increasingly popular destination for international students, particularly from India, seeking an affordable and high-quality MBBS education. The region offers a large number of government medical universities with globally recognized degrees and English-medium programs</p>
                                            <p>The higher institution is meant for training qualified specialists in the medical sphere for both the Kyrgyz Republic and other countries of the world including India, Pakistan, Bangladesh, Nepal, Nigeria, America, Turkey, and Egypt. More than 1000 students are studying from these countries.</p>
                                            <p>There are doctors & candidates of medical science participating in the training process. The combination of utilization of modern training programs, technical material base, new training technologies, and qualified teachers promotes the improvement of training quality. Institute’s departments will be working out both the fundamental and applied research problems in medicines priority direction.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="course-video">
                                    <div className="course-video-title">
                                        <h4>Our Suggested Central American Universities (Click to View)</h4>
                                    </div>
                                    <div className="course-video-content">
                                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="accordion01">
                                                    <button className="d-flex flex-wrap justify-content-between adyanta-bg-color cur-poin bd-cute" data-bs-toggle="collapse" data-bs-target="#videolist1" aria-expanded="true" aria-controls="videolist1"><span className="cur-poin fnt-big">St. Martinus University Faculty of Medicine (SMUFOM)</span> </button>
                                                </div>
                                                <div id="videolist1" className="accordion-collapse collapse show" aria-labelledby="accordion01" data-bs-parent="#accordionExample">
                                                    <ul className="lab-ul video-item-list">
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight: 600 }}>St. Martinus University Faculty of Medicine (SMUFOM) is a private medical school located in Willemstad, Curaçao, which started operating in 2000. In 2013 the university became a designated educational institution for the Canada Student Loans Program.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight: 600 }}>St. Martinus University is listed in the World Directory of Medical Schools, and its graduates are eligible to apply for ECFMG certification, allowing them to take the United States Medical Licensing Examination and become licensed to practice medicine in the US. It is recognized by the Medical Council of India as a degree-granting university/institution.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight: 600 }}>St.Martinus University received full 5 year accreditation by Agency for Accreditation of Educational Programs and Organizations (AAEPO) a World Federation for Medical Education (WFME) Accredited Agency in December 2023.</div>
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

export default UniversitySix;