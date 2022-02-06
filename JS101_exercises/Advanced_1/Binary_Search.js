function binarySearch(array, searchItem) {
  if (array.includes(searchItem)) {
    if (array[0] === searchItem) return 0;
    if (array[array.length - 1] === searchItem) return array.length - 1;
    let middle = Math.floor(array.length/2);
    while (array[middle] !== searchItem) {
      if (array[middle] > searchItem) middle /= 2;
      if (array[middle] < searchItem) middle = Math.floor((middle + array.length)/2);
    }
    console.log(middle);
    return middle;
  } else return -1;
}

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
binarySearch(yellowPages, 'Pizzeria');                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6
