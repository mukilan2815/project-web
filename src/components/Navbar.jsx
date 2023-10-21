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

  // Function to handle screen size changes
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // Add event listener to check screen size on load and resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    return () => {
      // Remove event listeners when the component unmounts
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, []);

  return (
    <div className="bg-green-200">
      <nav className="navbar-section">
        {" "}
        {/* Add a CSS class for styling */}
        <div className="flex justify-around">
          <img src={kahe} alt="kahe" width={200} />
          {isMobile ? (
            // Display RxHamburgerMenu for mobile view
            <RxHamburgerMenu className="mt-6" size={25} />
          ) : (
            // Display the menu items for larger screens
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
