const minutesPerHour = 60;
const minutesPerDay = 1440;

function afterMidnight(timeOfDay) {
  let hours = Number(timeOfDay.slice(0,2));
  let minutes = Number(timeOfDay.slice(3));
  return (minutes + (hours * minutesPerHour)) % minutesPerDay;
}

function beforeMidnight(timeOfDay) {
  let hours = Number(timeOfDay.slice(0,2));
  let minutes = Number(timeOfDay.slice(3));
  return (minutesPerDay - (minutes + (hours * minutesPerHour))) % minutesPerDay;
}



console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);