import { Link } from "react-router";
import Button from "./Button";
import PropTypes from "prop-types";

const List = ({ open, handleClose }) => {
  return (
    <>
      <div
        className={
          open
            ? "flex flex-row-reverse justify-between items-start bg-choco text-white text-base absolute w-[300px] right-0 top-0 md:relative md:w-auto md:bg-transparent md:flex-row md:justify-between md:items-center md:m-auto"
            : "hidden md:flex flex-row-reverse justify-between items-start bg-choco text-white text-base absolute right-0 top-0 md:relative md:w-auto md:bg-transparent md:flex-row md:justify-between md:items-center md:m-auto"
        }
      >
        <img
          src="/icons/cancel-01.png"
          alt="cancel"
          className="md:hidden cursor-pointer mr-2 my-1"
          onClick={handleClose}
        />
        <ul className="list-none flex flex-col justify-start items-start gap-5 p-5 h-[100vh] capitalize md:flex-row md:p-2 md:h-auto md:text-choco md:whitespace-nowrap md:gap-5">
          <Link to="about">
            <li>About Us</li>
          </Link>
          <Link to="ourcocoa">
            <li>Our Cocoa</li>
          </Link>
          <Link to="howitworks">
            <li>How It Works</li>
          </Link>
          <Link to="contact">
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>
      <div className="hidden md:flex justify-between items-center gap-2 cursor-pointer">
        <Link to="auth/login">
          <h1>Login</h1>
        </Link>
        <Link to="auth/signup">
          <Button text="signup" background="true" />
        </Link>
      </div>
    </>
  );
};

List.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default List;
