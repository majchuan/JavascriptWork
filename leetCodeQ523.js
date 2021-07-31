/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 const checkSubarraySum = (nums, k)=>{
    let sum = 0
    const hash = {}
    hash[0] = -1
    
    for (let i = 0; i<nums.length; i++) {
        sum += nums[i]
        
        if (k!=0) sum %= k
        
        if ( hash[sum] !== undefined   ) {
            if(i-hash[sum]>1) return true
        } else {
            hash[sum] = i
        }
    }
    
    return false
};

const nums=[23,2,4,6,7];
const k = 6;
const nums1=[18,373,97,499,525,170,133,376,77,279,257,168,319,335,237,36,236,41,360,131,172,279,405,236,296,377,348,411,135,411,273,230,103,274,
    211,427,101,243,31,485,282,40,28,81,6,318,502,521,140,110,467,248,404,107,108,129,113,113,333,83,242,194,112,446,463,102,145,107,73,47,53,455,
    301,150,314,13,180,119,234,509,199,503,69,224,228,427,309,497,342,329,518,35,425,343,417,509,85,234,426,334];
const k1=250;

const dfsSubArray = (nums, result , currentNums ,index,k) =>{

    //result.push(currentNums.filter(x => x.length >=2));
    currentNums.filter(x => x.length>=2).forEach(x => {
        const sum = x.reduce((x,y) => x+y,0);
        if(sum % 6 == 0){
            result.push(sum);
        }
    })

    for(let i = index ; i< nums.length; i++){
        dfsSubArray(nums, result, [...currentNums,nums.slice(index, i+1) ], i+1,k);
    }
}

console.log(checkSubarraySum(nums,k));

/*
*Assume we are looking for sum of continue subarry k = 6 
*/

const findSubArraySum = (nums, k) =>{
    let sum = 0;
    let hash_nums={0:-1};
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        if(hash_nums[sum - k]){
            console.log(hash_nums);
            return true;
        }else{
            hash_nums[sum] = i ;
        }
    }
    return false;
}

//console.log(findSubArraySum(nums,k));

const findSubArrayDivide =(nums, k) => {
    let sum = 0;
    let hash_nums={0:-1};
    for(let i =0 ; i < nums.length; i++){
        sum += nums[i] ;
        if(k >0){
            sum = sum % k ;
        }

        if(hash_nums[sum] !=null ){
            if(i - hash_nums[sum] > 1){
                return true;
            }
        }else{
            hash_nums[sum] = i;
        }
    }

    return false;
}

const nums_div = [1,2,3] , k_div =5;
console.log(findSubArrayDivide(nums_div,k_div));