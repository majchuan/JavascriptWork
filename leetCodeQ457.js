/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var circularArrayLoop = function(nums) {
    for(let i = 0 ; i < nums.length; i++){
        if(nums[i] == 0) continue;
        let slow = i; 
        let fast =calSeq(nums,i);
        
        while(fast != slow && nums[fast]*nums[i] > 0 && nums[calSeq(nums,fast)] * nums[i] > 0){
            slow = calSeq(nums,slow);
            fast = calSeq(nums,calSeq(nums,fast));
            if(slow == fast){
                if(slow == calSeq(nums,slow) ){
                    //return false;
                    break;
                }
                return true;
            }
        }
        
        while(nums[slow] * nums[i] > 0){
            let next = calSeq(nums,slow);
            nums[slow] = 0;
            slow = next;
        }
        
    }
    
    return false;
};
    
const calSeq =(nums,index) =>{
    index = ((index + nums[index]) % nums.length + nums.length)%nums.length;
    return index;
}

const nums = [-2,1,-1,-2,-2], nums1=[-1,-2,-3,-4,-5], nums2=[2,-1,1,2,2], nums3 = [-1,2];
console.log(circularArrayLoop(nums1));