 import React from 'react'
 import foodreceipie from '../../services/foodreceipie.mp4'

 function Header() {
   return (
     <div style={{ marginBottom: "40%"}}>
      <video autoPlay muted loop
      style={{
        marginBottom: "100%",
        width:'100%',
        height: '80%',
        position: 'absolute',
        objectFit: 'cover',
        zIndex: '-1'
      }}
      >  
     <source src={foodreceipie} type='video/mp4'></source>
     <source src={foodreceipie} type='video/ogg'></source>
     Your browser dosent support the video tag
      </video>
      </div>
   )
 }
 
 export default Header