/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScoreMinPriorityQueue = function(nums1, nums2, k) {
    let result = 0;
    let totalSum = 0;
    let heap = new MinPriorityQueue({priority: (element) => element});

    const merged = nums1.map((nums1Element, i) => [nums1Element, nums2[i]])
    merged.sort((a,b) => b[1] - a[1])

    for (const [nums1Element, nums2Element] of merged){
        
        if(heap.size() === k){
            totalSum -= heap.dequeue().element
        }

        totalSum += nums1Element
        heap.enqueue(nums1Element)

        if(heap.size() === k){
            result = Math.max(result, totalSum * nums2Element)
        }

    }

    return result
};


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
/*
*Brutal force
*/
var maxScoreDFS = function(nums1, nums2, k) {
    return dfs(nums1, nums2, 0 , [], k);
};

const dfs=(nums1, nums2, index, curr , k) =>{
    let maxResult = 0 ;
    if(curr.length == k){
        let nums1Sum = 0;
        let minNums2 = Number.MAX_SAFE_INTEGER ;
        for(let item of curr){
            nums1Sum += item[0];
            minNums2 = Math.min(minNums2, nums2[item[1]]);
        }
        return nums1Sum * minNums2;
    }
    for(let i = index ; i < nums1.length ; i++){
        curr.push([nums1[i], i]);
        maxResult = Math.max(maxResult, dfs(nums1,nums2, i+1, curr, k));
        curr.pop();
    }

    return maxResult;
}

const nums1=[93,463,179,2488,619,2006,1561,137,53,1765,2304,1459,1768,450,1938,2054,466,331,670,1830,1550,1534,2164,1280,
    2277,2312,1509,867,2223,1482,2379,1032,359,1746,966,232,67,1203,2474,944,1740,1775,1799,1156,1982,1416,511,1167,1334,2344];
const nums2=[345,229,976,2086,567,726,1640,2451,1829,77,1631,306,2032,2497,551,2005,2009,1855,1685,729,2498,2204,588,474,693,
    30,2051,1126,1293,1378,1693,1995,2188,1284,1414,1618,2005,1005,1890,30,895,155,526,682,2454,278,999,1417,1682,995];
const k = 42
console.log(maxScore(nums1,nums2,k));