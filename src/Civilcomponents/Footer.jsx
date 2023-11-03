import React from "react";

const Footer = () => {
  const lineStyle = {
    borderRight: "3px solid rgba(128, 128, 128, 0.5)",
    padding: "1px 15px",
  };

  return (
    <div id="civilfooter" className="bg-blue-200 flex justify-evenly py-28">
      {" "}
      <section>
        <h5 className="font-bold m-4">FACULTY COORDINATES</h5>
        <p className="m-2">Dr.A.Amudha, Ph.D</p>
        <p className="font-thin justify-center m-2">Head & Dean</p>
        <p className="m-2">Dr.V.J. Vijayalakshmi, Ph.D</p>
        <p className="font-thin m-2">Head & Dean</p>
        <p className="m-2">Dr.A.Amudha, Ph.D</p>
        <p className="font-thin m-2">Head & Dean</p>
      </section>
      <section style={lineStyle}></section>{" "}
      <section>
        <h5 className="font-bold mt-4">NAVIGATION</h5>
        <p className="m-2">Home</p>
        <p className="m-2">About</p>
        <p className="m-2">Faculties</p>
        <p className="m-2">Our Services</p>
        <p className="m-2">Our Works</p>
        <p className="m-2">Contact</p>
      </section>
      <section style={lineStyle}></section>
      <section>
        <h5 className="font-bold mt-4">SERVICES</h5>
        <p className="my-2">Electrical Distribution System</p>
        <p className="my-2">PF Improvement System</p>
        <p className="my-2">PQ Study / Harmonics</p>
        <p className="my-2">Capacitor Performance</p>
      </section>
      <section style={lineStyle}></section>
      <section>
        <h5 className="font-bold mt-4">CONTACT</h5>
        <p className="my-2">Mrs. P. Nagaveni</p>
        <p className="my-2">Mobile: 9600396715</p>
        <p className="my-2">Email id: magaveni.p@kahedu.edu.in</p>
        <p className="my-2">Capacitor Performance</p>
      </section>
    </div>
  );
};

export default Footer;