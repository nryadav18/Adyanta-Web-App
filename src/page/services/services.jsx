import { Component, Fragment } from "react";
import Footer from "../../component/layout/footer";
import HeaderNew from "../../component/layout/header-new";
import ServicesPageHeader from "../../component/services/servicesPageHeader";
import UniversityOneAuthor from "../../component/sidebar/medical/uni-one-author";
import UniversityOneComment from "../../component/sidebar/medical/uni-one-comments";
import UniversityCommonSideBarOne from "../../component/sidebar/medical/uni-com-sidebar";


const AdyantaServices = () => {
    return (
        <Fragment>
            <HeaderNew />
            <ServicesPageHeader />
            <div className="course-single-section padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="main-part">
                                <div className="course-item">
                                    <div className="course-inner">
                                        <div className="course-content">
                                            <h3>Adyanta Educational Consultants</h3>
                                            <p>Adyanta Educational Consultants is a leading consultancy firm based in India, specializing in helping students pursue their dreams of studying abroad. With a focus on medical education, Adyanta provides comprehensive services to students seeking admission to top medical universities in countries like Kyrgyzstan, Russia, Ukraine, and more.</p>
                                            <p>The consultancy is known for its personalized approach, guiding students through every step of the admission process, from selecting the right university to preparing for departure. Adyanta's team of experienced counselors offers valuable insights and support, ensuring that students make informed decisions about their education and future careers.</p>
                                            <p>Adyanta Educational Consultants is committed to providing high-quality services and maintaining strong relationships with partner universities. This enables the consultancy to offer students exclusive opportunities and resources, making their study abroad experience as smooth and successful as possible.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="course-item">
                                    <div className="course-inner">
                                        <div className="course-content">
                                            <h4>How can Adyanta Educational Consultants help me pursue my dream of studying medicine abroad?</h4>
                                            <ul className="lab-ul">
                                                <li style={{ fontSize: '20px', fontWeight: 500 }}><i className="icofont-tick-mark"></i>Adyanta Educational Consultants specializes in guiding aspiring medical professionals through every step of the process, from selecting the right university to assisting with admissions and visa procedures. Our experienced team is dedicated to providing personalized support and resources to help you achieve your academic goals.</li>
                                            </ul>
                                            <h4>What countries and universities does Adyanta Educational Consultants work with?</h4>
                                            <ul className="lab-ul">
                                                <li style={{ fontSize: '20px', fontWeight: 500 }}><i className="icofont-tick-mark"></i>Adyanta Educational Consultants works with top universities across various countries known for their excellence in medical education. We aim to place students in prestigious institutions that offer quality education and global recognition in the field of medicine.</li>
                                            </ul>
                                            <h4>What support services does Adyanta Educational Consultants offer during the application process?</h4>
                                            <ul className="lab-ul">
                                                <li style={{ fontSize: '20px', fontWeight: 500 }}><i className="icofont-tick-mark"></i>Adyanta Educational Consultants offers comprehensive support services, including personalized counseling, assistance with application and document submission, visa guidance, and travel arrangements. Our team is committed to ensuring a seamless and hassle-free experience for students throughout the application process.</li>
                                            </ul>
                                            <h4>Does Adyanta Educational Consultants provide assistance with accommodation and other amenities abroad?</h4>
                                            <ul className="lab-ul">
                                                <li style={{ fontSize: '20px', fontWeight: 500 }}><i className="icofont-tick-mark"></i>Yes, Adyanta Educational Consultants ensures that students have access to comfortable accommodation options by connecting universities with hostel facilities. Additionally, we provide guidance on various amenities and resources available in the host country to help students adapt and thrive in their new environment.</li>
                                            </ul>
                                            <h4>What ongoing support does Adyanta Educational Consultants offer after students enroll in a medical program abroad?</h4>
                                            <ul className="lab-ul">
                                                <li style={{ fontSize: '20px', fontWeight: 500 }}><i className="icofont-tick-mark"></i>Adyanta Educational Consultants remains dedicated to students throughout their academic journey, offering ongoing support and guidance from the date of enrollment to the completion of the course. Our team provides assistance with academic planning, career guidance, and any other challenges students may encounter during their studies abroad.</li>
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
                                                    <button className="d-flex flex-wrap justify-content-between adyanta-bg-color cur-poin bd-cute"
                                                        data-bs-toggle="collapse" data-bs-target="#videolist1" aria-expanded="true"
                                                        aria-controls="videolist1"><span className="cur-poin">Admissions</span> </button>
                                                </div>
                                                <div id="videolist1" className="accordion-collapse collapse" aria-labelledby="accordion01" data-bs-parent="#accordionExample">
                                                    <ul className="lab-ul video-item-list">
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px' }}>At Adyanta, our team brings over 12 years of collective experience, comprising professional doctors and engineers committed to personalized counseling for each applicant. We understand that embarking on a journey of higher education abroad can be daunting, which is why our experts are dedicated to providing comprehensive guidance and support throughout the admissions process.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px' }}>From assisting with application requirements to offering insights into suitable programs, we ensure that every student feels confident and well-prepared for enrollment.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="accordion02">
                                                    <button className="d-flex flex-wrap justify-content-between adyanta-bg-color cur-poin bd-cute"
                                                        data-bs-toggle="collapse" data-bs-target="#videolist2" aria-expanded="true" aria-controls="videolist2">
                                                        <span className="cur-poin">Choice of University</span> </button>
                                                </div>
                                                <div id="videolist2" className="accordion-collapse collapse" aria-labelledby="accordion02" data-bs-parent="#accordionExample">
                                                    <ul className="lab-ul video-item-list">
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px' }}>Every country boasts top-tier universities, and at Adyanta, our professionals are dedicated to helping students find the perfect fit for their academic aspirations. With meticulous research and personalized consultations, we guide students in selecting universities renowned for their excellence in their chosen field of study.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px' }}>Whether it’s a prestigious institution in the United States or a renowned medical school in Europe, we strive to place students in their preferred universities across the globe, ensuring access to world-class education and opportunities.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="accordion03">
                                                    <button className="d-flex flex-wrap justify-content-between adyanta-bg-color cur-poin bd-cute"
                                                        data-bs-toggle="collapse" data-bs-target="#videolist3" aria-expanded="true"
                                                        aria-controls="videolist3"><span className="cur-poin">Visa Guidance</span> </button>
                                                </div>
                                                <div id="videolist3" className="accordion-collapse collapse" aria-labelledby="accordion03" data-bs-parent="#accordionExample">
                                                    <ul className="lab-ul video-item-list">
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px' }}>Navigating the visa application process can be complex, but at Adyanta, our expert team simplifies the journey for students. From the initial submission of passports to securing visas, we handle the entire process with efficiency and expertise.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px' }}>Our dedicated visa guidance ensures that students have the necessary documentation and support to navigate immigration requirements seamlessly, allowing them to focus on their academic journey with peace of mind and confidence in their legal status abroad.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="accordion04">
                                                    <button className="d-flex flex-wrap justify-content-between adyanta-bg-color cur-poin bd-cute"
                                                        data-bs-toggle="collapse" data-bs-target="#videolist4" aria-expanded="true" aria-controls="videolist4">
                                                        <span className="cur-poin">Hostel Facility</span> </button>
                                                </div>
                                                <div id="videolist4" className="accordion-collapse collapse" aria-labelledby="accordion04" data-bs-parent="#accordionExample">
                                                    <ul className="lab-ul video-item-list">
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px' }}>At Adyanta, we understand the importance of comfortable accommodation for students studying abroad. That’s why we ensure that universities affiliated with our institution offer access to quality hostel facilities.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px' }}>From shared dormitories to private rooms, students can choose accommodation options that suit their preferences and budget, providing a safe and convenient living environment conducive to their academic success.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="accordion05">
                                                    <button className="d-flex flex-wrap justify-content-between adyanta-bg-color cur-poin bd-cute"
                                                        data-bs-toggle="collapse" data-bs-target="#videolist5" aria-expanded="true"
                                                        aria-controls="videolist5"><span className="cur-poin">Travel Support</span> </button>
                                                </div>
                                                <div id="videolist5" className="accordion-collapse collapse" aria-labelledby="accordion05" data-bs-parent="#accordionExample">
                                                    <ul className="lab-ul video-item-list">
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px' }}>From the moment students depart from India to their arrival at selected universities worldwide, Adyanta provides comprehensive travel support services. Our team accompanies students every step of the way, offering assistance with airport pickups, transportation, and registration processes upon arrival.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px' }}>We understand the importance of a smooth transition to a new country, and our dedicated travel support ensures that students feel supported and confident as they embark on their academic journey abroad.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="accordion06">
                                                    <button className="d-flex flex-wrap justify-content-between adyanta-bg-color cur-poin bd-cute"
                                                        data-bs-toggle="collapse" data-bs-target="#videolist6" aria-expanded="true" aria-controls="videolist6">
                                                        <span className="cur-poin">Completion of Course</span> </button>
                                                </div>
                                                <div id="videolist6" className="accordion-collapse collapse" aria-labelledby="accordion06" data-bs-parent="#accordionExample">
                                                    <ul className="lab-ul video-item-list">
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px' }}>At Adyanta, our commitment to student success extends beyond enrollment to the completion of their course. Regardless of the university they attend, we remain dedicated to supporting students throughout their academic journey.</div>
                                                            {/* <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div> */}
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title" style={{ fontSize: '18px' }}>From providing academic guidance and resources to offering career counseling and support services, we ensure that students have the necessary support to thrive and succeed in their chosen field. With Adyanta by their side, students can confidently navigate the challenges of higher education abroad and emerge as competent and confident professionals ready to make a positive impact in the world.</div>
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

export default AdyantaServices;