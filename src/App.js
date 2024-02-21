import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./components/home/Home";
import Contact from "./auth/contact/Contact";
 
function App() {
  return (
    <div className="App">
    <Home/>
    <Routes>
      <Route path="/" ></Route>
      <Route path="/Contact"element={<Contact/>}/>
    </Routes>
    </div>
  );
}

export default App;
