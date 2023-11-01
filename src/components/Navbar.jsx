import React, { useState, useEffect } from "react";
import kahe from "../Images/LOGO-with-different-colors-03.png";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const menuItems = [
    "Home",
    "About",
    "Our Services",
    "Our Works",
    "Faculties",
    "Contact",
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, []);

  return (
    <div className="">
      <nav className="navbar-section bg-green-200">
        <div className="flex justify-around">
          <img src={kahe} alt="kahe" width={200} />
          {isMobile ? (
            <div className="flex items-center">
              <RxHamburgerMenu
                className="mt-6"
                size={25}
                onClick={toggleDropdown}
              />
              {showDropdown && (
                <ul className="mt-6">
                  {menuItems.map((item, index) => (
                    <li
                      key={index}
                      className="cursor-pointer"
                      onClick={toggleDropdown}
                    >
                      {item}
                    </li>
                  ))}
                  <li className="cursor-pointer " onClick={toggleDropdown}>
                  </li>
                  {showDropdown && (
                    <ul className="ml-2">
                      <li>EEE</li>
                      <li>CIVIL</li>
                      <li>CHEMISTRY</li>
                    </ul>
                  )}
                </ul>
              )}
            </div>
          ) : (
            <ul className="flex items-center ml-10">
              {menuItems.map((item, index) => (
                <li key={index} className={index !== 0 ? "ml-10" : ""}>
                  {item}
                </li>
              ))}
              <li className="cursor-pointer" onClick={toggleDropdown}>
              </li>
              {showDropdown && (
                <ul className="ml-2">
                  <li>EEE</li>
                  <li>CIVIL</li>
                  <li>CHEMISTRY</li>
                </ul>
              )}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
