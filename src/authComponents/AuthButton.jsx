import PropTypes from "prop-types";

const AuthButton = ({ text }) => {
  return (
    <>
      <input
        type="submit"
        value={text}
        className="bg-choco text-white text-sm leading-[20px] w-full text-center py-2 px-6 rounded-sm capitalize"
      />
    </>
  );
};

AuthButton.propTypes = {
  text: PropTypes.string,
};
export default AuthButton;
