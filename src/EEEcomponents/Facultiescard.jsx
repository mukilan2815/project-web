import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

const FacultyCard = ({
  name,
  role,
  imgSrc,
  facebookLink,
  twitterLink,
  instagramLink,
}) => {
  return (
    <div class="w-96 p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all transform duration-500 mb-">
      {" "}
      <img
        class="w-full h-64 object-fit rounded-t-md"
        src={imgSrc}
        alt={name}
      />{" "}
      <div class="mt-4">
        <h1 class="text-xl font-bold text-gray-700">{name}</h1>{" "}
        <p class="text-sm mt-2 text-gray-700">{role}</p>
        <div class="mt-4 mb-2 flex justify-center">
          <button class="text-base block font-semibold py-2 px-4 text-green-100 hover:text-white bg-green-400 rounded-lg shadow hover:shadow-md transition duration-300">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;
