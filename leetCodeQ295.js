var MedianFinder = function() {
    this.median = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    var low = 0 ; 
    var high = this.median.length-1;
    
    while(low <= high)
    {
        var mid = Math.floor((high + low)/2);
        
        if(this.median[mid]  < num)
            {
                low = mid+1;
            }
        else
            {
                high =mid-1;
            }
    }
    
    // insert at  location trick for javascript array.
    this.median.splice(low, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    let sortMedian = this.median;
    if(sortMedian.length % 2  == 0) {
        let medianIndex = sortMedian.length /2 ; 
        return (sortMedian[medianIndex-1] + this.median[medianIndex] ) /2 ;
    }else{
        return this.median[Math.floor(this.median.length / 2)];
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
/*
 ["MedianFinder","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian"]
 [[],[6],[],[10],[],[2],[],[6],[],[5],[],[0],[],[6],[],[3],[],[1],[],[0],[],[0],[]]
 [null,null,6.00000,null,8.00000,null,6.00000,null,6.00000,null,6.00000,null,5.50000,null,6.00000,null,5.50000,null,5.00000,null,4.00000,null,3.00000]
*/

 const medianFinder = new MedianFinder();
 console.log(medianFinder.addNum(6));
 console.log(medianFinder.findMedian());
 console.log(medianFinder.addNum(10));
 console.log(medianFinder.findMedian());
 console.log(medianFinder.addNum(2));
 console.log(medianFinder.findMedian());
 console.log(medianFinder.addNum(6));
 console.log(medianFinder.findMedian());
 console.log(medianFinder.addNum(5));
 console.log(medianFinder.findMedian());
 console.log(medianFinder.addNum(0));
 console.log(medianFinder.findMedian());
 console.log(medianFinder.addNum(6));
 console.log(medianFinder.findMedian());
 console.log(medianFinder.addNum(3));
 console.log(medianFinder.findMedian());
 console.log(medianFinder.addNum(1));
 console.log(medianFinder.findMedian());
 console.log(medianFinder.addNum(0));
 console.log(medianFinder.findMedian());
 console.log(medianFinder.addNum(0));