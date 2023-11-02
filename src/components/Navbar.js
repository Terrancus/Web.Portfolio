import React, { useEffect, useState } from 'react';
import {Link, useNavigate, useLocation} from "react-router-dom";
import "../styles/Navbar.css";
import NavbarDropDown from "@material-ui/icons/ArrowDropDownOutlined";
import NavbarDropUp from "@material-ui/icons/ArrowDropUpOutlined";
import LastPage from "@material-ui/icons/ArrowBack";

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false); //Initialize as false
    const location = useLocation(); // Get info on which route an user is in
    const navigate = useNavigate();

    function NavbarDropIcon(expandNavbar){
        if (expandNavbar)
            return (<NavbarDropUp /> );

        return (<NavbarDropDown/> );

    }
    //var dropDownIcon = {<NavbarDropDown/ >};

    useEffect(() => {setExpandNavbar(false)}, [location]);  // Set expandNavbar to false whenever loc. changed

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
        {/* */}
        <div className="left">
            <button onClick={() => navigate(-1)}> 
                <LastPage />
            </button>
        </div>
        

        <div className="middle">
            <Link to="/Web.Portfolio/" className="link"> Home </Link>
            <Link to="/Web.Portfolio/projects" className="link"> Projects </Link>
            <Link to="/Web.Portfolio/experience" className="link"> CV timeline</Link>
        </div>

        <div className="right"> 
            <button onClick={() => {setExpandNavbar((prev) => !prev)}}>     {/*prev = previous*/}
                {NavbarDropIcon(expandNavbar)}
            </button>
        </div>
        
    </div>
  )
}

export default Navbar