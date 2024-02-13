import React from 'react'
import ResponsiveAppBar from '../navbar/Navbar'
import Header from '../navbar/Header'
import Search from '../search/Search';
 

function Home() {
  return (
    <div>
      <ResponsiveAppBar/>
    <Header/>
   <Search/>
    </div>
  )
}

export default Home;