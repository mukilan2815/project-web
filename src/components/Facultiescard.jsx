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
    <Card className="w-96 shadow-md transition duration-300 ease-in-out hover:shadow-xl">
      <CardHeader floated={false} className="h-70 flex justify-center my-5">
        <img src={imgSrc} alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          {role}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <a href={facebookLink} target="_blank" rel="noopener noreferrer">
            <Typography variant="lead" color="blue" textGradient>
              <i className="fab fa-facebook" />
            </Typography>
          </a>
        </Tooltip>
        <Tooltip content="Follow">
          <a href={twitterLink} target="_blank" rel="noopener noreferrer">
            <Typography variant="lead" color="light-blue" textGradient>
              <i className="fab fa-twitter" />
            </Typography>
          </a>
        </Tooltip>
        <Tooltip content="Follow">
          <a href={instagramLink} target="_blank" rel="noopener noreferrer">
            <Typography variant="lead" color="purple" textGradient>
              <i className="fab fa-instagram" />
            </Typography>
          </a>
        </Tooltip>
      </CardFooter>
    </Card>
  );
};

export default FacultyCard;
