import React, { useState } from "react";
import img1 from "../Images/vaigundamoorthihod.png";
import img2 from "../Images/johnpaul.png";
import img3 from "../Images/mam.png";
import img4 from "../Images/natarajan.png";
import img5 from "../Images/balasundaram.png";
import { IoIosClose } from "react-icons/io";

const Faculties = () => {
  const facultyData = [
    {
      name: "Mr. V.Johnpaul",
      position: "Assistant Professor",
      department: "Department of Civil Engineering",
      location: "Kahe",
      image: img2,
      paragraph:"Mr. V. Johnpaul is an Assistant Professor in the Department of Civil Engineering. Born on 24th November 1990, he is currently 29 years old and a male faculty member. Mr. Johnpaul joined the institution on 6th June 2016 and resides at 3/340, Arul Jothi Nagar, Karanampettai. You can reach him at 9952506549 or through his email at Johnpaul.v@kahedu.edu.in.His academic qualifications include a B.Tech., M.E., and a Ph.D. degree. Mr. Johnpaul holds 4 years of teaching experience at the university level and an additional 2 years of experience in the college setting. He also has 2 years of industrial experience.Mr. Johnpaul specializes in Structural Engineering and imparts his knowledge in the B.E. program. He possesses 2.5 years of research experience and has guided 4 PG students. Additionally, he has 6 international publications and 4 national publications to his name, along with 2 international and 10 national papers presented."
        },
    {
      name: "K.K.Muthulakshmi",
      position: "Lab Technician",
      department: "Department of Civil Engineering",
      location: "Kahe",
      image: img3,
      paragraph:
        "K.K. Muthulakshmi is a Lab Technician in the Department of Civil Engineering. She was born on 2nd April 1988, making her 34 years old, and she is a female staff member belonging to the Hindu community. Muthulakshmi joined the institution on 7th June 2011 and resides at 5/216C, Thiruvalluvar Street, Malumichampatty, Coimbatore. You can contact her at 8973413949 or through her email at muthul415@gmail.com.Her educational qualifications include a PG degree, an undergraduate degree in Civil Engineering from Karpagam Academy of Higher Engineering, Coimbatore, with a class of 7.48, and completing +2 in Civil Engineering at Government Polytechnic College For Women, Coimbatore, with 74% in 2006. She also has +2 qualifications from Corporation Girls Higher Secondary School, Tirunelveli, with 76% in 2003. Additionally, Muthulakshmi possesses professional knowledge in Typewriting and Computer Operations.In terms of experience, she has accumulated 12 years of service, all at KAHE.",
    },
    {
      name: "Dr.M.Natarajan",
      position: "Professor",
      department: "Department of Civil Engineering",
      location: "Kahe",
      image: img4,
      paragraph:
        "Dr. M. Natarajan, a Professor in the Department of Civil Engineering, was born on 6th June 1953, making him 66 years old. He is a male faculty member who joined the institution on 15th February 2014. Dr. Natarajan's residential address is No. 51 Sivaji Colony (East Extn), Velandipalayam (PO), Coimbatore-25, and you can reach him at 9843010763 or through his email at pmnatarajanin@gmail.com. His academic background includes a Ph.D. in Engineering Geology, Remote Sensing, and GIS.Dr. Natarajan boasts a teaching experience of 6 years at the university level and an impressive 36 years of college-level teaching. While he lacks industrial experience, his area of specialization lies in Remote Sensing and GIS, and he imparts his knowledge in B.Sc. and Ph.D. programs.In the field of research, Dr. Natarajan holds 4 years of experience and has successfully guided 9 Ph.D. awardees, with an additional 9 ongoing research scholars. He has authored 19 international publications, though information on national publications and papers presented is not provided.",
    },
    {
      name: "Dr.N.Balasundaram",
      position: "Professor",
      department: "Department of 4. Civil Engineering",
      location: "Kahe",
      image: img5,
      paragraph:
        "Dr. N. Balasundaram is a Professor in the Department of Civil Engineering. He was born on 22nd February 1949, making him 69 years old, and he is a male faculty member. Dr. Balasundaram joined the institution on 1st July 2010 and resides at 356, Nanjundapuram Road, Near Shreepathy Nagar, Coimbatore-641036. You can contact him at 9442130186 or through email at balasundaram.n@kaheduedu.in. His educational background includes a Ph.D. in Environmental Engineering.With a total teaching experience of 9.3 years at the university level, Dr. Balasundaram brings a wealth of knowledge to the classroom. Additionally, he has an impressive 36 years of industrial experience. His area of specialization is in Environmental Engineering, and he teaches in both B.E. and M.E. programs.Dr. Balasundaram also has a rich research background, with 4 years of research experience. He has guided numerous research scholars to successful outcomes, including 12 Ph.D. awardees and 13 ongoing research scholars.",
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
    <div className="bg-blue-200 rounded-lg flex flex-col py-5">
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
                  className="text-gray-900 bg-blue-400 p-4 rounded-lg leading-none mt-4 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-500"
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
                      className="bg-blue-500 text-white font-semibold rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-600 transition duration-300 ease-in-out"
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
