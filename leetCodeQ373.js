/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    const minHeap = new MinPriorityQueue({priority : x => x[0]});

    for(let i = 0 ; i < nums1.length ; i++){
        const num1 = nums1[i];
        const num2 = nums2[0];
        minHeap.enqueue([num1 + num2, i, 0]);
    }

    const n = nums2.length ;
    const result = [];

    while(k > 0 && minHeap.isEmpty() == false){
        const [sum, index1, index2] = minHeap.dequeue().element;

        result.push([nums1[index1], nums2[index2]]);

        if(result.length == k) return result;

        if(index2 < n - 1 ){
            minHeap.enqueue([ nums1[index1] + nums2[index2+1], index1, index2+1]);
        }
    }

    return result;
};

//MinHeap in javascript;

