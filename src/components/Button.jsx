import PropTypes from "prop-types";
const Button = ({ text, background }) => {
  return (
    <>
      <div
        className={
          background
            ? "bg-choco px-5 py-2 rounded"
            : " border-solid border-choco px-5 py-2 rounded border"
        }
      >
        <p
          className={
            background
              ? "text-white text-base capitalize"
              : "text-choco capitalize text-base"
          }
        >
          {text}
        </p>
      </div>
    </>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
};

export default Button;
