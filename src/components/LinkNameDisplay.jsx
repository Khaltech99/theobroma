import PropTypes from "prop-types";
const LinkNameDisplay = ({ title, description }) => {
  return (
    <>
      <div className="mb-6 flex flex-col bg-ourcocoaimage p-2 px-7 text-center justify-center w-full h-[180px] bg-no-repeat bg-cover bg-center md:h-[400px] md:items-center">
        <h1 className="capitalize text-offWhite text-[28px] leading-[36px]">
          {title}
        </h1>
        <h2 className="text-offWhite capitalize text-sm leading-[20px]">
          {description}
        </h2>
      </div>
    </>
  );
};
LinkNameDisplay.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default LinkNameDisplay;
