/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/*
*Two pointers 
*/
 var moveZeroesTwoPointer = function(nums) {
    // two pointers
      let slow = 0;
      let faster = 0;
      while(faster < nums.length){
          if(nums[faster] != 0){
              if(slow != faster){
                  [nums[slow],nums[faster]] =[nums[faster],nums[slow]];
                  slow++;
              }else{
                  slow++;
              }
          }
          faster++;
      }
  };

const nums = [0,1,0,3,12];

console.log(moveZeroes(nums));

/*
*sliding windows algothrim.
*/

const maxSum = (nums,k) =>{
    let maxSum = 0 ;
    let sum = 0 ;

    for(let i = 0; i < k; i++){
        sum += nums[i];
    }

    for(let i = k ; i < nums.length; i++){
        sum += nums[i] - nums[i-k];
        maxSum =Math.max(maxSum,sum);
    }

    return maxSum ;
}

const arr =[100,300,200,400,100,900,500];

console.log(maxSum(arr,4));

const maxSumBrutul = (nums, k) =>{
    let sum = 0 ;
    let maxSum = 0 ;
    for(let i =0 ;i < nums.length; i++){
        for(let j = i+1 ; j < nums.length; j++){
            sum = nums[i] + nums[j];
            maxSum = Math.max(maxSum, sum) ;
        }
    }

    return maxSum ;
}

console.log(maxSumBrutul(arr,2));

/*
* 
minimum windows-substring
  input: S = "ADOBECODEBANC", T = "ABC"
  output: "BANC"
*/

const minimumSubstring =(s,t) =>{
    let counter = t.length ; 
    let left=0, right = 0 
    let hash_t = {};
    let maxLength = Number.MAX_SAFE_INTEGER ;
    let subStr = "";
    for(let i = 0 ; i < t.length ; i++){
        hash_t[t[i]] ? hash_t[t[i]]++: hash_t[t[i]] = 1;
    }

    while(right < s.length) {
        if(hash_t[s[right]]){
            counter--;
        }
        hash_t[s[right]]--;

        while(counter == 0){
            if(right - left < maxLength){
                maxLength = right -left;
                subStr = s.substring(left, right+1);
            }

            hash_t[s[left]]++;
            if(hash_t[s[left]]>0){
                counter++;
            }
            left++;
        }
        right++;
    }

    return maxLength  == Number.MAX_SAFE_INTEGER ? "" : subStr;
}
const S = "ADOBECODEBANC", T = "ABC" ;
console.log("minimum substring is ",minimumSubstring(S,T));

/*
*Maxmium subarray 
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/
const maxSubarray = (nums) =>{
    let k = nums.length ; 
    let maxSum = 0 ;
    for(let i = 1 ; i <= k ; i++){
        let sum = 0;
        let j = 0;
        for(j =0 ; j < i; j++){
            sum += nums[j];
        }

        for(let t =j ; t < nums.length ; t++){
            sum += nums[t] - nums[t-i];
            maxSum =Math.max(maxSum, sum);
        }
    }

    return maxSum ;
}

const numsMaxSubArray = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubarray(numsMaxSubArray));

const maxSum_1 = (nums) =>{
    let maxSum = 0 ;
    let sum = 0 ;

    for(let i = 0 ; i < nums.length; i++){
        sum = Math.max(nums[i],sum+nums[i]);
        maxSum =Math.max(maxSum,sum);
    }

    return maxSum ;
}

const arr_1 =[100,300,200,-900,100,900,500];
console.log(maxSum_1(arr_1));

/*
*
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
*/

const longestSubStringLength = (s) =>{
    let left = 0, right = 0;
    let hash_s = {};
    let maxLength = Number.MIN_SAFE_INTEGER;
    let subStr ="";
    while(right < s.length) {
        if(hash_s[s[right]] == null){
            hash_s[s[right]] = 1 ;
            right++;
        }else{
            if(right -left > maxLength){
                maxLength = right-left;
                subStr = s.substring(left, right);
            }
            if(hash_s[s[left]]){
                delete hash_s[s[left]];
            }
            left++;
        }
    }

    if(right - left > maxLength){
        maxLength = right - left ;
        subStr = s.substring(left,right);
    }

    return subStr.length ; 
}

const s_1 = "abcabcbb"
console.log(longestSubStringLength(s_1));