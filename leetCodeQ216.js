/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
 var combinationSum3 = function(k, n) {
    const curr = [];
    const result =[];
    
    let maxSum = 0 , minSum = 0 ;
    
    for(let i = 9 ; i > (9-k) ; i--){
        maxSum += i;
    }
    
    for(let i =1 ; i< k; i++){
        minSum+=i;
    }
    
    if( n< minSum || n > maxSum) return result ; 

    
    findAllCombination(k,n,1,curr,result, 0);

    return result;
};

const findAllCombination = (k,n, index, curr,result , sum ) =>{
    
    if(curr.length == k && sum == n){
        result.push(curr);
    }
    
    for(let i = index ; i <= 9; i++ ){
        curr.push(i);
        sum += i ;
        findAllCombination(k, n,i+1 , curr.slice(), result, sum);
        sum -= i;
        curr.pop();
    }
}