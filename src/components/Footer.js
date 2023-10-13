import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import { GitHub } from '@material-ui/icons'

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
        <h3>Contact me:</h3>
        <div className="socialMedia">

            <a href="https://www.linkedin.com/in/terrance-ho-95a11a281" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
            <EmailIcon onClick={() => window.location = 'mailto:terrance.ho.work@gmail.com'}/>
            <a href="https://github.com/Terrancus" target="_blank" rel="noopener noreferrer">
              <GitHub  />
            </a>

        </div>
        <p> &copy; 2023 terrancus.github.io</p>
    </div>
  )
}

export default Footer