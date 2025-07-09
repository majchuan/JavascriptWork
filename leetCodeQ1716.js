/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let daysReminder = n % 7 ;
    let weeks = Math.floor(n / 7);

    if(weeks == 0 ){
        return restDaysSum(weeks, daysReminder);
    }else if(weeks == 1){
        let firstWeekSum = 28 ;
        return firstWeekSum + restDaysSum(weeks, daysReminder);
        
    }else{
        let firstWeekSum = 28;  
        let lastWeekSum =(weeks + weeks+6)*7/2;

        let allWeekSum = (firstWeekSum + lastWeekSum) * weeks / 2 ;

        return allWeekSum +  restDaysSum(weeks, daysReminder);
    }
};

const restDaysSum = (week,day) =>{
    return (week + 1 + week + day) * day / 2 ;
}