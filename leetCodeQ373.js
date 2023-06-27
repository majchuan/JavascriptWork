/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
const {PriorityQueue,MinPriorityQueue, MaxPriorityQueue} = require('@datastructures-js/priority-queue');

var kSmallestPairs = function(nums1, nums2, k) {
    const minHeap = new MinPriorityQueue((x) => x[0]);

    for(let i = 0 ; i < nums1.length ; i++){
        const num1 = nums1[i];
        const num2 = nums2[0];
        minHeap.enqueue([num1 + num2, i, 0]);
    }

    const n = nums2.length ;
    const result = [];

    while(k > 0 && minHeap.isEmpty() == false){
        const [sum, index1, index2] = minHeap.dequeue();

        result.push([nums1[index1], nums2[index2]]);

        if(result.length == k) return result;

        if(index2 < n - 1 ){
            minHeap.enqueue([ nums1[index1] + nums2[index2+1], index1, index2+1]);
        }
    }

    return result;
};

const nums1 = [1,5,11] , nums2=[2,3,5] , k = 3;
console.log(kSmallestPairs(nums1, nums2, k));


