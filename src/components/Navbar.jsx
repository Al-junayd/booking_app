import React from "react";

const navbar = " bg-[#003580] h-[50px] flex justify-center ";
const navContainer =
  "w-full max-w-[1024px] text-white flex items-center justify-between";
const logo = "font-medium ";
const navItems = "";
const navButton = "ml-5 py-[5px] px-2.5 text-[#003580] bg-white";

const Navbar = () => {
  return (
    <div className={navbar}>
      <div className={navContainer}>
        <span className={logo}>Easy Trip</span>
        <div className={navItems}>
          <button className={navButton}>Register</button>
          <button className={navButton}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
