// function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Driver code
const celsius = 25;
const fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius}°C is equal to ${fahrenheit}°F`);

// function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}
// Driver code
const fahrenheitv2 = 77;
const celsiusv2 = fahrenheitToCelsius(fahrenheitv2);
console.log(`${fahrenheitv2}°F is equal to ${celsiusv2}°C`);