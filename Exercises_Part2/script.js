// ------ Exercise 1 ------ //

function convertDegrees(degrees) {
    if (degrees.slice(- 1) === 'F') {
        let value = degrees.slice(0, degrees.length - 1);
        let farenheit = (value - 32) * 5 / 9;
        return farenheit;
    } else if (degrees.slice(- 1) === 'C') {
        let value = degrees.slice(0, degrees.length - 1);
        let celsius = value * 1.8 + 32; 
        return celsius;
    } 
      else {
          console.log ('Trebuie sa adaugi tip de grade pe care vrei sa il convertesti la final ("C" ori "F")')
      }
}

console.log(convertDegrees('33C'));

// // ------- Exercise 2 ------- // 

function getDistance(point1, point2) {
    const distance = (point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2;
    return Math.sqrt(distance); 
}
  
console.log(getDistance({ x: 7, y: 4 }, { x: 13, y: 9 }));

// ------- Exercise 3 ------- // 

// function getDistancesArray(pair1, pair2) {
//     const distanceArrays = (pair1.x - pair2.x) ** 2 + (pair1.y - pair2.y) ** 2;
//     return Math.sqrt(distanceArrays); 
// }
  
// console.log(getDistancesArray([[{ x: 2, y: 3 }, { x: 1, y: 4 }]
//     [{ x: -1, y: 2 }, { x: 2, y: -3 }]]));