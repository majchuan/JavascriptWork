const partitionOfArraySum = (nums) =>{
    const sum = nums.reduce((x,y) => x+y ,0);
    if(sum % 2 != 0) return false;
    const target = sum / 2 ;
    const partitionNums ={ 0:[]};

    for(const num of nums){
        for(const key in partitionNums){
            if(partitionNums[parseInt(key)+num]){
                partitionNums[parseInt(key)+num] = [...partitionNums[parseInt(key)+num], [...partitionNums[parseInt(key)],num]];
            }else{
                partitionNums[parseInt(key)+num] =[num];
            }
            //if(parseInt(key)+num === target) return true;
        }
    }

    return false;
}

const nums = [1,5,11,5];

console.log(partitionOfArraySum(nums));