/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    const answer=[];
    for(let i=0 ; i <nums.length ; i++){
        const subNums = nums.slice();
        subNums.splice(i,1);
        const result = subNums.reduce((x,y)=> x*y,1);
        answer.push(result);
    }
    
    return answer;
};

const nums = [5,2,3,4];

//console.log(productExceptSelf(nums));

const productExceptSelf_1 = (nums) =>{
    const result = [];
    let productSoFar = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = productSoFar
        productSoFar *= nums[i]
    }
    productSoFar = 1
    for (let j = nums.length-1; j >= 0; j--) {
        result[j] *= productSoFar
        productSoFar *= nums[j]
    }
    return result;
}

console.log(productExceptSelf_1(nums));

const sumExceptSelf_1 = (nums) =>{
    const result = [];
    let productSoFar = 0;
    for (let i = 0; i < nums.length; i++) {
        result[i] = productSoFar
        productSoFar += nums[i]
    }
    productSoFar = 0;
    for (let j = nums.length-1; j >= 0; j--) {
        result[j] += productSoFar
        productSoFar += nums[j]
    }
    return result;
}

//console.log(sumExceptSelf_1(nums));

//console.log((1/90).toString().split('.'));