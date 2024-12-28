import Hero from "../../components/Hero";
import Who from "../../components/Who";
import Services from "../../components/Services";
import OurCocoa from "../../components/OurCocoa";
import ChoosePlan from "../../components/ChoosePlan";
import WeCare from "../../components/WeCare";
import Subscriptions from "../../components/Subscriptions";
import Review from "../../components/Review";
import ContactUs from "../../components/ContactUs";
import GetStarted from "../../components/GetStarted";

const HomePage = () => {
  return (
    <>
      <div className=" md:max-w-6xl md:mx-auto ">
        <Hero />
        <Who />
        <Services />
        <OurCocoa />
        <ChoosePlan />
        <Subscriptions />
        <WeCare />
        <Review />
        <ContactUs />
        <GetStarted />
      </div>
    </>
  );
};

export default HomePage;
