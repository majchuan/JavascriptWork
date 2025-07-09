/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
    const hash_even ={};
    const hash_odd={};
    let evenSum = 0;
    let oddSum = 0;
    for(let i = 0 ; i < nums.length; i++){
        if(nums[i] % 2 == 0){
            hash_even[i] = nums[i];
            evenSum+=nums[i];
        }else{
            hash_odd[i] = nums[i];
            oddSum+=nums[i];
        }
    }
    console.log("even", hash_even, "odd", hash_odd);

    let result = [];
    for(let [val,index] of queries){
        if(val % 2 == 0 && hash_even[index] != null){
            hash_even[index] += val;
            evenSum += val;
            result.push(evenSum);
        }else if(val % 2 == 0 && hash_odd[index] != null){
            hash_odd[index] += val;
            result.push(evenSum);
        }else if(val % 2 != 0 && hash_odd[index] != null){
            hash_even[index] = hash_odd[index] + val;
            delete hash_odd[index];
            evenSum += hash_even[index];
            result.push(evenSum);
        }else if(val % 2 != 0 && hash_even[index] != null){
            hash_odd[index] = hash_even[index] + val;
            evenSum -= hash_even[index];
            delete hash_even[index];
            result.push(evenSum);
        }
    }

    return result.length == 0 ? [0] : result;
};

const nums=[1,2,0,4], queries = [[5,2],[0,2],[3,3],[2,1]];
console.log(sumEvenAfterQueries(nums,queries));