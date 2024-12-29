const ForgotPasswordOtp = () => {
  return (
    <>
      <div className="flex flex-col justify-between items-center md:w-[408px] md:bg-offWhite md:justify-center md:shadow-sm md:p-8 md:mx-auto md:relative">
        <div className="flex flex-col justify-center items-center md:hidden">
          <div className="border rounded-md border-choco inline-block p-4 mb-6">
            <img src="/icons/mail.svg" alt="" className="  w-[20px] h-[20px]" />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-[24px] leading-[32px] text-choco mb-4">
              Check you mail
            </h1>
            <p className="leading-[24px] text-grey">we sent a reset code to</p>
            <p className="leading-[24px] text-input"> Ahmed13@gmail.com</p>
          </div>
        </div>

        <img
          src="/icons/cancel.svg"
          alt=""
          className="hidden md:block md:absolute md:top-4 md:right-4 cursor-pointer"
        />
        <div className="hidden md:flex md:flex-col md:justify-center md:items-center md:gap-5">
          <h1 className="text-grey text-[22px] leading-[28px] text-center capitalize">
            enter the reset code
            <br /> sent too your mail box
          </h1>
          <img src="/icons/IMG.png" alt="" />
        </div>

        <div className="flex flex-col gap-9 justify-center items-center">
          <div className="group flex gap-5 items-center text-input">
            <input
              type="text"
              name=""
              id=""
              className=" w-[30px] border-b-2 border-input outline-none bg-transparent pb-3 text-[22px] leading-[28px]"
              maxLength={1}
            />
            <input
              type="text"
              name=""
              id=""
              className="w-[30px] border-b-2 border-input outline-none bg-transparent pb-3 text-[22px] leading-[28px]"
              maxLength={1}
            />
            <input
              type="text"
              name=""
              id=""
              className="w-[30px] border-b-2 border-input outline-none bg-transparent pb-3 text-[22px] leading-[28px]"
              maxLength={1}
            />
            <input
              type="text"
              name=""
              id=""
              className="w-[30px] border-b-2 border-input outline-none bg-transparent pb-3 text-[22px] leading-[28px]"
              maxLength={1}
            />
            <input
              type="text"
              name=""
              id=""
              className="w-[30px] border-b-2 border-input outline-none bg-transparent pb-3 text-[22px] leading-[28px]"
              maxLength={1}
            />
            <input
              type="text"
              name=""
              id=""
              className="w-[30px] border-b-2 border-input outline-none bg-transparent pb-3 text-[22px] leading-[28px]"
              maxLength={1}
            />
          </div>
          <p className="text-input">
            Didn`t get the code?{" "}
            <span className="font-semibold capitalize">resend</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordOtp;
