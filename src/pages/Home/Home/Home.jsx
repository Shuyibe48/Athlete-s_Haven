import BannerSection from "../../../components/BannerSection";
import PopularClasses from "../../../components/PopularClasses";
import PopularInstructors from "../../../components/PopularInstractos";
import Slider from "../../../components/Slider";

const Home = () => {
    return (
        <>
            <div className="bg-slate-500">
                <Slider />
                <PopularClasses />
                <BannerSection />
                <PopularInstructors />
            </div>
        </>
    );
};

export default Home;