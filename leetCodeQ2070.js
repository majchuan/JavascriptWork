/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function(items, queries) {
    const hash_max_beauty = {};
    let answer = [] ;
    let max = 0 ; 
    items.sort((a,b) =>a[0] - b[0]);

    for(let item of items){
        max = Math.max(max, item[1]);
        hash_max_beauty[item[0]] = max;
    }
    const price_keys = Object.keys(hash_max_beauty);

    for(let query of queries){
        answer.push(binarySearch(hash_max_beauty, price_keys, query));
    }

    return answer;
};

const binarySearch=(hash_max_beauty, price_keys ,query) =>{
    let left = 0 ;
    let right = price_keys.length -1 ;
    let maxBeauty = 0 ;
    while(left <= right){
        let mid = Math.floor((left+right)/2);

        if(price_keys[mid] > query ){
            right = mid-1; 
        }else{
            maxBeauty = Math.max(maxBeauty, hash_max_beauty[price_keys[mid]]);
            left = mid+1;
        }
    }

    return maxBeauty;
}
