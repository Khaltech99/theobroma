import GetInTouch from "../../components/GetInTouch";
import JoinCommunity from "../../components/JoinCommunity";
import LinkNameDisplay from "../../components/LinkNameDisplay";
import OurCocoa from "../../components/OurCocoa";

const OurCocoaPage = () => {
  return (
    <>
      <LinkNameDisplay
        title="Our Cocoa"
        description="Unveiling the Secrets of Our Cocoa"
      />
      <div className="p-4">
        <OurCocoa />
        <GetInTouch />
        <JoinCommunity />
      </div>
    </>
  );
};

export default OurCocoaPage;
