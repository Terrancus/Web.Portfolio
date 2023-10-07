import React, { useEffect, useState } from 'react';
import {Link, useLocation} from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false); //Initialize as false
    const location = useLocation(); // Get info on which route an user is in

    useEffect(() => {setExpandNavbar(false)}, [location]);  // Set expandNavbar to false whenever loc. changed

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
        <div className="toggleButton"> 
            <button onClick={() => {setExpandNavbar((prev) => !prev)}}>     {/*prev = previous*/}
                <ReorderIcon/> 
            </button>
        </div>
        <div className="links">
            <Link to="/Web-Portfolio/" className="link"> Home Page </Link>
            <Link to="/Web-Portfolio/projects" className="link"> Projects </Link>
            <Link to="/Web-Portfolio/experience" className="link"> CV timeline</Link>
        </div>
    </div>
  )
}

export default Navbar