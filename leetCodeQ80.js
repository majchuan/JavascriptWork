/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let slow = 0 ;
    let fast = 1 ;
    let counter = 0;
    
    while(fast < nums.length && nums[fast] !="_"){
        if(nums[slow] == nums[fast]){
            if(fast - slow == 2){
                // move one step up array
                moveNum(nums,fast);
            }else{
                fast++;
            }
        }else{
            slow = fast;
            fast++;
        }   
    }
    
    return nums.filter(x => x !="_").length;
};

const moveNum = (nums, startIndex) =>{
    for(let i = startIndex ; i < nums.length; i++){
        if(i != nums.length-1){
            nums[i] = nums[i+1];   
        }else{
            nums[i] = "_";
        }
    }
    
}

var removeDuplicatesFaster = function (nums) {
    let idx = 0;
    for (let i = 0; i < nums.length; i++) {
      if (i < 2 || nums[i] > nums[idx - 2]) {
        nums[idx] = nums[i];
        idx++;
      }
    }
  
    return idx;
  };


const nums=[0,0,0,0,0], nums1=[1,1,1,2,2,3];
//console.log(removeDuplicates(nums));
console.log(removeDuplicatesFaster(nums1));
