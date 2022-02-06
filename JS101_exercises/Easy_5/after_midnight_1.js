const minutesPerDay = 1440;
const minutesPerHour = 60;
const hoursPerDay = 24;

function timeOfDay(number) {
  if (number < 0) {
    number = minutesPerDay + (number % minutesPerDay);
  }
  let hours = Math.floor(number/minutesPerHour);
  
  if (hours > hoursPerDay) {
    hours = hours % hoursPerDay;
  }
  if (hours < 10) hours = `0${hours}`;
  
  let minutes = number % minutesPerHour;
  if (minutes < 10) minutes = `0${minutes}`;
  
  return `${hours}:${minutes}`;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");