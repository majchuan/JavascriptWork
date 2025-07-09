/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    let count = 0 ;
    const result = [];
    const cache_1 = new Array(rating.length+1).fill().map(() => new Array(4).fill(-1));
    const cache_2 = new Array(rating.length+1).fill().map(() => new Array(4).fill(-1));
    count += dfs_desc(rating, 0, result, cache_1);
    count += dfs_incre(rating, 0, result, cache_2);
    return count;
};

const dfs_desc=(rating, index, result, cache)=>{
    let count = 0 ;
    let length = result.length;

    if(result.length == 3){
        return 1;
    }

    if(cache[index][length] != -1){
        return cache[index][length];
    }
    for(let i = index ; i< rating.length; i++){
        if(result.length > 0 && result[result.length -1] > rating[i]){
            result.push(rating[i]);
            count += dfs_desc(rating, i+1 , result, cache);
            result.pop();
        }else if(result.length == 0){
            result.push(rating[i]);
            count += dfs_desc(rating, i+1 ,result, cache);
            result.pop();
        }
    }
    cache[index][length] = count;
    return count;
}

const dfs_incre=(rating, index, result, cache)=>{
    let count = 0 ;
    let length = result.length;

    if(result.length == 3){
        return 1;
    }
    if(cache[index][length] != -1){
        return cache[index][length];
    }
    for(let i = index ; i< rating.length; i++){
        if(result.length > 0 && result[result.length -1] < rating[i]){
            result.push(rating[i]);
            count += dfs_incre(rating, i+1 , result, cache);
            result.pop();
        }else if(result.length == 0){
            result.push(rating[i]);
            count += dfs_incre(rating, i+1 ,result, cache);
            result.pop();
        }
    }
    cache[index][length] = count;
    return count;
}
