import React, { useState, useEffect } from "react";
import Windmill from "../Images/aboutuswindmill.jpg";
import Kahe from "../Images/kahe.jpg";
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import the AOS CSS file for styling

const Aboutus = () => {
  const [selectedTab, setSelectedTab] = useState("Electrical Department");

  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);

  return (
    <div className="mx-4 md:mx-24 " data-aos="fade-up">
      <br />
      <nav>
        <ul className="flex justify-center text-2xl">
          <li
            onClick={() => setSelectedTab("Electrical Department")}
            className={`hover:border-b-teal-500 cursor-pointer ${
              selectedTab === "Electrical Department" ? "border-b-teal-500" : ""
            }`}
            data-aos="fade-right"
          >
            Electrical Department
          </li>
        </ul>
      </nav>
      <br />
      <section
        className="flex flex-col bg-white rounded-lg md:flex-row h-auto md:h-96 p-4 md:p-6 group hover:shadow-2xl transition duration-300"
        data-aos="fade-up"
      >
        <div className="relative w-full md:w-1/2" data-aos="fade-left">
          <img
            src={selectedTab === "Electrical Department" ? Windmill : Kahe}
            alt="Image"
            className="w-full h-auto md:h-full object-cover rounded-t-lg"
          />
        </div>
        <div className="p-4 flex-1" data-aos="fade-up">
          <h6 style={{ whiteSpace: "pre-wrap" }}>
            {" "}
            The Department of Electrical and Electronics Engineering offers
            Bachelor of Engineering in Electrical and Electronics Engineering
            and Master of Engineering in Power Systems Engineering Research
            programmes: Ph.D. in Electrical and Electronics Engineering. The
            specializations of the department are Energy Auditing and survey
            management, Power Systems, High Voltage Engineering, Power
            Electronics and Drives, Control and Instrumentation, Embedded System
            Technology, Electric Drives and Embedded Control. The Department has
            well-equipped Machines, Power Analyzer, Power Electronics and Power
            System Laboratories and a team of dedicated faculty members who have
            experience in the Industry as well as Academic.
          </h6>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Aboutus;
