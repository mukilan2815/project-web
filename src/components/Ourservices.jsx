import React from "react";
import sim from "../Images/aboutuswindmill.jpg";

const Ourservices = () => {
  return (
    <div>
      <section id="services" className="bg-gray-100 py-10">
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
            <div class="bg-white w-[100%] rounded-lg shadow-md p-4 hover:shadow-lg transform hover:scale-105 transition-transform duration-300 flex">
              <img
                src={sim}
                alt="Service Image 4"
                class="w-20 h-20 rounded-full"
              />
              <div class="flex-1 flex flex-col items-center">
                <h3 class="text-lg font-semibold text-gray-800 text-center pt-3">
                  Service Title 1
                </h3>
                <p class="text-gray-600 text-sm text-center">
                  Service description goes here.
                </p>
              </div>
            </div>

            {/* Service Item 2 */}
            <div class="bg-white w-[100%] rounded-lg shadow-md p-4 hover:shadow-lg transform hover:scale-105 transition-transform duration-300 flex">
              <img
                src={sim}
                alt="Service Image 4"
                class="w-20 h-20 rounded-full"
              />
              <div class="flex-1 flex flex-col items-center">
                <h3 class="text-lg font-semibold text-gray-800 text-center pt-3">
                  Service Title 2
                </h3>
                <p class="text-gray-600 text-sm text-center">
                  Service description goes here.
                </p>
              </div>
            </div>

            {/* Service Item 3 */}
            <div class="bg-white w-[100%] rounded-lg shadow-md p-4 hover:shadow-lg transform hover:scale-105 transition-transform duration-300 flex">
              <img
                src={sim}
                alt="Service Image 4"
                class="w-20 h-20 rounded-full"
              />
              <div class="flex-1 flex flex-col items-center">
                <h3 class="text-lg font-semibold text-gray-800 text-center pt-3">
                  Service Title 3
                </h3>
                <p class="text-gray-600 text-sm text-center">
                  Service description goes here.
                </p>
              </div>
            </div>
            <br />
          </div>
          <br />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            <br />
            {/* Service Item 9 */}
            <div class="bg-white w-[100%] rounded-lg shadow-md p-4 hover:shadow-lg transform hover:scale-105 transition-transform duration-300 flex">
              <img
                src={sim}
                alt="Service Image 4"
                class="w-20 h-20 rounded-full"
              />
              <div class="flex-1 flex flex-col items-center">
                <h3 class="text-lg font-semibold text-gray-800 text-center pt-3">
                  Service Title 4
                </h3>
                <p class="text-gray-600 text-sm text-center">
                  Service description goes here.
                </p>
              </div>
            </div>

            {/* Service Item 10 */}
            <div class="bg-white w-[100%] rounded-lg shadow-md p-4 hover:shadow-lg transform hover:scale-105 transition-transform duration-300 flex">
              <img
                src={sim}
                alt="Service Image 4"
                class="w-20 h-20 rounded-full"
              />
              <div class="flex-1 flex flex-col items-center">
                <h3 class="text-lg font-semibold text-gray-800 text-center pt-3">
                  Service Title 5
                </h3>
                <p class="text-gray-600 text-sm text-center">
                  Service description goes here.
                </p>
              </div>
            </div>
            <br />
          </div>
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 ">
            <br />
            {/* Service Item 1 */}
            <div class="bg-white w-[100%] rounded-lg shadow-md p-4 hover:shadow-lg transform hover:scale-105 transition-transform duration-300 flex">
              <img
                src={sim}
                alt="Service Image 4"
                class="w-20 h-20 rounded-full"
              />
              <div class="flex-1 flex flex-col items-center">
                <h3 class="text-lg font-semibold text-gray-800 text-center pt-3">
                  Service Title 1
                </h3>
                <p class="text-gray-600 text-sm text-center">
                  Service description goes here.
                </p>
              </div>
            </div>

            {/* Service Item 2 */}
            <div class="bg-white w-[100%] rounded-lg shadow-md p-4 hover:shadow-lg transform hover:scale-105 transition-transform duration-300 flex">
              <img
                src={sim}
                alt="Service Image 4"
                class="w-20 h-20 rounded-full"
              />
              <div class="flex-1 flex flex-col items-center">
                <h3 class="text-lg font-semibold text-gray-800 text-center pt-3">
                  Service Title 2
                </h3>
                <p class="text-gray-600 text-sm text-center">
                  Service description goes here.
                </p>
              </div>
            </div>

            {/* Service Item 3 */}
            <div class="bg-white w-[100%] rounded-lg shadow-md p-4 hover:shadow-lg transform hover:scale-105 transition-transform duration-300 flex">
              <img
                src={sim}
                alt="Service Image 4"
                class="w-20 h-20 rounded-full"
              />
              <div class="flex-1 flex flex-col items-center">
                <h3 class="text-lg font-semibold text-gray-800 text-center pt-3">
                  Service Title 3
                </h3>
                <p class="text-gray-600 text-sm text-center">
                  Service description goes here.
                </p>
              </div>
            </div>
          </div>
          <br />
        </div>
      </section>
    </div>
  );
};

export default Ourservices;
