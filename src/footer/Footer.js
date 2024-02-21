import React from "react";
import  './Footer.css'
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer =()=>{
  return(
    <div className="footer"> 
      <h1 className="get">Recepiebook</h1>
<ul>
      Home <br></br>
    Dashboard<br></br>
    Policy
</ul>
<div className="icons">
<XIcon/>
<YouTubeIcon/>
<InstagramIcon/>
</div>
<h4 className="right">2024 Copyright © recipebook.io, All Rights Reserved</h4> 

     </div>
  )
}
export default Footer;