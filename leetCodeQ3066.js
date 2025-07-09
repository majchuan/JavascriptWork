/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    const minHeap = new MinPriorityQueue({priority : x => x});
    for(let num of nums){
        minHeap.enqueue(num);
    }

    let count = 0 ;
    while(minHeap.size() > 1 && minHeap.front().element < k){
        let x = minHeap.dequeue().element;
        let y = minHeap.dequeue().element;
        minHeap.enqueue(x*2 + y);
        count++
    }
    return count;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperationsSlowFunction = function(nums, k) {
    nums.sort((a,b)=> a - b);
    let x = 0;
    let y = 0;
    let count = 0;

    while(nums[0] < k){
        x = nums.shift();
        y = nums.shift();

        let result = x * 2 + y ;
        nums.unshift(result);
        for(let i = 1 ; i < nums.length; i++){
            if(nums[i-1] > nums[i]){
                let temp = nums[i-1];
                nums[i-1] = nums[i];
                nums[i] = temp;
            }else{
                break;
            }
        }
        count++;
    }

    return count;
};