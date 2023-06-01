var UndergroundSystem = function() {
    this.hash_rails = {};
    this.average_times ={};
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    if(this.hash_rails[id] == null){
        this.hash_rails[id] =[{
            checkInStation : stationName, 
            checkInTime: t,
            checkOutStation : "",
            checkOutTime : -1
            }];
    }else{
        const userTravles = this.hash_rails[id];
        let isCheckOut = true;
        for(let travel of userTravles){
            if(travel.checkOutStation.length == 0){
                isCheckOut = false;
                break;
            }
        }
        if(isCheckOut){
            this.hash_rails[id].push({
                checkInStation : stationName,
                checkInTime : t,
                checkOutStation : "",
                checkOutTime : -1 
            });
        }
    }
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    if(this.hash_rails[id] != null){
        const length = this.hash_rails[id].length;
        const latestTravelTime = this.hash_rails[id][length-1];
        if(latestTravelTime.checkOutStation.length == 0){
            latestTravelTime.checkOutStation = stationName;
            latestTravelTime.checkOutTime = t;
        }
        const key = latestTravelTime.checkInStation +"|"+latestTravelTime.checkOutStation
        if(this.average_times[key] != null){
            this.average_times[key][0] += latestTravelTime.checkOutTime - latestTravelTime.checkInTime;
            this.average_times[key][1] +=1;
        }else{
            this.average_times[key] = [ latestTravelTime.checkOutTime-latestTravelTime.checkInTime , 1];
        }
    }
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {

    const key = startStation +"|"+endStation;    
    return this.average_times[key][0]/this.average_times[key][1];
}
/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */