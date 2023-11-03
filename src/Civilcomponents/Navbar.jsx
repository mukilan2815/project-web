import React, { useState, useEffect } from "react";
import kahe from "../Images/LOGO-with-different-colors-03.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdArrowDropDown } from "react-icons/md";
import Civil from "../Civil"; // Import the Civil component
import App from "../App"; // Import the App component

const Navbar = () => {
  const menuItems = ["Home", "About", "Our Services", "Our Works", "Faculties", "Contact"];
  const departments = ["EEE", "Civil", "Chemistry"];

  const [isMobile, setIsMobile] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedDept, setSelectedDept] = useState(null);

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

  const handleDepartmentClick = (dept) => {
    setSelectedDept(dept);
    toggleDropdown();
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
    <div className="relative z-40">
      {selectedDept !== "Civil" && selectedDept !== "EEE" && (
        <nav className="navbar-section bg-blue-300">
          <div className="flex justify-around relative">
            <img src={kahe} alt="kahe" width={200} />
            {isMobile ? (
              <div className="flex items-center relative">
                <RxHamburgerMenu
                  className="mt-6"
                  size={25}
                  onClick={toggleDropdown}
                />
                {showDropdown && (
                  <ul className="mt-6 relative">
                    {menuItems.map((item, index) => (
                      <li
                        key={index}
                        className="cursor-pointer"
                        onClick={toggleDropdown}
                      >
                        {item}
                      </li>
                    ))}
                    <li className="cursor-pointer relative">
                      Department
                      {showDropdown && (
                        <ul className="absolute bg-blue-200 p-2 rounded-lg shadow-md">
                          {departments.map((dept, index) => (
                            <li
                              key={index}
                              className={`relative font-bold m-1 ${selectedDept === dept
                                  ? "text-white bg-blue-500"
                                  : "text-black"
                                }`}
                              onClick={() => handleDepartmentClick(dept)}
                            >
                              {dept}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <ul className="flex items-center ml-10 relative">
                {menuItems.map((item, index) => (
                  <li key={index} className={index !== 0 ? "ml-10" : ""}>
                    <a href="#" onClick={toggleDropdown}>
                      {item}
                    </a>
                  </li>
                ))}
                <li
                  className="flex select-none items-center ml-10 cursor-pointer relative bg-blue-600 p-3 rounded-xl"
                  onClick={toggleDropdown}
                >
                  Department <MdArrowDropDown size={20} />
                  {showDropdown && (
                    <ul className="absolute mt-40 z-10 bg-blue-200 p-2 rounded-lg shadow-lg">
                      {departments.map((dept, index) => (
                        <li
                          key={index}
                          className={`relative font-bold select-none m-1 ${selectedDept === dept
                              ? "text-white bg-blue-500 w-full"
                              : "text-black"
                            }`}
                          onClick={() => handleDepartmentClick(dept)}
                        >
                          {dept}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </div>
        </nav>
      )}
      {selectedDept === "Civil" && <Civil id="civil" />}
      {selectedDept === "EEE" && <App />}
    </div>
  );
}
export default Navbar;