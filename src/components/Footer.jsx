import React from "react";

const Footer = () => {
  const lineStyle = {
    borderRight: "3px solid rgba(128, 128, 128, 0.5)",
    padding: "1px 15px",
  };

  return (
    <div className="bg-green-200 flex justify-evenly py-28">
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
        <h5 className="font-bold">NAVIGATION</h5>
        <p>Home</p>
        <p>About</p>
        <p>Faculties</p>
        <p>Our Services</p>
        <p>Our Works</p>
        <p>Contact</p>
      </section>
      <section style={lineStyle}></section> 
      <section>
        <h5 className="font-bold">SERVICES</h5>
        <p>Electrical Distribution System</p>
        <p>PF Improvement System</p>
        <p>PQ Study / Harmonics</p>
        <p>Capacitor Performance</p>
      </section>
      <section style={lineStyle}></section>
      <section>
        <h5 className="font-bold">CONTACT</h5>
        <p>Mrs. P. Nagaveni</p>
        <p>Mobile: 9600396715</p>
        <p>Email id: magaveni.p@kahedu.edu.in</p>
        <p>Capacitor Performance</p>
      </section>
    </div>
  );
};

export default Footer;