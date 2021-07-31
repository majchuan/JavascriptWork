/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {

    let closest = Number.MAX_SAFE_INTEGER ;
    let threeSum = 0;
    nums.sort((x,y) => x-y );
    for(let i = 0; i < nums.length; i++){
        let low = i+1 ;
        let high = nums.length-1;

        while(low < high){
            let sum = nums[i] + nums[low] + nums[high];
            if(closest > Math.abs(sum - target)){
                closest = Math.abs(sum- target);
                threeSum = sum;
            }
            if(sum > target){
                high--;
            }else{
                low++;
            }
        }
    }
    return threeSum;
}

const nums=[13,2,0,-14,-20,19,8,-5,-13,-3,20,15,20,5,13,14,-17,-7,12,-6,0,20,-19,-1,-15,-2,8,-2,-9,13,0,-3,-18,-9,-9,-19,17,-14,
    -19,-4,-16,2,0,9,5,-7,-4,20,18,9,0,12,-1,10,-17,-11,16,-13,-14,-3,0,2,-18,2,8,20,-15,3,-13,-12,-2,-19,11,11,-10,1,1,-10,
    -2,12,0,17,-19,-7,8,-19,-17,5,-5,-10,8,0,-12,4,19,2,0,12,14,-9,15,7,0,-16,-5,16,-12,0,2,-16,14,18,12,13,5,0,5,6];
const target = -59;

const nums1 =[-1,2,1,-4], target1 = 1;

//console.log(threeSumClosest(nums1,target1));

/*
* find all subsets
*/
const allSubsets =(nums,n)=>{
    const result =[];
    dfsSubsets(nums, result, [], 0 , n);
    return result;
}

const dfsSubsets =(nums, result, currentSubset , index, target) =>{
    //if(currentSubset.length == target){
        result.push(currentSubset);
    //}

    for(let i = index ; i < nums.length; i++){
        dfsSubsets(nums, result, currentSubset.concat(nums[i]), i+1,target);
    }
}

console.log(allSubsets(nums1,3));