import React from "react";

const Home = () => {
  const divStyle = {
    backgroundImage: 'url("/Images/windmill.jpeg")', // Replace with the actual path to your image
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={divStyle}>
      <div className="text-3xl font-medium mt-14 ml-24 bg-windmill">
        <h1>ENERGY</h1>
        <h1 className="ml-12">CONSULTANCY</h1>
        <h1 className="ml-36">SERVICES</h1>
      </div>
      <h1 className="text-gray-500 text-4xl font-bold p-10 ml-12">
        "FOR YOUR BETTER
        <br /> <span className="text-green-900">TOMORROW</span>, SAVE <br />
        ENERGY <span className="text-green-200">TODAY</span>"
      </h1>
      <div className="pl-10 ml-12">
        <button className="bg-green-300 rounded-3xl p-3">Know More</button>
      </div>
    </div>
  );
};

export default Home;
