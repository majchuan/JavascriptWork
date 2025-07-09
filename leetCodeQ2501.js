/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function(nums) {
    let maxStreak = 0 ;

    const nums_set = new Set(nums);

    for(let num of nums){
        let currentStreak = 0 ;
        let current = num;

        while(nums_set.has(current)){
            currentStreak++;
            if(current*current > 1e5) break;

            current *= current;
        }

        maxStreak = Math.max(maxStreak, currentStreak);
    }

    return maxStreak < 2 ? -1 : maxStreak;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreakSlowApproach = function(nums) {
    let maxStreak = 0 ;
    const unique_nums = new Set(nums);
    const newNums = [...unique_nums];
    newNums.sort((a,b) => a - b);

    for(let i = 0 ; i < newNums.length ; i++){
        let currentStreak = 0 ;
        let current = newNums[i];
        for(let j = i+1; j< nums.length; j++){
            if(current * current > newNums[newNums.length-1]) break;
            if(newNums[j] == current * current){
                currentStreak++;
                current = newNums[j];
            }
        }
        
        maxStreak = Math.max(maxStreak, currentStreak+1);
    }

    return maxStreak < 2 ? -1 : maxStreak;
};