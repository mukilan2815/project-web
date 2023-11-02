import React, { useState, useEffect } from "react";
import civil from '../Images/aboutcivil.jpg'
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import the AOS CSS file for styling

const Aboutus = () => {
  const [selectedTab, setSelectedTab] = useState("Electrical Department");

  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);

  return (
    <div id="civilabout" className="mx-4 md:mx-24 " data-aos="fade-up">
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
            CIVIL Department
          </li>
        </ul>
      </nav>
      <br />
      <section
        className="flex flex-col bg-white rounded-lg md:flex-row h-auto md:h-fit p-4 md:p-6 group hover:shadow-2xl transition duration-300"
        data-aos="fade-up"
      >
        <div className="relative w-full md:w-1/2" data-aos="fade-left">
          <img
            src={civil}
            alt="Image"
            className="w-full h-auto md:h-full object-cover rounded-t-lg"
          />
        </div>
        <div className="p-4 flex-1" data-aos="fade-up">
          <h6 style={{ whiteSpace: "pre-wrap" }}>
            {" "}
            Department of civil engineering under Faculty of Engineering in
            Karpagam Academy of Higher Education, Coimbatore has established a
            full-fledged Consultancy and testing wing since January 2018 and
            experts in this section provide consultancy in the area of
            structural design, guidance related to building construction,
            Planning, documentation etc., Local planning authority Coimbatore
            certified five of our staff members as registered engineers in
            various categories like Structural Design work, Developer, Geo
            Technical Engineering, Registered Engineer and Construction
            Engineer. We have been conducting Geotechnical investigation,
            material and water sample testing works for many of the Smart City
            projects proposed by Coimbatore, Tiruppur city Municipal
            Corporation, Nigilirs Horticulture department and Karur Govt.
            Medical College works. Our Department experts are authorized for
            issuing Third Party Inspection Certificate to town panchayat road
            works of Sulur, Vellalore, Kinathukadavu and Madhukarai.
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
