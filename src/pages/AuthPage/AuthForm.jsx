import { useState } from "react";
import AuthButton from "./authComponents/AuthButton";

const AuthForm = () => {
  const [checked, setChecked] = useState(false);
  const handleChecked = () => {
    setChecked(!checked);
  };
  return (
    <>
      <div className="flex gap-5 justify-center items-center md:max-w-6xl md:mx-auto p-4 md:justify-around">
        <div className="h-[828px]">
          <h1 className="text-left text-grey md:hidden">back</h1>
          <div className="mb-5 flex flex-col justify-center items-center gap-4">
            <img src="/icons/LOGO.png" alt="" className="mb-5" />
            <h1 className="text-choco text-[24px] leading-[32px] text-center">
              Begin your journey
            </h1>
            <h2 className="leading-[24px] text-grey text-center">
              This is information would be used to create you account
            </h2>
          </div>
          {/* this is for form */}
          <form className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="text-input">
                Name
              </label>
              <div className="flex gap-2 text-sm rounded-sm h-[44px] border p-2 border-input">
                <img src="" alt="" />
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="outline-none bg-none h-full text-input"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div>
              <label htmlFor="Email" className="text-input">
                Email
              </label>
              <div className="flex gap-2 text-sm rounded-sm h-[44px] border p-2 border-input">
                <img src="" alt="" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="outline-none bg-none h-full text-input"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone number" className="text-input">
                Phone number
              </label>
              <div className="flex gap-2 text-sm rounded-sm h-[44px] border p-2 border-input">
                <img src="" alt="" />
                <input
                  type="text"
                  name="phone number"
                  id="phone number"
                  className="outline-none bg-none h-full text-input"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone number" className="text-input">
                password
              </label>
              <div className="flex gap-2 text-sm rounded-sm h-[44px] border p-2 border-input">
                <img src="" alt="" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="outline-none bg-none h-full text-input"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <AuthButton text="create account" />

            <div className="flex gap-2 justify-center mb-5">
              {
                <input
                  type="checkbox"
                  // aria-checked={checked}
                  name="agree"
                  id="agree"
                  onChange={handleChecked}
                  checked={checked}
                />
              }
              <span
                onClick={handleChecked}
                className="cursor-pointer text-grey"
              >
                By signing up, you agree to our
                <b className="text-grey font-semibold ">
                  Terms & Privacy Policy
                </b>
              </span>
            </div>
          </form>
          <h3 className="text-sm text-grey leading-[20px] text-center">
            Already have an account?
            <b className="text-grey text-center font-semibold">Log in</b>
          </h3>
        </div>
        <img
          src="/images/hero.png"
          alt=""
          className="hidden md:block md:h-[524px] md:w-[474px]"
        />
      </div>
    </>
  );
};

export default AuthForm;
