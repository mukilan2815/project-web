import React, { useState } from "react";
import img1 from "../Images/vaigundamoorthihod.png";
import img2 from "../Images/balachandran.png";
import img3 from "../Images/sivaramkumar.png";
import img4 from "../Images/nagaveni.png";
import img5 from "../Images/selvaganapathi.png";
import { IoIosClose } from "react-icons/io";

const Faculties = () => {
  const facultyData = [
    {
      name: "Dr. M. Vaigundamoorthi",
      position: "Associate Professor",
      department: "Department of Electrical and Electronics Engineering",
      location: "Kahe",
      email: "bacyavaigo2000@gmail.com",
      orchidId: "0000-0002-4805-7802",
      scopusId: "24605735500",
      phone: "9445898955",
      image: img1,
      paragraph:
        "He received his B.E- Electrical & Electronics Engg  degree from Madurai Kamaraj University during the year 2002. He received his Master of Engineering degree and Ph.D. Degree  in the area of Power electronics DC-DC converter  for solar PV  from College of Engineering Guindy Anna University, Chennai, India in 2007 &2013 respectively. He is having 20 years of teaching experience and has published 10 research articles in reputed international journals and 4 patents. His area of interest includes Power Electronics for Renewable Energy System, controller design, Nonlinear dynamics analysis in solar PV system",
    },
    {
      name: "Dr. Balachander Kalappan",
      position: "Assistant Professor",
      department: "Department of Electrical and Electronics Engineering",
      location: "Kahe",
      image: img2,
      paragraph:
        "received the Diploma in Electrical and ElectronicsEngineering from PSG Polytechnic, Coimbatore in 1993 and Bachelordegree in Electrical and Electronics Engineering from Coimbatore Instituteof Technology, Coimbatore in 2001. He acquired Master of Engineering in VLSI Design from Anna University Coimbatore in 2009, PG Diploma in Electrical Energy Management and Auditing from Annamalai University, Chidambaram in 2015 and doctorate in Electrical and Electronics Engineering from Karpagam Academy of Higher Education, Karpagam University, Coimbatore in 2017. He is working as an Associate Professor in Department of Electrical and Electronics Engineering, Faculty of Engineering, Karpagam Academy of Higher Education, India. He has totally around 18 years of teaching experience and 7 years of industry experience. He has published around 110 National and international Journal papers and 35 papers in Conference proceedings. He is a recognized reviewer in many reputed journals like Springer, Inderscience, etc. He is also a member of ISTE, IE (I), IAENG, IRED, IACSIT. His areas of interests are Renewable Energy Optimization, Smart grid and Distributed Generation.",
    },
    {
      name: "Dr.M. Siva Ramkumar",
      position: "Assistant Professor",
      department: "Department of Electrical and Electronics Engineering",
      location: "Kahe",
      image: img3,
      paragraph:
        "was born on December 6, 1989, in Coimbatore, Tamil Nadu, India. completed his B.E Degree in Electrical and Electronics Engineering at Karpagam College of Engineering, Coimbatore, in the year 2011. Then he completed his M.E degree in Power Electronics and Drives at Sri Shakthi Institute of Engineering and Technology, Coimbatore, in the year 2013.  Also Ph.D. in Electrical and Electronics at Karpagam Academy of Higher Education, Karpagam University, Coimbatore in the Year Jan 2019. Since June 2013, he is working as an Assistant Professor in the Department of Electrical and Electronics Engineering at Karpagam Academy of Higher Education, (Karpagam University), Coimbatore. He has produced one Ph.D. Candidate and 4 candidates pursuing Ph.D. under his guidance. He has also supervised over 50 UG and PG projects. the current research area is on Power Converters, dealing with the Design and Analysis of Rectifiers, Chopper, and Inverters. Also, he has expertise in Solar PV and EV Sizing, Design, and Analysis",
    },
    {
      name: "Mrs. P. Nagaveni",
      position: "Assistant Professor",
      department: "Department of Electrical and Electronics Engineering",
      location: "Kahe",
      image: img4,
      paragraph:
        "BEE Certified Energy Manager (Ministry of Power), completed her Diploma in Electrical and Electronics Engineering at Nachimuthu Polytechnic College and her B.E. Degree in Electrical and Electronics Engineering at Hindusthan College of Engineering, Coimbatore, in the year 2011. Then she completed her M.E. degree in Energy Engineering at Kumaraguru College of Engineering and Technology, Coimbatore, in 2013. She is also doing a Ph.D. in Electrical and electronic engineering at Karpagam Academy of Higher Education, Karpagam University, Coimbatore. Since June 2019, she has been working as an Assistant Professor in the Department of Electrical and Electronics Engineering at Karpagam Academy of Higher Education (Karpagam University), Coimbatore. The current research area is on Electrical Energy Audit and Power Quality management. We completed auditing and implemented solutions for M.S.K. Engineering Works, National Model School, Best Heat Treatment Service, etc.",
    },
    {
      name: "T. selvaganapathi",
      position: "Assistant Professor",
      department: "Department of Electrical and Electronics Engineering",
      location: "Kahe",
      image: img5,
      paragraph:
        "M.E power Electronics and Drives, selvaganapathi.thangakaleeswaran@kahedu.edu.in.<br/> Area of Interest: Power Electronics and Drives, Design of Transformer winding",
    },
  ];

  const [activeFaculty, setActiveFaculty] = useState(null);

  const handleReadMoreClick = (facultyIndex) => {
    setActiveFaculty(facultyIndex);
  };

  const handleCloseClick = () => {
    setActiveFaculty(null);
  };

  const handleMouseEnter = (facultyIndex) => {
    setActiveFaculty(facultyIndex);
  };

  return (
    <div className="bg-green-200 rounded-lg flex flex-col py-5">
      <div className="flex justify-center text-3xl font-semibold text-gray-800">
        <h1>Our Faculties</h1>
      </div>
      <div className="p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5 rounded-2xl">
        {facultyData.map((faculty, index) => (
          <div
            key={index}
            className={`relative text-black font-serif shadow-sm`}
            onMouseLeave={() => handleMouseEnter(null)}
          >
            <div className="border-r border-b border-l font-sans border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 hover:shadow-xl transition-all shadow-md bg-white rounded-lg lg:rounded-b-none lg:rounded-r p-4 flex flex-row">
              <div className="w-1/3 sm:w-1/2 md:w-1/3">
                <img
                  src={faculty.image}
                  alt="Faculty Image"
                  className="w-full h-full rounded-t lg:rounded-t-none lg:rounded-l object-cover"
                />
              </div>
              <div className="w-2/3 sm:w-1/2 md:w-2/3 p-4">
                <div className="text-gray-900 font-bold text-lg sm:text-base md:text-lg mb-2">
                  {faculty.name}
                </div>
                <p className="text-gray-700 text-sm sm:text-xs md:text-sm">
                  {faculty.position}
                  <br />
                  <br />
                  {faculty.department}
                  <br />
                  {faculty.location}
                </p>
                <button
                  className="text-gray-900 bg-green-400 p-4 rounded-lg leading-none mt-4 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-green-500"
                  onClick={() => handleReadMoreClick(index)}
                >
                  Read More
                </button>
              </div>
            </div>
            {activeFaculty === index && (
              <div className="fixed inset-0 flex items-center justify-center z-20  font-sans">
                <div className="w-80% bg-white p-6 max-w-screen-lg flex flex-row shadow-2xl rounded-3xl">
                  <div className="relative bottom-4 left-[97%] cursor-pointer">
                    <button
                      className="bg-green-500 text-white font-semibold rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-600 transition duration-300 ease-in-out"
                      onClick={handleCloseClick}
                    >
                      <IoIosClose className="text-xl" />
                    </button>
                  </div>
                  <div className="w-1/2 sm:w-1/2 md:w-1/3">
                    <img
                      src={faculty.image}
                      alt="Faculty Image"
                      className="w-full h-full object-cover rounded-t"
                    />
                  </div>
                  <div className="w-1/2 sm:w-1/2 md:w-2/3 p-4">
                    <p className="text-xs sm:text-xs md:text-sm">
                      {faculty.name}. Working as {faculty.position} in the{" "}
                      {faculty.department}, {faculty.location}. <br />
                      {faculty.paragraph}
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculties;
