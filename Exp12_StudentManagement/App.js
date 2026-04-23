import React from "react"; 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 
import Home from "./Home"; 
import Login from "./Login"; 
import Register from "./Register"; 
import Contact from "./Contact"; 
import About from "./About"; 
function App() { 
 return ( 
   <Router> 
     <div> 
       <h1>Student Management System</h1> 
 
       <nav> 
         <Link to="/">Home</Link> | 
         <Link to="/login">Login</Link> | 
         <Link to="/register">Register</Link> | 
         <Link to="/contact">Contact</Link> | 
         <Link to="/about">About</Link> 
       </nav> 
 
       <Routes> 
         <Route path="/" element={<Home />} /> 
         <Route path="/login" element={<Login />} /> 
         <Route path="/register" element={<Register />} /> 
         <Route path="/contact" element={<Contact />} /> 
         <Route path="/about" element={<About />} /> 
       </Routes> 
     </div> 
   </Router> 
 ); 
}
export default App; 
