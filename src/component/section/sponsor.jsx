
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';


const sponsorList = [
    {
        imgUrl: 'assets/fly-assets/partners/partner1.webp',
        imgAlt: 'fly-assets nryadav nryadav',
    },
    {
        imgUrl: 'assets/fly-assets/partners/partner2.png',
        imgAlt: 'fly-assets nryadav nryadav',
    },
    {
        imgUrl: 'assets/fly-assets/partners/partner3.png',
        imgAlt: 'fly-assets nryadav nryadav',
    },
    {
        imgUrl: 'assets/fly-assets/partners/partner4.svg',
        imgAlt: 'fly-assets nryadav nryadav',
    },
    {
        imgUrl: 'assets/fly-assets/partners/partner5.png',
        imgAlt: 'fly-assets nryadav nryadav',
    },
    {
        imgUrl: 'assets/fly-assets/partners/partner6.png',
        imgAlt: 'fly-assets nryadav nryadav',
    },
]


const Sponsor = () => {
    return (
        <div className="sponsor-section section-bg" >
            <div className="container">
                <div className="section-wrapper">
                    <div className="sponsor-slider">
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
                                    slidesPerView: 3,
                                },
                                1200: {
                                    width: 1200,
                                    slidesPerView: 5.5,
                                },
                            }}
                        >
                            {sponsorList.map((val, i) => (
                                <SwiperSlide key={i}>
                                    <div className="sponsor-iten" style={{ maxWidth: '90%' }}>
                                        <div className="sponsor-thumb" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} style={{ height: '80px', maxWidth: '100%' }} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sponsor;