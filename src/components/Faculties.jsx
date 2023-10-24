import img from "../Images/amudhamam.jpeg";
import img1 from "../Images/Venkatachalapathy.jpg"; // Import images for different faculty members
import FacultyCard from "./Facultiescard";
const Faculties = () => {
  return (
    <div>
      <h1 className="flex text-2xl justify-center mb-10">Faculties</h1>
      <div className="flex justify-evenly flex-wrap mb-16">
        <FacultyCard
          name="Prof. Dr. B. Venkatachalapathy"
          role="Vice Chancellor"
          imgSrc={img1}
          facebookLink="#facebook"
          twitterLink="#twitter"
          instagramLink="#instagram"
        />
        <FacultyCard
          name="Dr.A.Amudha, Ph.D"
          role="Head & Dean"
          imgSrc={img}
          facebookLink="#facebook"
          twitterLink="#twitter"
          instagramLink="#instagram"
        />
      </div>
    </div>
  );
};

export default Faculties;
