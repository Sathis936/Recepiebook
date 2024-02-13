 import React from 'react'
 import foodreceipie from '../../services/foodreceipie.mp4'

 function Header() {
   return (
     
      <video autoPlay muted loop
      style={{
        width:'100%',
        height: '90.5%',
        position: 'absolute',
        objectFit: 'cover',
        zIndex: '-1'
      }}
      >  
     <source src={foodreceipie} type='video/mp4'></source>
     <source src={foodreceipie} type='video/ogg'></source>
     Your browser dosent support the video tag
      </video>
     
   )
 }
 
 export default Header