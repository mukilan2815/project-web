import React from "react";

const Footer = () => {
  const lineStyle = {
    borderRight: "3px solid rgba(128, 128, 128, 0.5)",
    padding: "1px 15px",
  };

  return (
    <div
      id="civilfooter"
      className="bg-blue-200 flex flex-col md:flex-row items-center justify-around py-6 md:py-28"
    >
      {" "}
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
        <p className="my-2">STRUCTURAL ENGINEERING</p>
        <p className="my-2">DRAFTING WORKS</p>
        <p className="my-2">TRANSPORTATION ENGINEERING</p>
        <p className="my-2">TESTS ON MATERIALS</p>
        <p className="my-2">SURVEYING WORKS:</p>
      </section>
      <section style={lineStyle}></section>
      <section>
        <h5 className="font-bold mt-4">CONTACT</h5>
        <p className="my-2">Mr. V.Johnpaul</p>
        <p className="my-2">Mobile: 9952506549</p>
        <p className="my-2">Email id: Johnpaul.v@kahedu.edu.in</p>
      </section>
    </div>
  );
};

export default Footer;
