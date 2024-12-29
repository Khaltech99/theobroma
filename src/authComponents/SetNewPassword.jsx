import AuthButton from "./AuthButton";

const SetNewPassword = () => {
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
            set new password
          </h1>
          <p className="leading-[24px] text-grey md:hidden text-center">
            your new password mus be different from previously used passwords
          </p>
        </div>

        <div className="">
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="password" className="text-input capitalize">
                password
              </label>
              <div className="flex items-center justify-between gap-2 text-sm rounded-sm h-[44px] border  border-input px-4 mt-2 ">
                <img
                  src="/icons/lock.svg"
                  alt=""
                  className="w-[20px] h-[20px]"
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="outline-none bg-transparent w-full h-full text-input "
                  placeholder="Enter your password"
                />
                <img src="/icons/visibility.svg" alt="" className="basis-1" />
              </div>
            </div>
            <div>
              <label htmlFor="reset password" className="text-input capitalize">
                reset password
              </label>
              <div className="flex items-center justify-between gap-2 text-sm rounded-sm h-[44px] border  border-input px-4 mt-2 ">
                <img
                  src="/icons/lock.svg"
                  alt=""
                  className="w-[20px] h-[20px]"
                />
                <input
                  type="reset password"
                  name="reset password"
                  id="reset password"
                  className="outline-none bg-transparent w-full h-full text-input "
                  placeholder="Re-enter password"
                />
                <img src="/icons/visibility.svg" alt="" className="basis-1" />
              </div>
            </div>
            <div className="flex gap-2">
              <img src="/icons/check_circle.svg" alt="" />
              <p className="text-sm leading-[20px]">
                Must be at least 8 characters
              </p>
            </div>
            <div className="flex gap-2">
              <img src="/icons/check_circle.svg" alt="" />
              <p className="text-sm leading-[20px]">
                Must contain one special character
              </p>
            </div>
            <AuthButton text="Reset Password" />
            <h3 className="text-sm leading-[20px] text-center text-grey capitalize md:hidden">
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

export default SetNewPassword;
