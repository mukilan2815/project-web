import React, { useState } from "react";
import img1 from "../Images/balachandran.png";

const Faculties = () => {
  const facultyData = [
    {
      name: "Dr. M. Vaigundamoorthi",
      position: "Professor",
      department: "Department of Electrical and Electronics Engineering",
      location: "Kahe",
      email: "bacyavaigo2000@gmail.com",
      orchidId: "0000-0002-4805-7802",
      scopusId: "24605735500",
      phone: "9445898955",
      image: "faculty1.jpg", // Add the image filename
    },
    {
      name: "Dr. M. Vaigundamoorthi",
      position: "Professor",
      department: "Department of Electrical and Electronics Engineering",
      location: "Kahe",
      email: "bacyavaigo2000@gmail.com",
      orchidId: "0000-0002-4805-7802",
      scopusId: "24605735500",
      phone: "9445898955",
      image: "faculty2.jpg", // Add the image filename
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
      <div className="flex justify-center text-3xl font-semibold text-gray-800 ">
        <h1>Our Faculties</h1>
      </div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5 rounded-2xl">
        {facultyData.map((faculty, index) => (
          <div
            key={index}
            className={`relative  text-black font-serif`}
            onMouseLeave={() => handleMouseEnter(null)}
          >
            <div className="border-r border-b border-l font-sans border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 hover:shadow-xl transition-all shadow-md bg-white rounded-lg lg:rounded-b-none lg:rounded-r p-4 flex flex-row justify-between">
              <div className="w-1/3">
                <img
                  src={faculty.image} // Use the image property
                  alt="Faculty Image"
                  className="w-full h-full rounded-t lg:rounded-t-none lg:rounded-l object-cover"
                />
              </div>
              <div className="w-2/3 p-4">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  {faculty.name}
                </div>
                <p className="text-gray-700 text-base">
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
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="w-70% h-70% bg-white p-6 max-w-screen-lg flex flex-col justify-center items-center">
                  <div
                    className="m-2 p-2 cursor-pointer text-black"
                    onClick={handleCloseClick}
                  >
                    Close
                  </div>
                  <div className="w-1/3">
                    <img
                      src={faculty.image} // Use the image property
                      alt="Faculty Image"
                      className="w-full h-full object-cover rounded-t"
                    />
                  </div>
                  <div className="w-2/3 text-center">
                    <p>
                      {faculty.name}. Working as {faculty.position} in the{" "}
                      {faculty.department}, {faculty.location}. <br />
                      He received his B.E- Electrical & Electronics Engg degree
                      from Madurai Kamaraj University during the year 2002.{" "}
                      <br />
                      He received his Master of Engineering degree (Power
                      Electronics & Drives) and Ph.D. Degree in the area of
                      Power electronics DC-DC converter for solar PV from
                      College of Engineering Guindy Anna University, Chennai,
                      India in 2007 & 2013 respectively. He is having 20 years
                      of teaching experience and has published 10 research
                      articles in reputed international journals and 4 patents.
                      His area of interest includes Power Electronics for
                      Renewable Energy System, controller design, Nonlinear
                      dynamics analysis in solar PV system. <br />
                      Email: {faculty.email}, Orchid ID: {faculty.orchidId}{" "}
                      <br /> Scopus ID: {faculty.scopusId} Ph: {faculty.phone}
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
