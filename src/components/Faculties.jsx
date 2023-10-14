import React from "react";
import Facultycard from "./facultycard";
const Faculties = () => {
  return (
    <div className="bg-green-200">
      <div className="flex justify-center items-center ">
        <h1 className="font-semibold my-14">FACULTIES</h1>
      </div>
      <div className="flex justify-around flex-wrap">
        <Facultycard />
      </div>
      <br />
      <br />
    </div>
  );
};

export default Faculties;
