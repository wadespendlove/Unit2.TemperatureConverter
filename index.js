const fahrenheit = prompt(`give me a temperature`);
const celsius = ((fahrenheit - 32) * 5) / 9;

function convertToCelsius(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return Math.round(celsius * 100) / 100;
}

function roundToHundredth(num) {
  return Math.round(num * 100) / 100;
}

// console.log(convertToCelsius(32));
//console.log(roundToHundredth(39.44444444444));

function describeTemperature(convertToCelsius) {
  if (celsius < 0) {
    return `${fahrenheit}°F is ${roundToHundredth(
      celsius
    )}°C, which feels very cold.`;
  } else if (celsius < 20) {
    return `${fahrenheit}°F is ${roundToHundredth(
      celsius
    )}°C, which feels cold.`;
  } else if (celsius < 30) {
    return `${fahrenheit}°F is ${roundToHundredth(
      celsius
    )}°C, which feels warm.`;
  } else if (celsius < 40) {
    return `${fahrenheit}°F is ${roundToHundredth(
      celsius
    )}°C, which feels hot.`;
  } else {
    return `${fahrenheit}°F is ${roundToHundredth(
      celsius
    )}°C, which feels very hot.`;
  }
}

console.log(describeTemperature());
