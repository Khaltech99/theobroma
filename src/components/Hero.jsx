import { Link } from "react-router";
import Button from "./Button";
const Hero = () => {
  return (
    <>
      <div className="md:flex justify-center items-center my-12">
        <div>
          <h1 className="text-[36px] mb-6 text-choco leading-[44px] md:text-[57px] md:leading-[64px]">
            Discover the World of Premium Cocoa.
          </h1>
          <p className="text-[16px] mb-6 text-slate-800 md:16px">
            Streamline Your Cocoa Acquisition Process with Trusted Suppliers.
          </p>
          <div className="flex gap-2 mb-12 md:hidden">
            <Link to="auth/signup">
              <Button background={true} text="register" />
            </Link>
            <Link to="auth/login">
              <Button background={false} text="login" />
            </Link>
          </div>
          <div className="hidden justify-start md:flex">
            <Button background={true} text="join waitlist" />
          </div>
        </div>
        <img
          src="/images/hero.png"
          alt=""
          className="w-[100%] md:w-[474px] md:h-[524px]"
        />
      </div>
    </>
  );
};

export default Hero;
