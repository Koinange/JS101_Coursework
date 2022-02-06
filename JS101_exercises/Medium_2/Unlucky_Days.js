const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function fridayThe13ths(year) {
  let fridayThe13thCounter = 0;
  monthsArray.forEach(month => {
    let date =  new Date(`${month} 13, ${year} 12:00:00`);
    let day = date.getDay();
    if (day === 5) fridayThe13thCounter += 1;
  });
  console.log(fridayThe13thCounter);
  return fridayThe13thCounter;
}

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2