function triangle(angle1, angle2, angle3) {
  if (angle1 + angle2 + angle3 !== 180) return 'invalid';
  let sortedSideLengthArray = [angle1, angle2, angle3].sort((a,b) => a - b);
  if (sortedSideLengthArray.includes(0)) return 'invalid';
  if (sortedSideLengthArray.some(num => num > 90)) return 'obtuse';
  if (sortedSideLengthArray.some(num => num === 90)) return 'right';
  if (sortedSideLengthArray.some(num => num < 90)) return 'acute';
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"