import React, { useEffect } from "react";
import Windmill from "../Images/homepiccivil.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import the AOS CSS file for styling

const Home = () => {
  const sectionStyle = {
    backgroundImage: `url(${Windmill})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
  };

  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);

  return (
    <div
      className="relative flex flex-col md:flex-row md:items-center h-screen"
      style={sectionStyle}
      data-aos="fade-up" // Apply AOS animation to the main container
    >
      <div
        className=" mt-6 md:mt-24"
        data-aos="fade-up" // Apply AOS animation to this div
      >
        <div className="text-4xl font-medium ml-10 md:ml-20 bg-windmill">
          <h1>Civil</h1>
          <h1 className="ml-4 md:ml-12">CONSULTANCY</h1>
          <h1 className="ml-8 md:ml-32">SERVICES</h1>
        </div>
        <br />
        <br />
        <h1 className="text-white text-2xl md:text-4xl font-bold ml-10 md:ml-20">
          {" "}
          "FOR YOUR BETTER
          <br /> <span className="space-y-2 text-green-900">TOMORROW</span>,
          SAVE <br />
          ENERGY <span className="space-y-2 text-blue-500">TODAY</span>"
        </h1>
        <br /> <br />
        <div
          className="md:pl-2 ml-4 md:ml-20"
          data-aos="fade-up" // Apply AOS animation to this div
        >
          <button className="bg-green-400 rounded-3xl p-3 md:p-4 px-8 md:px-10 flex items-center border-none hover:bg-green-500 transition-colors">
            Know More
            <div>
              <AiOutlineArrowRight />
            </div>
          </button>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Home;
