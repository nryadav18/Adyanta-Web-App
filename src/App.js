import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import 'swiper/css';

import ScrollToTop from "./component/layout/ScrollToTop";
import ErrorPage from "./page/404";
import AboutPage from "./page/about";
import BlogPage from "./page/blog";
import BlogPageTwo from "./page/blog-2";
import BlogPageThree from "./page/blog-3";
import BlogSingle from "./page/blog-single";
import CartPage from "./page/cart-page";
import ContactPage from "./page/contact";
import CoursePage from "./page/course";
import CourseSingle from "./page/course-single";
import CourseView from "./page/course-view";
import ForgetPass from "./page/forgetpass";
import Home from "./page/home";
import HomeTwo from "./page/home-2";
import HomeThree from "./page/home-3";
import HomeFour from "./page/home-4";
import HomeFive from "./page/home-5";
import HomeSix from "./page/home-6";
import HomeSeven from "./page/home-7";
import InstructorPage from "./page/instructor";
import LoginPage from "./page/login";
import SearchNone from "./page/search-none";
import SearchPage from "./page/search-page";
import ShopPage from "./page/shop";
import ShopDetails from "./page/shop-single";
import SignupPage from "./page/signup";
import TeamPage from "./page/team";
import TeamSingle from "./page/team-single";
import ComingSoonPage from "./page/coming-soon";
import Loader from "./page/loader"; // Import your loader
import AdyantaServices from "./page/services/services";
import UniversityOne from "./page/medical/uni-one";
import UniversityTwo from "./page/medical/uni-two";
import UniversityThree from "./page/medical/uni-three";
import UniversityFour from "./page/medical/uni-four";
import UniversityFive from "./page/medical/uni-five";
import UniversitySix from "./page/medical/uni-six";
import UniversitySeven from "./page/medical/uni-seven";
import MastersCanada from "./page/masters/mas-canada";
import MastersUSA from "./page/masters/mas-usa";
import MastersAustralia from "./page/masters/mas-australia";
import MastersUK from "./page/masters/mas-uk";
import MastersGermany from "./page/masters/mas-germany";
import MastersFrance from "./page/masters/mas-france";
import MastersItaly from "./page/masters/mas-italy";
import MastersSpain from "./page/masters/mas-spain";
import MastersIreland from "./page/masters/mas-ireland";

// Add this CSS to your global CSS file or import it here
// .fade-route-enter { opacity: 0; }
// .fade-route-enter-active { opacity: 1; transition: opacity 500ms; }
// .fade-route-exit { opacity: 1; }
// .fade-route-exit-active { opacity: 0; transition: opacity 500ms; }

function RouteLoaderWrapper({ children }) {
    const location = useLocation();
    const [loading, setLoading] = useState(true); // Start with loading true
    const prevPath = useRef(location.pathname);

    useEffect(() => {
        // Show loader on initial mount and on route change
        setLoading(true);
        prevPath.current = location.pathname;

        const images = Array.from(document.images);
        let loaded = 0;
        let minTimePassed = false;
        let allImagesLoaded = images.length === 0;

        const onLoad = () => {
            loaded += 1;
            if (loaded === images.length) {
                allImagesLoaded = true;
                if (minTimePassed) setLoading(false);
            }
        };

        images.forEach(img => {
            if (img.complete) {
                onLoad();
            } else {
                img.addEventListener("load", onLoad);
                img.addEventListener("error", onLoad);
            }
        });

        const timer = setTimeout(() => {
            minTimePassed = true;
            if (allImagesLoaded || images.length === 0) setLoading(false);
        }, 1000);

        return () => {
            clearTimeout(timer);
            images.forEach(img => {
                img.removeEventListener("load", onLoad);
                img.removeEventListener("error", onLoad);
            });
        };
    }, [location]);

    return (
        <>
            {loading && (
                <div className="loader-overlay">
                    <Loader />
                </div>
            )}
            {!loading && children}
        </>
    );
}

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <SwitchTransition>
            <CSSTransition
                key={location.pathname}
                classNames="fade-route"
                timeout={1000}
                unmountOnExit
            >
                <div>
                    <Routes location={location}>
                        <Route path="/" element={<Home />} />
                        <Route path="coming-soon" element={<ComingSoonPage />} />
                        <Route path="medical" element={<HomeTwo />} />
                        <Route path="avicenna" element={<UniversityOne />} />
                        <Route path="european" element={<UniversityTwo />} />
                        <Route path="georgia" element={<UniversityThree />} />
                        <Route path="uzbekistan" element={<UniversityFour />} />
                        <Route path="russia" element={<UniversityFive />} />
                        <Route path="america" element={<UniversitySix />} />
                        <Route path="kazakhstan" element={<UniversitySeven />} />
                        <Route path="about" element={<AboutPage />} />
                        <Route path="contact" element={<ContactPage />} />
                        <Route path="services" element={<AdyantaServices />} />
                        <Route path="masters-usa" element={<MastersUSA />} />
                        <Route path="masters-canada" element={<MastersCanada />} />
                        <Route path="masters-uk" element={<MastersUK />} />
                        <Route path="masters-australia" element={<MastersAustralia />} />
                        <Route path="masters-germany" element={<MastersGermany />} />
                        <Route path="masters-france" element={<MastersFrance />} />
                        <Route path="masters-italy" element={<MastersItaly />} />
                        <Route path="masters-spain" element={<MastersSpain />} />
                        <Route path="masters-ireland" element={<MastersIreland />} />

                        {/* <Route path="index-2" element={<HomeTwo />} />
                        <Route path="index-3" element={<HomeThree />} />
                        <Route path="index-4" element={<HomeFour />} />
                        <Route path="index-5" element={<HomeFive />} /> 
                        <Route path="index-6" element={<HomeSix />} />
                        <Route path="index-7" element={<HomeSeven />} />
                        <Route path="course" element={<CoursePage />} />
                        <Route path="course-single" element={<CourseSingle />} />
                        <Route path="course-view" element={<CourseView />} />
                        <Route path="blog" element={<BlogPage />} />
                        <Route path="blog-2" element={<BlogPageTwo />} />
                        <Route path="blog-3" element={<BlogPageThree />} />
                        <Route path="blog-single" element={<BlogSingle />} />
                        <Route path="team" element={<TeamPage />} />
                        <Route path="team-single" element={<TeamSingle />} />
                        <Route path="instructor" element={<InstructorPage />} />
                        <Route path="shop" element={<ShopPage />} />
                        <Route path="shop-single" element={<ShopDetails />} />
                        <Route path="cart-page" element={<CartPage />} />
                        <Route path="search-page" element={<SearchPage />} />
                        <Route path="search-none" element={<SearchNone />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route path="signup" element={<SignupPage />} />
                        <Route path="forgetpass" element={<ForgetPass />} /> */}

                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </div>
            </CSSTransition>
        </SwitchTransition>
    );
}

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <RouteLoaderWrapper>
                <AnimatedRoutes />
            </RouteLoaderWrapper>
        </BrowserRouter>
    );
}

export default App;
