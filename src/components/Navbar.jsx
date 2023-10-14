import React from "react";
import kahe from "../Images/LOGO-with-different-colors-03.png";

const Navbar = () => {
  const menuItems = [
    "Home",
    "About",
    "Our Services",
    "Our Works",
    "Faculties",
    "Contact",
  ];

  return (
    <div className="bg-green-200">
      <nav>
        <div className="flex justify-around">
          <img src={kahe} alt="kahe" width={200} />
          <ul className="flex items-center ml-10">
            {menuItems.map((item, index) => (
              <li key={index} className={index !== 0 ? "ml-7" : ""}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
