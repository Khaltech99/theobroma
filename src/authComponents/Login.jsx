import AuthButton from "./AuthButton";

const Login = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 md:w-[452px] md:m-auto">
        <img src="/icons/LOGO.png" alt="" className="" />
        <div className="w-full flex flex-col gap-4 justify-center">
          <h1 className="capitalize text-center text-[#493B2E] leading-[28px]">
            securely login to your account
          </h1>
          <div>
            <label htmlFor="Email" className="text-input capitalize">
              Email
            </label>
            <div className="flex gap-2 text-sm rounded-sm h-[44px] border p-2 border-input mt-1 ">
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
            <label htmlFor="password" className="text-input capitalize">
              password
            </label>
            <div className="flex gap-2 text-sm rounded-sm h-[44px] border p-2 border-input mt-1 ">
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
          <h2 className="text-right capitalize text-input text-sm leading-[20px]">
            forgot password
          </h2>
          <AuthButton text="create account" />
          <p className="text-center text-sm text-input">
            don`t have an account?{" "}
            <span className="capitalize cursor-pointer">Register</span>
          </p>
          <div className="hidden md:flex justify-between items-center  ">
            <h3 className="text-sm leading-[20px] text-input cursor-pointer">
              go back home
            </h3>
            <h3 className="text-sm leading-[20px] text-input cursor-pointer">
              forgot password
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
