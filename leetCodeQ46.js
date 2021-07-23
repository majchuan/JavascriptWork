/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums){
    const results = [];
    recursivePermute(nums,0, results);
    return results;
};

const recursivePermute =(nums, index ,results)=>{
    if(index == nums.length -1) {
        results.push(nums.slice(0,2));
    }

    for(let i = index ; i < nums.length; i++){
        swap(nums, i, index);
        recursivePermute(nums,index+1,results);
        swap(nums, i, index);
    }

}

const swap = (nums, leftIndex, rightIndex) =>{
    let temp = 0 ;
    temp = nums[leftIndex];
    nums[leftIndex] = nums[rightIndex];
    nums[rightIndex] = temp;
}

const nums =[1,2,3];
console.log(permute(nums));
