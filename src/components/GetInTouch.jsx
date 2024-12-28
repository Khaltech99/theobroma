import Button from "./Button";
const GetInTouch = () => {
  return (
    <>
      <div className="md:hidden flex flex-col justify-center items-center bg-[#F6F6F6] rounded-md h-[280px] p-3 mb-3">
        <img src="/images/IMGs.png" alt="" />
        <h1 className="text-choco capitalize font-semibold text-[22px] mt-2">
          still have questions
        </h1>
        <p className="text-grey capitalize text-center text-sm leading-[20px]">
          Need Clarity or wanna make Inquiry?
          <br />
          Connect with Our Dedicated Team of Experts.
        </p>
        <div className="text-xs mt-4">
          <Button background={true} text="get in touch" />
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
