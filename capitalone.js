/*
desiging a delivery system using drones in a linear warehouse, 
the warehouse is represented as a number line starting at position 0 and ending at position target , 
target bigger than 0. along this line there ae charging stations placed at variouse positions, 
represented byh an array stations, where stations i is he postion of the ith chargign station. 
the maximum of 10 units  the drone can move after being fully charged.  
from your current position, ppik up the cargo and carry it on foot tohe nearest charging station ahead of you .  
if htere is no more stations ahead, carry the cargo on foot to the target position.  
deploy a fully charged drone from this tatio nand send it with the cargo as far as possible toward the target, 
if the target has not been reached, wallk toth e point where the drone landed to retrieve the cargo, 
then repeatfrom previouse step. the task tis to calcualte the total distance over which you must 
carry the cargo on foot. 
form position 0 to position target
*/


function calculateFootDistance(target, stations) {
  stations.sort((a, b) => a - b);
  stations.push(target);

  let footDistance = 0;
  let cargoPos = 0; // where cargo currently is
  let i = 0;

  while (cargoPos < target) {
    // find next station ahead of cargoPos
    while (i < stations.length && stations[i] < cargoPos) i++;
    let nextStation = stations[i];

    footDistance += nextStation - cargoPos;
    // drone launches from nextStation, flies max 10 units or to target
    let droneLanding = Math.min(nextStation + 10, target);

    if(droneLanding >= target) break;

    // update cargo position to where the drone landed
    cargoPos = droneLanding;
  }

  return footDistance;
}



console.log(calculateFootDistance(23,[7,4,14]));
console.log(calculateFootDistance(20,[5,10,15]));
console.log(calculateFootDistance(30,[5,10,15,20]));
console.log(calculateFootDistance(27,[3,7,10,15]));

