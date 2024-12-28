const JoinCommunity = () => {
  return (
    <>
      <div className="flex flex-col gap-3 justify-center items-center bg-[#F0EBE7] w-[100%] px-4 py-6 md:hidden">
        <h2 className="text-choco leading-[20px]">Join our community</h2>
        <p className="text-grey leading-[20px] text-center text-sm">
          We invite you to join the Cocoa World community, to build strong
          partnerships and contribute to the growth of the cocoa industry.
        </p>
        <input
          type="email"
          id="email"
          className="outline-none bg-none border-solid border-choco border h-[52px] w-[100%] rounded-sm focus:border-2  px-2"
          placeholder="enter your email"
        />
        <input
          type="button"
          value="join our community"
          className="px-6 py-2 bg-choco text-center text-white capitalize text-sm w-[100%]"
        />
      </div>
    </>
  );
};

export default JoinCommunity;
