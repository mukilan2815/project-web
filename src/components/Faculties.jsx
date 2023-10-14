import React from "react";
import Facultycard from "./facultycard";
const Faculties = () => {
  return (
    <div className="bg-green-200">
      <div className="flex justify-center items-center ">
        <h1 className="font-semibold my-14">FACULTIES</h1>
      </div>
      <div className="flex justify-around flex-wrap">
        <Facultycard
          title="Dr.A.AMUDHA,Ph.D"
          description="Head & Dean"
        />
        <Facultycard
          title="Dr.V.J.VIJAYALAKSHMI,Ph.D"
          description="Certified Energy Manager"
        />
        <Facultycard
          title="Mrs.P.NAGAVENI,M.E"
          description="Certified Energy Manager"
        />
      </div>
      <br />
      <br />
    </div>
  );
};

export default Faculties;
