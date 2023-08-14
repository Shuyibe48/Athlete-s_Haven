import BannerSection from "../../../components/BannerSection";
import PopularClasses from "../../../components/PopularClasses";
import PopularInstructor from "../../../components/PopularInstructor";
import Slider from "../../../components/Slider";

const Home = () => {
    return (
        <>
            <div className="bg-slate-500">
                <Slider />
                <PopularClasses />
                <BannerSection />
                <PopularInstructor />
            </div>
        </>
    );
};

export default Home;