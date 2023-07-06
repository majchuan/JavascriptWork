/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    const result = [];
    for(let i = 0 ; i < l.length ; i++){
        const newNums = nums.slice(l[i],r[i]+1);
        newNums.sort((a,b) => a-b) ;
        const diff = newNums[1] - newNums[0];
        let isArthmetic = true;
        //console.log(newNums);
        for(let j = 2 ; j < newNums.length ; j++){
            if(diff != newNums[j] - newNums[j-1]){
                isArthmetic = false;
                break;
            }
        }

        result.push(isArthmetic);
    }

    return result;
};