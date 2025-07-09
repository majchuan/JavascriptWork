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
  stations.push(target + 11); // Sentinel to simplify edge cases

  let manualSteps = 0;
  let pos = 0;

  while (pos < target) {
    // Find next station ahead to walk to
    let nextStation = stations.find(st => st > pos);
    if (nextStation === undefined) {
      // No station left, walk to target
      manualSteps += target - pos;
      break;
    }

    // Walk to next station (carry cargo)
    manualSteps += nextStation - pos;
    pos = nextStation;

    // Drone flies 10 units
    let droneLanding = Math.min(pos + 10, target);

    // Check if there's a station at droneLanding
    if (!stations.includes(droneLanding)) {
      // No station: find the next station beyond droneLanding
      let nextAvailable = stations.find(st => st > droneLanding);

      // But if the next station is beyond target, we must walk to target
      if (droneLanding < target) {
        let walkTo = Math.min(nextAvailable ?? target, target);
        manualSteps += walkTo - droneLanding;
        pos = walkTo; // You are now at next station
      } else {
        pos = target;
      }
    } else {
      pos = droneLanding;
    }
  }

  return manualSteps;
}





console.log(calculateFootDistance(23,[7,4,14]));

