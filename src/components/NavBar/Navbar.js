import { Link } from "react-router-dom";
import "../css/Navbar.css";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const Navbar = () => {

  return (
    <div className="navcontainer">
      <Link to="/" id="logo">Ilari Ijäs</Link>
      <header className="header">
          <Navigation />
          <MobileNavigation />
      </header>
      
    </div>
      
    );
  }

export default Navbar;