/**
 * @param {number[]} arr
 * @return {number}
 */
/*
*stack approach
How many times a number will appear in the results(Not thinking about minimum)
for a element A[i], it will represents (i + 1) * (len - i + 1) times.
i + 1 means the subarrays whose end point is A[i]
(len - i + 1) means the subarrays whose start point is A[i].
How to solve this question:
res = sum(A[i] * f[i], A[i] is the number and f[i] means the number of subarrays where A[i] is the minimum in the subarray.
f[i] = left[i] * right[i], where left[i] is the left subarray numbers where A[i] is the last element and A[i] is minimum in current array and right[i] is the minimum and first element in the subarray.
How to get left[i] and right[i]. Consider leetcode question 901.
We need to consider a corner case, two elements have the same value.
*/
var sumSubarrayMins = function(arr) {
    let lr = new Array(arr.length), rl = new Array(arr.length), stacklr = [], stackrl = []
     let temp;
     for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
         temp = 1;
         while (stacklr.length && stacklr[stacklr.length - 1].value > arr[i]) {
             let item = stacklr.pop();
             temp += item.count;
         }
         lr[i] = temp;
         stacklr.push({ value: arr[i], count: lr[i]})
 
         temp = 1;
         while (stackrl.length && stackrl[stackrl.length - 1].value >= arr[j]) {
             let item = stackrl.pop();
             temp += item.count;
         }
         rl[j] = temp;
         stackrl.push({ value: arr[j], count: rl[j] });
     }
     //console.log(lr)
     //console.log(rl)
     let result = 0;
     for (let i = 0; i < arr.length; i++) {
         result += (arr[i] * lr[i] * rl[i]);
     }
     return result % (Math.pow(10, 9) + 7);
};

/*
*Brutal force to get the sub continue array
*/
 var sumSubarrayMinsBrutalForce = function(arr) {
    let sum = 0;
    let min = 0;
    for(let i = 0 ; i < arr.length ; i++){
        min = arr[i];
        for(let j = i ; j < arr.length ; j++){
            min = Math.min(min,arr[j]);
            sum+=min;
        }
    }

    return sum % 1000000007;
};

/*
*Generate all contiguous subarray. 
*/
const getSubarray = (arr) =>{
    const result =[];

    for(let i = 0 ; i < arr.length; i++){
        for(let j = i ; j < arr.length; j++){
            const subArr = [];
            for(let k = i ; k <= j ; k++){
                subArr.push(arr[k]);
            }
            result.push(subArr);
        }
    }

    return result;
} 

const arr =[3,1,2,4];
//console.log(getSubarray(arr));
console.log(sumSubarrayMins(arr));

