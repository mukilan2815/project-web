import React, { useState } from "react";
import img1 from "../Images/balachandran.png";

const Faculties = () => {
  const facultyData = [
    {
      name: "Dr.M. Vaigundamoorthi",
      position: "Professor",
      department: "Department of Electrical and Electronics Engineering",
      location: "Kahe",
    },
    {
      name: "Dr.M. Vaigundamoorthi",
      position: "Professor",
      department: "Department of Electrical and Electronics Engineering",
      location: "Kahe",
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
    <div className="bg-green-200">
      <div className="bg">
        <h1>Our Faculties</h1>
      </div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
        {facultyData.map((faculty, index) => (
          <div
            key={index}
            className={`relative bg-green-500 text-white font-serif`}
            onMouseLeave={() => handleMouseEnter(null)}
          >
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 b bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-row justify-between leading-normal">
              <div className="w-1/3">
                <img
                  src={img1}
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
                  className="text-gray-900 leading-none mt-4"
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
                    className="absolute top-0 right-0 m-2 p-2 cursor-pointer"
                    onClick={handleCloseClick}
                  >
                    Close
                  </div>
                  <div className="w-1/3">
                    <img
                      src={img1}
                      alt="Faculty Image"
                      className="w-full h-full object-cover rounded-t"
                    />
                  </div>
                  <div className="w-2/3 text-center">
                    <p>
                      Dr.M. Vaigundamoorthi. Working as Professor in the
                      department of Electrical and Electronics Engineering,
                      Karpagam Academy of Higher Education, Coimbatore 641021-
                      India. <br />
                      He received his B.E- Electrical & Electronics Engg degree
                      from Madurai Kamaraj University during the year 2002{" "}
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
                      Email: bacyavaigo2000@gmail.com, Orchid ID:
                      0000-0002-4805-7802 <br /> Scopus ID: 24605735500 Ph:
                      9445898955
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
