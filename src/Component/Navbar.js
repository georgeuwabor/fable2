import "../Styles/Navbar.css";
import Logo from "../Asset/Logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div id="nav_container">
        <div>
          <Link to='/'>
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div>
          <div id="sub_categories">
            <Link to="/collections">
              <p>COLLECTIONS</p>
            </Link>
            <Link to="/products">
              <p>CUSTOMIZER</p>
            </Link>
            <Link to="/orders">

              <p>SALE</p>

            </Link>
          </div>
        </div>
        <div id="sub_categories">
          <Link to="/profile">

            <p>ITEMS</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
