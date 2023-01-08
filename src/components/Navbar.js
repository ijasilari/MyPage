import { Link } from "react-router-dom";
import "./css/Navbar.css";

const Navbar = () => {
  

  return (
    <div className="navcontainer">
      <Link to="/" id="logo">Ilari Ijäs</Link>
      <header className="header">
        <nav>
          <ul>
          <li>
              <Link to="/interests">Interest</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
      
    );
  }

export default Navbar;