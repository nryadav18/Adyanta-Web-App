import { Fragment } from "react";
import Footer from "../component/layout/footer";
import AchievementTwo from "../component/section/achievement-2";
import BannerTwo from "../component/section/banner-2";
import Instructor from "../component/section/instructor";
import Skill from "../component/section/skill";
import HeaderNew from "../component/layout/header-new";

const HomeTwo = () => {
    return (
        <Fragment>
            <HeaderNew />
            <BannerTwo />
            <Instructor />
            <Skill />
            <AchievementTwo />
            <Footer />
        </Fragment>
    );
}
 
export default HomeTwo;