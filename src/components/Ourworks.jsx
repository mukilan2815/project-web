import React, { useEffect, useRef } from "react";
import img1 from "../Images/work1.jpeg";
import img2 from "../Images/work2.jpeg";
import img3 from "../Images/work3.jpeg";
import img4 from "../Images/work4.jpeg";
import img9 from "../Images/work9.jpeg";
import img5 from "../Images/work5.jpeg";
import img6 from "../Images/work6.jpeg";
import img7 from "../Images/work7.jpeg";
import img8 from "../Images/work8.jpeg";

const Card = ({ title, description, image }) => (
  <div className="inline-flex flex-col xl:flex-row shadow hover:shadow-md bg-white rounded-lg overflow-hidden cursor-grab mr-4">
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
      description: "Description for Card 1",
      image: img1,
    },
    {
      title: "Card 2 Title",
      description:
        "Seethalakshi foundry, HT service audit , shortout the  MD issues",
      image: img2,
    },
    {
      title: "Card 3 Title",
      description:
        "National model school, purpose of auditing is to reduce EB bill and achieved 15,000 per month and give suggestions to achieve nearly 30,000",
      image: img3,
    },
    {
      title: "Card 4 Title",
      description: "Description for Card 4",
      image: img9,
    },
    {
      title: "Card 5 Title",
      description: "Description for Card 5",
      image: img5,
    },
    {
      title: "Card 6 Title",
      description:
        "MSK Engineers, PF improvement from 0.84 to 0.97 and cut off the penalty charges",
      image: img6,
    },
    {
      title: "Card 7 Title",
      description:
        "Best heat treatment,  find out the reason for PF and give solutions for their three years of PF plenty charge of Rupees 30000 per month",
      image: img7,
    },
    {
      title: "Card 8 Title",
      description: "Description for Card 8",
      image: img8,
    },
    {
      title: "Card 9 Title",
      description: "Description for Card 9",
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
  );
};

export default Ourworks;
