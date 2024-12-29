import AuthButton from "./AuthButton";

const PasswordReset = () => {
  return (
    <>
      <div className="flex flex-col gap-4 md:bg-offWhite md:p-10 md:shadow-md md:w-[452px] md:mx-auto md:rounded-sm">
        <div className="flex flex-col justify-center items-center gap-2 md:gap-7">
          <div className="border rounded-md border-choco inline-block p-4 mb-4 md:hidden">
            <img
              src="/icons/lock-key.svg"
              alt=""
              className="  w-[20px] h-[20px] "
            />
          </div>
          <img
            src="/public/icons/LOGO.png"
            alt=""
            className="hidden md:block"
          />
          <h1 className="text-choco capitalize text-[24px] leading-[32px]">
            reset password
          </h1>
          <p className="leading-[24px] text-grey md:hidden">
            no worries, we will send you reset instructions
          </p>
        </div>

        <div className="">
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="Email" className="text-input">
                Email
              </label>
              <div className="flex gap-2 text-sm rounded-sm h-[44px] border p-2 border-input items-center mt-2">
                <img
                  src="/icons/mail.svg"
                  alt=""
                  className="w-[20px] h-[20px]"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="outline-none bg-none h-full text-input basis-3/4"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <AuthButton text="create account" />
            <h3 className="text-center text-grey capitalize md:hidden">
              back to login
            </h3>
            <div className="hidden md:flex justify-between items-center  capitalize">
              <h3 className="text-sm leading-[20px] text-grey cursor-pointer">
                go back home
              </h3>
              <h3 className="text-sm leading-[20px] text-grey cursor-pointer">
                back to login
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordReset;
