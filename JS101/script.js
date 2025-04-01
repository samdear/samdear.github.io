// Global variables
var isLightOn = true;
var randomNumber = Math.floor(Math.random() * 10) + 1; // Random number between 1-10

// Task 1: Hello World
function sayHello() {
  // Display an alert
  alert("Hello World!");

  // Log to console
  console.log("My first JavaScript assignment");

  // Change HTML content
  document.getElementById("output").innerHTML =
    "I just modified this element with JavaScript";
}

// Task 2: Variable Practice
function showVariables() {
  // String variable
  var myName = "Jamie";

  // Integer variable
  var myAge = 25;

  // Float variable
  var myFavoriteNumber = 7.42;

  // Log message using variables
  console.log(
    "My name is " +
      myName +
      ", I am " +
      myAge +
      " years old, and my favorite number is " +
      myFavoriteNumber +
      "."
  );

  // Alert for feedback
  alert(
    "Variables logged to console. Open your browser's console to see them!"
  );
}

// Task 3: Calculator Function
function calculate(a, b) {
  // Perform calculations
  var sum = a + b;
  var difference = a - b;
  var product = a * b;
  var quotient = a / b;

  // Log results with descriptive messages
  console.log("Addition: " + a + " + " + b + " = " + sum);
  console.log("Subtraction: " + a + " - " + b + " = " + difference);
  console.log("Multiplication: " + a + " * " + b + " = " + product);
  console.log("Division: " + a + " / " + b + " = " + quotient);

  // Alert for feedback
  alert(
    "Calculations for " + a + " and " + b + " have been logged to the console!"
  );
}

// Task 4: Temperature Converter
function fahrenheitToCelsius(fahrenheit) {
  // Convert F to C
  var celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius.toFixed(1); // Return with 1 decimal place
}

function celsiusToFahrenheit(celsius) {
  // Convert C to F
  var fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit.toFixed(1); // Return with 1 decimal place
}

function convertFahrenheit() {
  var tempF = 72;
  var tempC = fahrenheitToCelsius(tempF);
  alert(tempF + "°F is equal to " + tempC + "°C");
}

function convertCelsius() {
  var tempC = 25;
  var tempF = celsiusToFahrenheit(tempC);
  alert(tempC + "°C is equal to " + tempF + "°F");
}

// Task 5: String Manipulation
function manipulateString(text) {
  // Convert to uppercase
  var upperText = text.toUpperCase();

  // Count characters
  var charCount = text.length;

  // Create message
  var result =
    'Original text: "' +
    text +
    '"\nUppercase: "' +
    upperText +
    '"\nCharacter count: ' +
    charCount;

  // Display with alert
  alert(result);
}

// Task 6: Toggle Switch
function toggleLight() {
  // Toggle the boolean value
  isLightOn = !isLightOn;

  // Update display
  if (isLightOn) {
    document.getElementById("lightStatus").innerHTML = "Light is ON";
  } else {
    document.getElementById("lightStatus").innerHTML = "Light is OFF";
  }
}

// Task 7: Counting Loop
function countByTwo(maxNumber) {
  // Clear previous output
  document.getElementById("countOutput").innerHTML = "";

  // Use a for loop to count from 0 to maxNumber by 2
  var output = "";
  for (var i = 0; i <= maxNumber; i += 2) {
    output += i;

    // Add comma between numbers (except the last one)
    if (i < maxNumber - 1) {
      output += ", ";
    }
  }

  // Display in the HTML element
  document.getElementById("countOutput").innerHTML = output;
}
