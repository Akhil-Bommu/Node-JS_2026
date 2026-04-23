import React from "react"; 
 
function Login() { 
 return ( 
   <div> 
     <h2>Student Login</h2> 
   <form> 
       <label>Email:</label> 
       <input type="email" /><br/><br/> 
 
       <label>Password:</label> 
       <input type="password" /><br/><br/> 
 
       <button type="submit">Login</button> 
     </form> 
   </div> 
 ); 
} 
 
export default Login; 
