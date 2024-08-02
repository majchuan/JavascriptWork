/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    const n = nums.length;
    const totalOnes = nums.reduce((a,b)=> a+b, 0);

    if(totalOnes == 0 || totalOnes == n) return 0;

    let currentOnes = nums.slice(0,totalOnes).reduce((a,b) => a + b, 0);
    let maxOnes = currentOnes;

    for(let i = 0 ; i < n ; i++){
        currentOnes -=nums[i];
        currentOnes += nums[(i+totalOnes) % n];
        maxOnes = Math.max(maxOnes, currentOnes);
    }

    return totalOnes - maxOnes;
};

const nums =[1,1,0,0,1];
console.log(minSwaps(nums));