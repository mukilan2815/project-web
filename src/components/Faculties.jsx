import img from "../Images/vaigundamoorthihod.png";
import img1 from "../Images/balachandran.png"; 
import img2 from "../Images/sivaramkumar.png";
import img3 from "../Images/nagaveni.png"; 
import img4 from "../Images/selvaganapathi.png";
import FacultyCard from "./Facultiescard";
const Faculties = () => {
  return (
    <div>
      <h1 className="flex text-2xl justify-center mb-10">Faculties</h1>
      <div className="flex flex-wrap justify-evenly items-center my-3">
        <FacultyCard
          name="Dr. M. Vaigundamoorthi"
          imgSrc={img}

        />
        <FacultyCard
          name="Dr. Balachander Kalappan"
          imgSrc={img1}

        />
        <FacultyCard
          name="Dr. M. Siva Ramkumar"
          imgSrc={img2}
        />
        
        <FacultyCard
          name="Mrs. P. Nagaveni"
          imgSrc={img3}

        />
        <FacultyCard
          name="Mr. T. selvaganapathi"
          imgSrc={img4}

        />
      </div>
    </div>
  );
};

export default Faculties;
