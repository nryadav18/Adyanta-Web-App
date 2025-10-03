
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

const subTitle = "Don't Miss the Day";
const title = "Our Successful Students Says About Us";


const clientList = [
    {
        imgUrl: 'assets/fly-assets/success/scs5.jpg',
        imgAlt: 'education thumb nryadav nryadav',
        desc: 'Thanks to Adyanta, I found the perfect university abroad. Their hostel arrangements and travel support made my experience cool.',
        name: 'Dr. Swathi Choudhari',
        degi: 'Student (Doctor)',
    },
    {
        imgUrl: 'assets/fly-assets/success/scp4.webp',
        imgAlt: 'education thumb nryadav nryadav',
        desc: 'Choosing Adyanta was the best decision I made for my education. Their expertise ensured a seamless transition overseas.',
        name: 'Dr. Zahid Ali Jafri',
        degi: 'Student (Doctor)',
    },
    {
        imgUrl: 'assets/fly-assets/success/scp1.webp',
        imgAlt: 'education thumb nryadav nryadav',
        desc: 'Adyanta`s visa assistance made the daunting process feel manageable. I`m grateful for their unwavering support every step of the way.',
        name: 'Dr. Chandan Kumar',
        degi: 'Student (Doctor)',
    },
    {
        imgUrl: 'assets/fly-assets/success/scp2.webp',
        imgAlt: 'education thumb nryadav nryadav',
        desc: 'Adyanta not only helped me secure admission but also provided ongoing support till the completion of my course. Highly recommend.',
        name: 'Dr. Nagula Sirisha',
        degi: 'Student (Doctor)',
    }
]


const Clients = () => {
    return (
        <div className="clients-section padding-tb">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle" style={{ color : 'white' }}>{subTitle}</span>
                    <h2 className="title" style={{ color : 'white' }}>{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="clients-slider overflow-hidden">
                        <div className="swiper-wrapper">
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={2}
                                loop={'true'}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay]}
                                breakpoints={{
                                    0: {
                                        width: 0,
                                        slidesPerView: 1,
                                    },
                                    768: {
                                        width: 768,
                                        slidesPerView: 2,
                                    },
                                    1200: {
                                        width: 1200,
                                        slidesPerView: 2.8,
                                    },
                                }}
                            >
                                {clientList.map((val, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="client-item" >
                                            <div className="client-inner" style={{ borderRadius : '30px' }}>
                                                <div className="client-thumb">
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                </div>
                                                <div className="client-content">
                                                    <p>{val.desc}</p>
                                                    <div className="client-info">
                                                        <h6 className="client-name">{val.name}</h6>
                                                        <span className="client-degi">{val.degi}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Clients;