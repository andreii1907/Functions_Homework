// ------ Exercise 1 ------ //

function convertDegrees(degrees){
    let fromFahrenheit = celsius * 1.8 + 32;
    return fromFahrenheit;
}

console.log(`25 de grade celsius sunt ${convertCelsius(25)} de grade fahrenheit`);



function convertFahrenheit(fahrenheit){
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

console.log(`64 grade fahrenheit sunt  ${convertFahrenheit(64)} de grade fahrenheit`);

// ------- Exercise 2 ------- // 

function getDistance(point1, point2) {
    const distance = (point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2;
    return Math.sqrt(distance); 
}
  
console.log(getDistance({ x: 7, y: 4 }, { x: 13, y: 9 }));

// ------- Exercise 3 ------- // 

function getDistancesArray(pair1, pair2){
    const distanceArrays = (pair1.x - pair2.x) ** 2 + (pair1.y - pair2.y) ** 2;
    return Math.sqrt(distanceArrays); 
}
  
console.log(getDistancesArray([[{ x: 2, y: 3 }, { x: 1, y: 4 }]
    [{ x: -1, y: 2 }, { x: 2, y: -3 }]]));