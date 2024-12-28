import Objectives from "../../components/Objectives";
import GetInTouch from "../../components/GetInTouch";
import JoinCommunity from "../../components/JoinCommunity";
import LinkNameDisplay from "../../components/LinkNameDisplay";

const AboutusPage = () => {
  return (
    <>
      <LinkNameDisplay
        title="About Us"
        description="At Cocoa World, we're passionate about bringing together cocoa farmers and large consumers to create a sustainable and thriving cocoa industry. We're more than just a 
trading platform; we're a community that's dedicated to making cocoa trading efficient, transparent, and mutually beneficial."
      />
      <div className=" md:max-w-6xl md:mx-auto p-4">
        <Objectives />
        <GetInTouch />
        <JoinCommunity />
      </div>
    </>
  );
};

export default AboutusPage;
