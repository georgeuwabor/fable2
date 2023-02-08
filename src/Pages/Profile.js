import Navbar from "../Component/Navbar";
import SubNav from "../Component/SubNav";
import HelloName from "../Component/HelloName";

const Profile = () => {
  return (
    <>
      <Navbar />
      <SubNav name={"Profile"} tag={"Main"} />
      <HelloName />
    </>
  );
};

export default Profile;
