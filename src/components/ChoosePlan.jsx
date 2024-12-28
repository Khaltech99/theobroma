import Button from "./Button";
const ChoosePlan = () => {
  return (
    <>
      <h2 className="text-choco capitalize text-center text-[28px]">
        choose your plan
      </h2>
      <div className="flex gap-2 justify-center items-center mb-10">
        <p className="text-choco capitalize">To test the for free</p>
        <span className="capitalize underline md:hidden">
          <a href="" className="text-choco">
            click here
          </a>
        </span>
        <div className="hidden md:block">
          <Button background={true} text="click here" />
        </div>
      </div>
    </>
  );
};

export default ChoosePlan;
