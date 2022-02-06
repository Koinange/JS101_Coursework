const divisionFactor = 100/60;

function dms(number) {
  let degree = Math.floor(number);
  let newNumber = ((number - degree)/divisionFactor) * 100;
  let minute = Math.floor(newNumber);
  if (minute < 10) minute = `0${minute}`;
  let second = Math.floor(((newNumber - minute)/divisionFactor)*100);
  if (second < 10) second = `0${second}`;
  console.log(`${degree}°${minute}'${second}"`);
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"