import { Link } from "react-router";
import Button from "./Button";

const ErrorPage = () => {
  return (
    <>
      <div className="flex flex-col gap-2 md:max-w-6xl md:mx-auto p-4">
        <h1 className="text-sm leading-[20px] text-choco">Error 404</h1>
        <h2 className="text-[32px] leading-[40px] text-[#493B2E]">
          We cannot find that page
        </h2>
        <p className="text-grey leading-[24px]">
          we are sorry, the page you are looking for does not exist or has been
          moved
        </p>
        <div className="flex flex-col md:flex-row gap-4 ">
          <Link to="/">
            <div className="text-center">
              <Button text="take me home" background={true} />
            </div>
          </Link>
          <Link to="/">
            <div className="text-center">
              <Button text="go back" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
