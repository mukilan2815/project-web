import React, { useEffect, useRef } from "react";
import img1 from "../Images/civilwork.jpg";
import img2 from "../Images/civil1.jpg";
import img3 from "../Images/civil2.jpg";
import img4 from "../Images/civil3.jpg";

const Card = ({ title, description, image }) => (
  <div
    id="civilourworks"
    className="inline-flex flex-col xl:flex-row shadow hover:shadow-md bg-white rounded-lg overflow-hidden cursor-grab mr-4"
  >
    <img className="object-cover w-full h-48" src={image} alt="Card" />
    <div className="relative p-4">
      <h3 className="text-base md:text-xl font-medium text-gray-800">
        {title}
      </h3>
      <p
        className="mt-4 text-base md:text-lg text-gray-600"
        style={{ whiteSpace: "pre-wrap" }}
      >
        {description}
      </p>
    </div>
  </div>
);

const Ourworks = () => {
  const cards = [
    {
      title: "Card 1 Title",
      description: "Surveying work at pudukottai dt",
      image: img1,
    },
    {
      title: "Card 2 Title",
      description: "Surveying work at pudukottai dt",
      image: img2,
    },
    {
      title: "Card 3 Title",
      description: "Surveying work at pudukottai dt",
      image: img3,
    },

    {
      title: "Card 4 Title",
      description: "Surveying work at pudukottai dt",
      image: img4,
    },
  ];

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    let scrollInterval;

    const startScrolling = () => {
      const scrollStep = 2;
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += scrollStep;

        if (
          scrollContainerRef.current.scrollLeft >=
          scrollContainerRef.current.scrollWidth -
            scrollContainerRef.current.offsetWidth
        ) {
          scrollContainerRef.current.scrollLeft = 0;
        }
      }
    };

    startScrolling();

    scrollInterval = setInterval(startScrolling);

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  return (
    <div className="my-7">
      <h1 className="flex justify-center text-3xl font-semibold text-gray-800 ">
        Our Works
      </h1>
      <div
        className="overflow-x-auto p-4 flex-wrap"
        style={{
          whiteSpace: "nowrap",
          overflowY: "hidden",
          scrollbarWidth: "thin",
          scrollBehavior: "smooth",
        }}
        ref={scrollContainerRef}
      >
        <style>
          {`
          /* Add custom scrollbar styles here */
          ::-webkit-scrollbar {
            width: 6px;
          }
          ::-webkit-scrollbar-thumb {
            background: #888;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
        `}
        </style>
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Ourworks;
