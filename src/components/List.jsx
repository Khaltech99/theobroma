import Button from "./Button";
import PropTypes from "prop-types";

const List = ({ open, handleClose }) => {
  return (
    <>
      <div
        className={
          open
            ? "flex flex-row-reverse justify-between items-start bg-choco text-white text-base absolute w-[300px] right-0 top-0 md:relative md:w-auto md:bg-transparent md:flex-row md:justify-between md:items-center md:m-auto"
            : "hidden flex-row-reverse justify-between items-start bg-choco text-white text-base absolute right-0 top-0 md:relative md:w-auto md:bg-transparent md:flex-row md:justify-between md:items-center md:m-auto"
        }
      >
        <img
          src="/icons/cancel-01.png"
          alt="cancel"
          className="md:hidden cursor-pointer mr-2 my-1"
          onClick={handleClose}
        />
        <ul className="list-none flex flex-col justify-start items-start gap-5 p-5 h-[100vh] capitalize md:flex-row md:p-2 md:h-auto md:text-choco md:whitespace-nowrap md:gap-5">
          <li>About Us</li>
          <li>Our Cocoa</li>
          <li>How It Works</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="hidden md:flex justify-between items-center gap-2">
        <h1>Login</h1>
        <Button />
      </div>
    </>
  );
};

List.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default List;
