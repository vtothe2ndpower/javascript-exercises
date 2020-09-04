/* Map the Debris
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
The values should be rounded to the nearest whole number. The body being orbited is Earth.
The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const RADIUS = 6367.4447;
  let newArr = [];
  let T;

  for(let i = 0; i < arr.length; i++){
    T = Math.round(2 * Math.PI * Math.pow((Math.pow(RADIUS + arr[i]['avgAlt'], 3))/GM, .5));
    newArr.push({name: arr[i].name, orbitalPeriod: T})
  }
  return newArr;
}