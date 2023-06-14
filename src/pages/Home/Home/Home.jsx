import BannerSection from "../../../components/BannerSection";
import PopularClasses from "../../../components/PopularClasses";
import PopularInstructors from "../../../components/PopularInstractos";
import Slider from "../../../components/Slider";

const Home = () => {
    return (
        <>
            <Slider />
            <PopularClasses />
            <BannerSection />
            <PopularInstructors />
        </>
    );
};

export default Home;