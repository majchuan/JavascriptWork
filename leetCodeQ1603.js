/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.parkingLot = new Map();
    this.parkingLot.set(1, big);
    this.parkingLot.set(2, medium);
    this.parkingLot.set(3, small);
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    if(this.parkingLot.get(carType) >= 1){
        this.parkingLot.set(carType, this.parkingLot.get(carType) - 1 );
        return true;
    }else{
        return false;
    }
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */