import {
    MinPriorityQueue
} from '@datastructures-js/priority-queue';

/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function(nums) {
    const nums_index=[];
    const marked = [];
    const n = nums.length;
    for(let i = 0 ; i < n; i++){
        nums_index.push([nums[i], i]);
        marked[i] = 0
    }
    let score = 0;
    nums_index.sort((a,b) => a[0] - b[0]);
    
    for(const [num, currIndex] of nums_index){
        if(marked[currIndex] == 0){
            score += num;
            if(currIndex - 1 >= 0){
                marked[currIndex-1] = 1 ;
            }

            if(currIndex+1 < n){
                marked[currIndex+1]= 1 ;
            }
        }
    }

    return score;
}


/**
 * @param {number[]} nums
 * @return {number}
 */
var findScoreFastApproach = function(nums) {
    if (nums.length === 1) {
       return nums[0];
   }
   let sum = 0;

   for (let i = 0; i < nums.length; i++) {
       const num = nums[i];
       const num2 = nums[i + 1];

       // if current number is a peak
       if (!num2 || num <= num2) {
           sum += num;
           nums[i] = -1;
           nums[i + 1] = -1;

           // go back until meet marked index
           let j = i - 2;
           while (j >= 0 && nums[j] !== -1) {
               sum += nums[j];
               j -= 2;
           }
           i++;
       }
   }
   return sum;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var findScoreMinPriorityQueue = function (nums) {
    const n = nums.length;
    const marked = new Array(n).fill(0);

    // Create a MinPriorityQueue, where each element is [value, index]
    const minQueue = new MinPriorityQueue();

    // Populate the queue
    for (let i = 0; i < n; i++) {
        minQueue.enqueue([nums[i],i]);
    }

    let score = 0;

    while (!minQueue.isEmpty()) {
        const [num, currIndex] = minQueue.dequeue();

        if (marked[currIndex] === 0) {
            score += num;

            // Mark the current index and its neighbors
            if (currIndex - 1 >= 0) marked[currIndex - 1] = 1;
            if (currIndex + 1 < n) marked[currIndex + 1] = 1;
        }
    }

    return score;
};

console.log(findScoreMinPriorityQueue([5,1,1,7,2,4]))