/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
    let minSpeed = 1;
    let maxSpeed = 10**7;
    let minHours = checkHours(maxSpeed, dist);
    if(minHours > Math.ceil(hour)) return -1;

    while(minSpeed < maxSpeed){
        let avgSpeed = Math.floor((minSpeed + maxSpeed) / 2);

        let realTimeHour = checkHours(avgSpeed, dist);

        if(realTimeHour <= hour){
            maxSpeed = avgSpeed;
        }else{
            minSpeed = avgSpeed+1;
        }
    }

    return minSpeed;
};

const checkHours =(speed, dist) =>{
    let minHours = 0 ;
    for(let i = 0 ; i < dist.length-1; i++){
        minHours += Math.ceil(dist[i]/speed);
    }
    minHours += dist[dist.length -1] / speed ;

    return minHours;
}

const dist =[1,3,2] , hour = 6, hour1 = 2.7, hour2=1.9;
const dist1 = [1,1,100000], hour3 = 2.01;
console.log(minSpeedOnTime(dist1, hour3));