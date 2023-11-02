import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import sim from "../Images/aboutuswindmill.jpg";
import "aos/dist/aos.css";

const Ourservices = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <section id="civilour-services" className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-gray-800">
              Our Services
            </h2>
            <p className="text-gray-600">
              Explore the range of services we offer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            <br />
            {/* Service Item 1 */}
            <div
              className="bg-white w-full rounded-lg shadow-md p-4 hover:shadow-lg transform hover:scale-105 transition-transform duration-300 flex"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img
                src={sim}
                alt="Service Image 4"
                className="w-20 h-20 rounded-full"
              />
              <div className="flex-1 flex flex-col items-center">
                <h3 className="text-lg font-semibold text-gray-800 text-center pt-3">
                  SURVEYING WORKS
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  Surveying works using Total Station, GPS, etc.
                </p>
              </div>
            </div>

            {/* Service Item 2 */}
            <div
              className="bg-white w-full rounded-lg shadow-md p-4 hover:shadow-lg transform hover:scale-105 transition-transform duration-300 flex"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <img
                src={sim}
                alt="Service Image 4"
                className="w-20 h-20 rounded-full"
              />
              <div className="flex-1 flex flex-col items-center">
                <h3 className="text-lg font-semibold text-gray-800 text-center pt-3">
                  TESTS ON MATERIALS:
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  Physical & Mechanical properties of aggregates, Cement
                  Testing, Concrete Testing, Steel Testing, Brick/Tile Testing,
                  Bitumen Testing.
                </p>
              </div>
            </div>

            {/* Service Item 3 */}
            <div
              className="bg-white w-full rounded-lg shadow-md p-4 hover:shadow-lg transform hover:scale-105 transition-transform duration-300 flex"
              data-aos="fade-up"
              data-aos-duration="4000"
            >
              <img
                src={sim}
                alt="Service Image 4"
                className="w-20 h-20 rounded-full"
              />
              <div className="flex-1 flex flex-col items-center">
                <h3 className="text-lg font-semibold text-gray-800 text-center pt-3">
                  TRANSPORTATION ENGINEERING
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  Flexible & Rigid pavement design, Geometric design of
                  Pavement, Road Network planning & Design for pavement (Rigid
                  and Flexible), Overlays Design of pavement, Bituminous Mix
                  Design.
                </p>
              </div>
            </div>
            <br />
          </div>
          <br />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            <br />
            {/* Service Item 4 */}
            <div
              className="bg-white w-full rounded-lg shadow-md p-4 hover:shadow-lg transform hover:scale-105 transition-transform duration-300 flex"
              data-aos="fade-up"
              data-aos-duration="5000"
            >
              <img
                src={sim}
                alt="Service Image 4"
                className="w-20 h-20 rounded-full"
              />
              <div className="flex-1 flex flex-col items-center">
                <h3 className="text-lg font-semibold text-gray-800 text-center pt-3">
                  DRAFTING WORKS
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  Structural Detailing (Bar Bending Schedule), Corporation
                  Approval Drawings, Pre DCR Works, CMDAwork, Building
                  Completion Certificate, Estimate of building structure for a
                  bank loan, Fabrication of Steel Structure.
                </p>
              </div>
            </div>

            {/* Service Item 10 */}
            <div
              className="bg-white w-full rounded-lg shadow-md p-4 hover:shadow-lg transform hover:scale-105 transition-transform duration-300 flex"
              data-aos="fade-up"
              data-aos-duration="6000"
            >
              <img
                src={sim}
                alt="Service Image 4"
                className="w-20 h-20 rounded-full"
              />
              <div className="flex-1 flex flex-col items-center">
                <h3 className="text-lg font-semibold text-gray-800 text-center pt-3">
                  STRUCTURAL ENGINEERING
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  Structural Analysis & Design, Stability of Building structure
                  and Evaluation, Valuation of Building, Condition Monitoring,
                  Repair and Rehabilitation of Structures, Design of Sub & Super
                  Structures, Design of Retaining Structures, Project Management
                  Consultancy.
                </p>
              </div>
            </div>
            <br />
          </div>
          <br />
        </div>
      </section>
    </div>
  );
};

export default Ourservices;
