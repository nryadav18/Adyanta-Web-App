import { Component, Fragment } from "react";
import Footer from "../../component/layout/footer";
import HeaderNew from "../../component/layout/header-new";
import UniversityFourPageHeader from "../../component/layout/medical/page-header-4";
import UniversityCommonSideBarOne from "../../component/sidebar/medical/uni-com-sidebar";

const UniversityFour = () => {
    return (
        <Fragment>
            <HeaderNew />
            <UniversityFourPageHeader />
            <div className="course-single-section padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="main-part">
                                <div className="course-item">
                                    <div className="course-inner">
                                        <div className="course-content">
                                            <h3>Uzbekistan Universities</h3>
                                            <p>Uzbekistan is an increasingly popular destination for international students, particularly those from India, seeking an affordable MBBS education. The medical universities offer globally recognized degrees, English-medium courses, and a low cost of living</p>
                                            <p>The higher institution is meant for training qualified specialists in the medical sphere for both the Kyrgyz Republic and other countries of the world including India, Pakistan, Bangladesh, Nepal, Nigeria, America, Turkey, and Egypt. More than 1000 students are studying from these countries.</p>
                                            <p>There are doctors & candidates of medical science participating in the training process. The combination of utilization of modern training programs, technical material base, new training technologies, and qualified teachers promotes the improvement of training quality. Institute’s departments will be working out both the fundamental and applied research problems in medicines priority direction.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="course-video">
                                    <div className="course-video-title">
                                        <h4>Our Suggested Uzbekistan Universities (Click to View)</h4>
                                    </div>
                                    <div className="course-video-content">
                                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="accordion01">
                                                    <button className="d-flex flex-wrap justify-content-between adyanta-bg-color cur-poin bd-cute" data-bs-toggle="collapse" data-bs-target="#videolist1" aria-expanded="true" aria-controls="videolist1"><span className="cur-poin fnt-big">Tashkent Medical Academy</span> </button>
                                                </div>
                                                <div id="videolist1" className="accordion-collapse collapse" aria-labelledby="accordion01" data-bs-parent="#accordionExample">
                                                    <ul className="lab-ul video-item-list">
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight : 600 }}>The president of the Republic of Uzbekistan established the Tashkent Medical Academy on July 19, 2005. Faculty such as General Medicine, Pedagogy, and Nursing were initially established at the academy, with a total capacity of 4662 students.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight : 600 }}>Tashkent Medical Academy’s MBBS program is based on the production of highly trained professionals on 58 chairs through the acquisition of clinical skills. There are seven separate scientific councils within the institute.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight : 600 }}>Tashkent Medical Academy has formed partnerships with several foreign departments of education and research organisations to build partnerships between prominent higher education institutions in NIS nations and outside. The University is recognized by WHO, MCI and UNESCO.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="accordion02">
                                                    <button className="d-flex flex-wrap justify-content-between adyanta-bg-color cur-poin bd-cute" data-bs-toggle="collapse" data-bs-target="#videolist2" aria-expanded="true" aria-controls="videolist2"> <span className="cur-poin fnt-big">Samarkand State Medical Institute</span> </button>
                                                </div>
                                                <div id="videolist2" className="accordion-collapse collapse" aria-labelledby="accordion02" data-bs-parent="#accordionExample">
                                                    <ul className="lab-ul video-item-list">
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight : 600 }}>The year 1930 saw the establishment of the State Medical Institute of Samarkand. The Samarkand State Medical Institute is highly regarded for its progressive approach to teaching and education. Lecture halls, classrooms, and education and clinical laboratories are equipped with the latest multimedia projectors, video recording, and audio equipment to ensure quality teaching and research.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight : 600 }}>International connections of the Institute include Russia, the US, Ukraine, South Korea, and others. In addition to carrying out projects under grants from the Centre for Science and Technology, the Samarkand Medical Institute engages in basic research in collaboration with the Uzbekistan Academy of Sciences.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight : 600 }}>MBBS aspirants who wish to learn and grow in the field of medicine will find the Institute to be among the most desirable educational destinations in recent years due to the constant improvement of the Institute</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="accordion03">
                                                    <button className="d-flex flex-wrap justify-content-between adyanta-bg-color cur-poin bd-cute" data-bs-toggle="collapse" data-bs-target="#videolist3" aria-expanded="true" aria-controls="videolist3"><span className="cur-poin fnt-big">Bukhara State Medical Institute</span> </button>
                                                </div>
                                                <div id="videolist3" className="accordion-collapse collapse" aria-labelledby="accordion03" data-bs-parent="#accordionExample">
                                                    <ul className="lab-ul video-item-list">
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight : 600 }}>Bukhara State Medical Institute is a well known leading university located in Bukhara city, Uzbekistan, established in 1990. It is listed amongst the top Universities offering graduation in medical science and a better option for international students to study MBBS in Uzbekistan. The low tuition fee along with the high standard of education, advanced laboratories, and basic amenities are some of the reasons for attracting thousands of students from around the world.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight : 600 }}>The Institute is recognized by NMC (National Medical Commission), MCI (Medical Council of India), WHO (World Health Organisation), UNESCO (The United Educational Scientific and Cultural Organisation), and from other major medical bodies across the world and has achieved many awards. </div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight : 600 }}>We assist in the elaborate and easy steps of obtaining MBBS admission in Uzbekistan at Bukhara State Medical Institute.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="accordion04">
                                                    <button className="d-flex flex-wrap justify-content-between adyanta-bg-color cur-poin bd-cute" data-bs-toggle="collapse" data-bs-target="#videolist4" aria-expanded="true" aria-controls="videolist4"> <span className="cur-poin fnt-big">Andijan State Medical Institute</span> </button>
                                                </div>
                                                <div id="videolist4" className="accordion-collapse collapse" aria-labelledby="accordion04" data-bs-parent="#accordionExample">
                                                    <ul className="lab-ul video-item-list">
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight : 600 }}>Andijan State Medical Institute is one of the leading institute situated in the ancient cities of Fergana Valley, Andijan City was founded in 1955. Andijan State Medical Institute is a national institute in the Republic of Uzbekistan. Andijan State Medical Institute is providing education in over 56 multiple departments.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight : 600 }}>We assist in the elaborate and easy steps of obtaining MBBS admission in Uzbekistan at Andijan State Medical Institute.</div>
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

export default UniversityFour;