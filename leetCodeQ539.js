/**
 * @param {string[]} timePoints
 * @return {number}
 */

/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifferenceFastApproach = function(timePoints) {
    const minutesPoints = timePoints.map(x => totalMinutes(x));

    minutesPoints.sort((a,b) => a-b);
    let minMinute = 1440 + minutesPoints[0] - minutesPoints[minutesPoints.length -1];

    for(let i = 0 ; i < minutesPoints.length -1 ; i++){
        minMinute = Math.min(minMinute, minutesPoints[i+1] - minutesPoints[i]);
    }

    return minMinute;
};

const totalMinutes = (timePoint) =>{
    let hourMinute = timePoint.split(":");

    return parseInt(hourMinute[0])*60 + parseInt(hourMinute[1]);
}
var findMinDifference = function(timePoints) {
    timePoints.sort((a,b) =>{
        let aHour = parseInt(a.split(":")[0]);
        let bHour = parseInt(b.split(":")[0]);
        let aMinutes = parseInt(a.split(":")[1]);
        let bMinutes = parseInt(b.split(":")[1]);
        if(aHour != bHour){
            return aHour - bHour;
        }else{
            return aMinutes - bMinutes;
        }
    })


    let minMinutes =Number.MAX_SAFE_INTEGER;
    let zeroTimePoint = timePoints.filter(x => x == "00:00");
    let regularTimePoint = timePoints.filter(x => x != "00:00");
    if(zeroTimePoint.length > 1) return 0 

    if(regularTimePoint.length > 2 ){
        let lastElementTimeHour = regularTimePoint[regularTimePoint.length-1].split(":");
        let firstElementTimeHour = regularTimePoint[0].split(":");
        minMinutes = Math.min(minMinutes, 
        1440 + (parseInt(firstElementTimeHour[0]) - parseInt(lastElementTimeHour[0]))*60 + 
        parseInt(firstElementTimeHour[1]) - parseInt(lastElementTimeHour[1]) );
        //console.log(lastElementTimeHour, firstElementTimeHour);
    }

    for(let i = 0 ; i< regularTimePoint.length-1; i++){
        let aHourMinitues = regularTimePoint[i].split(":");
        let bHourMinitues = regularTimePoint[i+1].split(":")
        let aHour = parseInt(aHourMinitues[0]);
        let bHour = parseInt(bHourMinitues[0]);
        let aMinitue = parseInt(aHourMinitues[1]);
        let bMinitue = parseInt(bHourMinitues[1]);
        //console.log(aHour, bHour, bMinitue - aMinitue);
        minMinutes = Math.min(minMinutes, (bHour - aHour)*60 + bMinitue - aMinitue);
    }

    // compare last one with first one.

    if(zeroTimePoint.length == 0 ) return minMinutes ;

    return Math.min(
        minMinutes, 
    parseInt(regularTimePoint[0].split(":")[0])*60 + parseInt(regularTimePoint[0].split(":")[1]),
    (24 - parseInt(regularTimePoint[regularTimePoint.length-1].split(":")[0]) )*60 +
    0 - parseInt(regularTimePoint[regularTimePoint.length-1].split(":")[1])
    );


};