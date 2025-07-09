/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function(candies, k) {
    let totalCandies = candies.reduce((a,b)=> a+ b ,0);
    let minCandies = 1; 
    if(totalCandies < k ) return 0 ;
    if(totalCandies == k) return 1 ;

    while( minCandies < totalCandies){
        let mid = Math.ceil((minCandies + totalCandies)/2);
        if(checkCandy(candies, mid, k)){
            minCandies = mid;
        }else{
            totalCandies = mid - 1 ;
        }
    }

    return minCandies ;
};

const checkCandy =(candies, mid, k)=>{
    let totalKid = 0;
    for(let candy of candies){
        totalKid += Math.floor(candy/mid);
    }
    
    return totalKid >= k;
}