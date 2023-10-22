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

    const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
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
    <div className="bg-green-200">
      <nav className="navbar-section">
        {" "}
        <div className="flex justify-around">
          <img src={kahe} alt="kahe" width={200} />
          {isMobile ? (
            <RxHamburgerMenu className="mt-6" size={25} />
          ) : (
            <ul className="flex items-center ml-10">
              {menuItems.map((item, index) => (
                <li key={index} className={index !== 0 ? "ml-10" : ""}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
      
    </div>
  );
};

export default Navbar;
