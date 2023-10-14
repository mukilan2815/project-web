import React, { useState } from "react";
import Person from "../Images/pngegg.png";
import Fulldetailscard from "./Fulldetailscard";

const Facultycard = () => {
  // State to track whether to show the details card
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-600">
        <div>
          <div className="flex justify-center">
            <img className="rounded-t-lg" src={Person} alt="" width={120} />
          </div>
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          {/* Use a button instead of an anchor tag */}
          <button
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover-bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => setShowDetails(!showDetails)}
          >
            Know More
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
          <br />
          <br />
          <br />
          {/* Conditionally render the details card */}
          {showDetails && <Fulldetailscard />}
        </div>
      </div>
    </div>
  );
};

export default Facultycard;
