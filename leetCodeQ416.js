const partitionOfArraySum = (nums) =>{
    const sum = nums.reduce((x,y) => x+y ,0);
    if(sum % 2 != 0) return false;
    const target = sum / 2 ;
    const partitionNums ={ 0:ture};

    for(const num of nums){
        for(const key in partitionNums){
            if(parseInt(key) + num == target){
                return true ;
            }else{
                partitionNums[parseInt(key)+num] = true;
            }
        }
    }

    return false;
}

const nums = [1,5,11,5];
const nums1 = [1,2,3,5];

console.log(partitionOfArraySum(nums));

const canPartition =(nums)=>{
    nums.sort((x,y) => x-y);
    console.log(nums);
    mid = Math.floor(nums.length /2 );
    return subSetSum(nums,mid);
}

const subSetSum=(nums,mid)=>{
    if(mid == nums.length - 1 ){
        let leftSubset =nums.slice(0,mid).reduce((x,y)=> x+y,0);
        let rightSubset = nums.slice(mid, nums.length).reduce((x,y)=> x+y,0); 
        if(leftSubset != rightSubset){
            return false ;
        }else{
            return true;
        }
    }else{
        let leftSubset =nums.slice(0,mid).reduce((x,y)=> x+y,0);
        let rightSubset = nums.slice(mid, nums.length).reduce((x,y)=> x+y,0); 
        if(leftSubset < rightSubset) {
            mid = mid+1;
            return subSetSum(nums,mid);
        }else if(leftSubset == rightSubset){
            return true;
        }else{
            return false;
        }
    }

}

const nums=[1,1,1,1,1]
console.log(canPartition(nums));