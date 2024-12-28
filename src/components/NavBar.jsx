import { useState } from "react";
import List from "./List";
import { Link } from "react-router";

const NavBar = () => {
  const [open, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className=" flex justify-between items-center bg-white p-4 ">
        <Link to="/">
          <img
            src="/icons/LOGO.png"
            alt=""
            className="cursor-pointer relative md:w-[77px] md:h-[64px]"
          />
        </Link>
        <List open={open} handleClose={handleClose} />
        <img
          src="/icons/menu-08.png"
          alt=""
          className="cursor-pointer md:hidden "
          onClick={handleClick}
        />
      </div>
    </>
  );
};

export default NavBar;
