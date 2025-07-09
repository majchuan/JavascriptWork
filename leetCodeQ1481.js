/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
 var findLeastNumOfUniqueInts = function(arr, k) {
    const hash_arr={};
    for(let i = 0 ; i < arr.length ; i++){
        hash_arr[arr[i]] ? hash_arr[arr[i]]++ : hash_arr[arr[i]] = 1;
    }

    const keys = Object.keys(hash_arr).sort((a,b)=>{
        if(hash_arr[a] - hash_arr[b] == 0){
            return a- b;
        }
        return hash_arr[a] - hash_arr[b];
    });

    let length = keys.length;

    for(let key of keys){
        let count = hash_arr[key];
        k = k - count ;
        if(k < 0){
            console.log(length);
            return length;
        }else{
            length--;
        }
    }

    return 0;
};