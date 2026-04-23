/* 
===================================================== 
Weather Application - JavaScript File 
===================================================== 
This file contains the logic of our weather app. 
HTML = Structure 
CSS = Design 
JavaScript = Brain (Logic) 
Here we will: 
1. Read city name entered by user 
2. Send request to weather API 
3. Receive data (JSON format) 
4. Extract temperature 
5. Display result on webpage 
===================================================== 
*/ 
//This function runs when user clicks the button 
function getWeather() { 
/* 
STEP 1: 
Get the value entered inside the input box. 
document = whole webpage 
getElementbyID("city") = select input box 
.value = get what user typed 
*/ 
let cityName = document.getElementById("city").value; 
/* 
If the user does not type anything show alert and stop function. 
*/ 
if (cityName ===""){ 
alert("Please enter a city name!"); 
return ; // stop exection 
} 
/* 
STEP 2: 
API URL (Replace YOUR_API_KEY with real key) 
This URL sends a request to the OpenWeather server. 
q=cityName → dynamic city entered by user 
units=metric → temperature in Celsius 
*/ 
let apiKey = "98128c2728c92924f368feebee79543a"; //Put your real API key here 
let url ="https://api.openweathermap.org/data/2.5/weather?q=" 
+ cityName + 
"&appid=" + apiKey + 
"&units=metric"; 
 /* 
    STEP 3: 
    fetch() is used to send requests to the server. 
 
    Think like this: 
    Browser → asks weather server → server responds 
    */ 
  fetch(url) 
 
        // Convert response into JSON format 
        .then(response => response.json()) 
 
        // Now we have actual weather data 
        .then(data => { 
 
            //Add this LINE 
            console.log(data); 
 
            /* 
            data is a big object returned by the server. 
 
            Example: 
            data.main.temp → temperature 
            data.weather[0].description → weather condition 
            */ 
 
            let temperature = data.main.temp; 
            let description = data.weather[0].description; 
            /* 
            STEP 4: 
            Display result inside div 
            */ 
            document.getElementById("result").innerHTML = 
                "<h2>City: " + cityName + "</h2>" + 
                "<p>Temperature: " + temperature + " °C</p>" + 
                "<p>Condition: " + description + "</p>"; 
 
        }) 
 
        // If something goes wrong (wrong city, network error) 
        .catch(error => { 
 
            document.getElementById("result").innerHTML = 
                "<p style='color:red;'>City not found or error occurred!</p>"; 
 
            console.log("Error:", error); 
        }); 
 
 
}
