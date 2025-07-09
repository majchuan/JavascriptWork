/*
*Find all sub array of an array.
*/
const findAllSubArray = (nums, start ,end) =>{
    if(nums.length == end){
        return;
    }else if(start > end){
        findAllSubArray(nums, 0, end+1);
    }else{
        let curr = [];
        for(let i = start ; i <= end ; i++){
            curr.push(nums[i]);
        }
        console.log(curr);
        findAllSubArray(nums,start+1,end);
    }
    return;
}

const nums=[1,2,3,4]
console.log(findAllSubArray(nums, 0 , 0));
