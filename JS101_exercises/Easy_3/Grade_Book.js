function getGrade(grade1, grade2, grade3) {
  let average = (grade1 + grade2 + grade3) / 3;
  if (average >= 90 && average <= 100) return 'A';
  if (average >= 80 && average < 90) return 'B';
  if (average >= 70 && average < 80) return 'C';
  if (average >= 60 && average < 70) return 'D';
  if (average < 60) return 'F';
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"


