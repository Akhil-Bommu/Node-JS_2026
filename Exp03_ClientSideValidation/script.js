// ===================================================== 
// JavaScript Form Validation File (script.js) 
// Contains: 
// 1. Registration Validation Function 
// 2. Login Validation Function 
// ===================================================== 
// =============================== 
// Registration Validation Function 
// =============================== 
function validateRegister() { 
// --------------------------------- 
// Step 1: Get values from form fields 
// --------------------------------- 
// document.getElementById() selects the input field using its ID. 
// .value gets the value entered by the user. 
var name = document.getElementById("regName").value; 
var email = document.getElementById("regEmail").value;
 var password = document.getElementById("regPassword").value; 
  var confirm = document.getElementById("regConfirm").value; 
 
  // --------------------------------- 
  // Step 2: Check if any field is empty 
  // --------------------------------- 
  // If any input field is empty, show alert and stop form submission. 
 
  if (name === "" || email === "" || password === "" || confirm === "") { 
    alert("All fields are required"); 
    return false; // Stops form submission 
  } 
 
  // --------------------------------- 
  // Step 3: Email Format Validation 
  // --------------------------------- 
  // Regular Expression (RegEx) checks if email format is valid. 
  // Example format: example@gmail.com 
 
  var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
 
  // match() checks if email follows the defined pattern. 
  if (!email.match(emailPattern)) { 
    alert("Invalid Email Format"); 
    return false; 
  } 
 
  // --------------------------------- 
  // Step 4: Password Length Validation 
  // --------------------------------- 
  // Passwords must be at least 6 characters long. 
 
  if (password.length < 6) { 
    alert("Password must be at least 6 characters"); 
    return false; 
  } 
 
  // --------------------------------- 
  // Step 5: Confirm Password Check 
  // --------------------------------- 
  // Checks whether password and confirm password are equal. 
 
  if (password !== confirm) { 
    alert("Passwords do not match"); 
    return false; 
  } 
 
  // --------------------------------- 
  // If all validations pass 
  // --------------------------------- 
  alert("Registration Successful"); 
  return true; // Allows form submission
} 
 
// =============================== 
// Login Validation Function 
// =============================== 
 
function validateLogin() { 
  // --------------------------------- 
  // Step 1: Get login form values 
  // --------------------------------- 
 
  var email = document.getElementById("loginEmail").value; 
  var password = document.getElementById("loginPassword").value; 
 
  // --------------------------------- 
  // Step 2: Check Empty Fields 
  // --------------------------------- 
 
  if (email === "" || password === "") { 
    alert("Both fields are required"); 
    return false; 
  } 
 
  // --------------------------------- 
  // Step 3: Email Format Check 
  // --------------------------------- 
 
  var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
 
  if (!email.match(emailPattern)) { 
    alert("Invalid Email Format"); 
    return false; 
  } 
 
  // --------------------------------- 
  // Step 4: Password Length Check 
  // --------------------------------- 
 
  if (password.length < 6) { 
    alert("Password must be at least 6 characters"); 
    return false; 
  } 
 
  // --------------------------------- 
  // If all validations pass 
  // --------------------------------- 
 
  alert("Login Successful"); 
  return true; 
}
