import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <h2>This is about us page </h2>
      <Profile name={"Tausif"} />
      <ProfileClass name={"Tausif"} />
    </div>
  );
};

export default About;
