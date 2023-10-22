import React, { useState } from "react";
import Windmill from "../Images/aboutuswindmill.jpg";
import Kahe from "../Images/kahe.jpg";

const Aboutus = () => {
  const [selectedTab, setSelectedTab] = useState("Karpagam");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="mx-4 md:mx-24">
      <br />
      <nav>
        <ul className="flex justify-center text-2xl">
          <li
            className={`mr-2 cursor-pointer md:mr-10 hover:border-b-teal-500 ${
              selectedTab === "Karpagam" ? "border-b-teal-500" : ""
            }`}
            onClick={() => handleTabChange("Karpagam")}
          >
            Karpagam
          </li>
          <h1 className="mr-2 md:mr-10">|</h1>
          <li
            onClick={() => handleTabChange("Electrical Department")}
            className={`hover:border-b-teal-500 cursor-pointer ${
              selectedTab === "Electrical Department" ? "border-b-teal-500" : ""
            }`}
          >
            Electrical Department
          </li>
        </ul>
      </nav>
      <br />
      <section className="flex flex-col bg-white rounded-lg md:flex-row h-auto md:h-96 p-4 md:p-6 shadow-2xl">
        <div className="relative w-full md:w-1/2">
          <img
            src={selectedTab === "Karpagam" ? Kahe : Windmill}
            alt="Image"
            className="w-full h-auto md:h-full object-cover rounded-t-lg"
          />
        </div>
        <div className="p-4 flex-1">
          <h6>
            {selectedTab === "Karpagam"
              ? "Karpagam Academy of Higher Education (KAHE) established under Section 3 of UGC Act 1956 is approved by Ministry of Human Resource and Development, Government of India. Dr. R. Vasanthakumar, the president of the trust, a philanthropist, industrialist, entrepreneur, and culture promoter. Contemporary infrastructure, modern teaching methodologies, career-oriented training, excellent placements, and the finest faculty have always been Karpagam's hallmark. Besides technical expertise, the University has made a mark for itself since its inception by developing communication and soft skills, ensuring enlightening knowledge, extending holistic education, and creating a strong value system. Today, with a strength of 6000 students and over 750 teaching & non-teaching staff, the Karpagam Academy of Higher Education (KAHE) is setting new benchmarks in the educational sphere."
              : `The Department of Electrical and Electronics Engineering, offers Bachelor of Engineering in Electrical and Electronics Engineering and Master of Engineering in Power Systems Engineering Research programmes: Ph.D. in Electrical and Electronics Engineering. The specializations of the department are Energy Auditing and survey management, Power Systems, High Voltage Engineering, Power Electronics and Drives, Control and Instrumentation, Embedded System Technology, Electric Drives and Embedded Control. The Department has well equipped Machines, Power Analyzer, Power Electronics and Power System Laboratories and a team of dedicated faculty members who have experience in the Industry as well as Academic.`}
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
