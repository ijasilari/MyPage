import { Link } from "react-router-dom";

const NavLinks = () => {
    return (  
        <ul>
              <li style={{float: 'left'}}>
                <Link to="/interests">Interest</Link>
              </li>
              <li style={{float: 'right'}}>
                <Link to="/contacts">Contacts</Link>
              </li>
          </ul>
    );
}
 
export default NavLinks;