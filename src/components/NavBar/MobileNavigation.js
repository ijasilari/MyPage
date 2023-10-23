import NavLinks from "./NavLinks"
import "../css/Navbar.css"
import {IoMdMenu} from 'react-icons/io'
import {IoMdClose} from "react-icons/io"
import {useState} from 'react';

const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <IoMdMenu className="Hamburger" size='40px' 
                             onClick={() => setOpen(!open)}/>
    
    const closeIcon = <IoMdClose className="Hamburger" size='40px' 
                            color="#d5d5d5" onClick={() => setOpen(!open)}/>


    return ( 
        <nav className="MobileNavigation">
            {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks />}
        </nav>
    );
}
 
export default MobileNavigation;