import Button from "./Button";
const GetStarted = () => {
  return (
    <>
      <div className="hidden md:flex flex-col justify-center items-center gap-2 ">
        <h1 className="text-choco text-center capitalize text-[32px] leading-[40px]">
          get started for free
        </h1>
        <p className="text-grey capitalize leading-[24px] text-center">
          streamline your cocoa acquisition process with trusted suppleirs{" "}
        </p>
        <Button background={true} text="Join the waitlist" />
      </div>
    </>
  );
};

export default GetStarted;
