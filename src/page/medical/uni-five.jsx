import { Component, Fragment } from "react";
import Footer from "../../component/layout/footer";
import HeaderNew from "../../component/layout/header-new";
import UniversityFivePageHeader from "../../component/layout/medical/page-header-5";
import UniversityCommonSideBarOne from "../../component/sidebar/medical/uni-com-sidebar";

const UniversityFive = () => {
    return (
        <Fragment>
            <HeaderNew />
            <UniversityFivePageHeader />
            <div className="course-single-section padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="main-part">
                                <div className="course-item">
                                    <div className="course-inner">
                                        <div className="course-content">
                                            <h3>Russian Universities</h3>
                                            <p>Russia has long been a popular destination for international students, particularly from India, seeking an affordable and high-quality MBBS education. The country offers a large number of government medical universities with globally recognized degrees and English-medium programs</p>
                                            <p>The higher institution is meant for training qualified specialists in the medical sphere for both the Kyrgyz Republic and other countries of the world including India, Pakistan, Bangladesh, Nepal, Nigeria, America, Turkey, and Egypt. More than 1000 students are studying from these countries.</p>
                                            <p>There are doctors & candidates of medical science participating in the training process. The combination of utilization of modern training programs, technical material base, new training technologies, and qualified teachers promotes the improvement of training quality. Institute’s departments will be working out both the fundamental and applied research problems in medicines priority direction.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="course-video">
                                    <div className="course-video-title">
                                        <h4>Our Suggested Russian Universities (Click to View)</h4>
                                    </div>
                                    <div className="course-video-content">
                                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="accordion01">
                                                    <button className="d-flex flex-wrap justify-content-between adyanta-bg-color cur-poin bd-cute" data-bs-toggle="collapse" data-bs-target="#videolist1" aria-expanded="true" aria-controls="videolist1"><span className="cur-poin fnt-big">Immanuel Kant Baltic Federal University</span> </button>
                                                </div>
                                                <div id="videolist1" className="accordion-collapse collapse" aria-labelledby="accordion01" data-bs-parent="#accordionExample">
                                                    <ul className="lab-ul video-item-list">
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight: 600 }}>Immanuel Kant Baltic Federal University was founded in 1967 expanding on the already existing Kaliningrad State Pedagogical University that had been founded in 1947. The history of the University began with the establishment of the State Pedagogical Institute in Kaliningrad. IKBFU is a leading university of the Kaliningrad region and one of the ten federal universities of the Russian Federation.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight: 600 }}>Conveniently located in the heart of Europe, Immanuel Kant Baltic Federal University attracts students and researchers from around the world. Today citizens from 40 countries of the world – from Europe, Latin America, Asia and Africa – study at different levels and conduct research at the University.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight: 600 }}>Immanuel Kant Baltic Federal University carefully keeps the academic traditions of its predecessor – the ‘Albertina’ University of Königsberg and introduces the newest technologies of Russian classical education.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="accordion02">
                                                    <button className="d-flex flex-wrap justify-content-between adyanta-bg-color cur-poin bd-cute" data-bs-toggle="collapse" data-bs-target="#videolist2" aria-expanded="true" aria-controls="videolist2"> <span className="cur-poin fnt-big">Ulyanovsk State Medical University</span> </button>
                                                </div>
                                                <div id="videolist2" className="accordion-collapse collapse" aria-labelledby="accordion02" data-bs-parent="#accordionExample">
                                                    <ul className="lab-ul video-item-list">
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight: 600 }}>Ulyanovsk State Medical University is the government medical university located in Ulyanovsk city, Russia. It is one of the topmost medical university in Russia and the oldest educational institutional of Russia.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight: 600 }}>Ulyanovsk State Medical University consists of 40 affiliated hospitals and polyclinic where medical students can develop practical skills.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight: 600 }}>This University is provided 1500 faculty members, including 600 doctors of medical science, 450 Ph.D in medicine, 250 professor, and 200 associate professor etc.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight: 600 }}>They are recognised by WHO, MCI, and other international medical boards. Majority of international student are from India, Kenya, Morocco, Egypt Iraq, Ukraine, Iran, Pakistan, Turkmenistan, Azerbaijan, Malaysia etc.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="accordion03">
                                                    <button className="d-flex flex-wrap justify-content-between adyanta-bg-color cur-poin bd-cute" data-bs-toggle="collapse" data-bs-target="#videolist3" aria-expanded="true" aria-controls="videolist3"><span className="cur-poin fnt-big">Volgograd State Medical University</span> </button>
                                                </div>
                                                <div id="videolist3" className="accordion-collapse collapse" aria-labelledby="accordion03" data-bs-parent="#accordionExample">
                                                    <ul className="lab-ul video-item-list">
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight: 600 }}>The Volgograd State Medical University was founded in 1935 and started as Stalingrad Medical Institute. It is listed in The World Directory of Medical Schools WHO list of world medical schools and also in the International Medical education directory provided by FAIMER thus is recognized by MCI India. It has also been collaborating with the World Federation for Medical Education, World Health Organisation (WHO), UNESCO, British Council, United States Agency for International Development.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight: 600 }}>Volgograd State Medical University gained a very high rank among the Russian medical universities. The academic programs are run by 66 departments of the University.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight: 600 }}>The duration of the MBBS Course is of 6 years. Postgraduate courses are of duration three years. After completion of the undergraduate program, students are awarded an MD degree, which is equivalent to MBBS awarded by the Indian colleges.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="accordion04">
                                                    <button className="d-flex flex-wrap justify-content-between adyanta-bg-color cur-poin bd-cute" data-bs-toggle="collapse" data-bs-target="#videolist4" aria-expanded="true" aria-controls="videolist4"> <span className="cur-poin fnt-big">Mari State Medical University</span> </button>
                                                </div>
                                                <div id="videolist4" className="accordion-collapse collapse" aria-labelledby="accordion04" data-bs-parent="#accordionExample">
                                                    <ul className="lab-ul video-item-list">
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight: 600 }}>Mari State University is awarded the gold medal —European Quality: 100 Best Universities of the Russian Federation, 2009— recognizing its quality medical education.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight: 600 }}>The University marked its presence in 1972 in Yoshkar-Ola. MarSU is known for its world-class medical education at the most affordable cost, due to which it is counted among the Top Medical Universities of Russia. MBBS from Mari State University is globally recognized by major councils of the world such as Medical Council of India (MCI) and enlisted with World Directory of Medical Schools (WDOMS). MarSU provides all the required privileges to the international students coming from various countries of the globe.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight: 600 }}>The course duration of MBBS in Mari State University, Russia is approximately 6 years. During these years, the students are not only trained in the regards of the academics but also are enriched with required personal and professional skills for their future role.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="accordion05">
                                                    <button className="d-flex flex-wrap justify-content-between adyanta-bg-color cur-poin bd-cute" data-bs-toggle="collapse" data-bs-target="#videolist5" aria-expanded="true" aria-controls="videolist5"><span className="cur-poin fnt-big">Orenberg State Medical University</span> </button>
                                                </div>
                                                <div id="videolist5" className="accordion-collapse collapse" aria-labelledby="accordion05" data-bs-parent="#accordionExample">
                                                    <ul className="lab-ul video-item-list">
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight: 600 }}>Established in 1944, Orenburg State Medical University (OrSMU) is one of the oldest, most regarded, and globally recognized medical universities in Russia. OrSMU offers MBBS Program to medical aspirants from Russia as well as from other countries worldwide, and its medical qualification is recognized globally.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight: 600 }}>Orenburg State Medical University strives to provide the best medical education to its students to prepare them to take up the challenges in the future so that when medical students graduate from this university, they have the potential to handle the responsibilities of the medicine field.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight: 600 }}>At present, 1200+ Indian students are studying MBBS at Orenburg State Medical University.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="accordion06">
                                                    <button className="d-flex flex-wrap justify-content-between adyanta-bg-color cur-poin bd-cute" data-bs-toggle="collapse" data-bs-target="#videolist6" aria-expanded="true" aria-controls="videolist6"> <span className="cur-poin fnt-big">Perm State Medical University</span> </button>
                                                </div>
                                                <div id="videolist6" className="accordion-collapse collapse" aria-labelledby="accordion06" data-bs-parent="#accordionExample">
                                                    <ul className="lab-ul video-item-list">
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight: 600 }}>Founded in 1916 and located in the Perm City of Russia, Perm State Medical University is one of the oldest and largest universities of Russia.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight: 600 }}>Perm State Medical University is integrated with academic institutions of the Ural Branch of the Russian Academy of Sciences and different higher schools of Russia and Perm.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight: 600 }}>Perm State Medical University is nationally and internationally recognized by various organizations of international reputation such as National Medical Commission; Medical Council of Canada; Ministry of Science and Higher Education, Russia. World Directory of Medical Schools; Education Commission for Foreign Medical Graduates; Registered with Foundation for Advancement of International Medical Education and Research (FAIMER).</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="accordion07">
                                                    <button className="d-flex flex-wrap justify-content-between adyanta-bg-color cur-poin bd-cute" data-bs-toggle="collapse" data-bs-target="#videolist7" aria-expanded="true" aria-controls="videolist7"> <span className="cur-poin fnt-big">Bashkir State Medical University</span> </button>
                                                </div>
                                                <div id="videolist7" className="accordion-collapse collapse" aria-labelledby="accordion07" data-bs-parent="#accordionExample">
                                                    <ul className="lab-ul video-item-list">
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight: 600 }}>Bashkir State Medical University is one of the largest medico-scientific centers in Ufa, Russian Federation. Bashkir State Medical University is an educational institution that has been training students since 1932.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight: 600 }}>Bashkir State Medical University has been licensed by the Ministry of Education of the Russian Federation to train international students.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px', fontWeight: 600 }}>The Bashkir State Medical University collaborates with the World Health Organization (WHO), and recognized by the Medical Council of India (MCI) India, (MMC) Malaysia, GMC UK, and others many countries.</div>
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

export default UniversityFive;