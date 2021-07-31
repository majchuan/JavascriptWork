const partitionOfArraySum = (nums) =>{
    const sum = nums.reduce((x,y) => x+y ,0);
    if(sum % 2 != 0) return false;
    const target = sum / 2 ;
    const partitionNums ={ 0:true};

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



/*
* new approach 
*/

const canPartitionOfNums = (nums) =>{
    let partitionOfNums = nums.reduce((x,y) => x+y,0);
    if(partitionOfNums % 2 != 0) return false ;
    let halfSum = partitionOfNums / 2; 
    let hash_nums_sum = {0:true};

    for(let item of nums){
        for(let key in hash_nums_sum){
            if(halfSum == (item + parseInt(key))){
                return true;
            }
            hash_nums_sum[item+parseInt(key)] = true;
        }
    }

    return false;
}

console.log(canPartitionOfNums([1,1,1,1,1,1]));