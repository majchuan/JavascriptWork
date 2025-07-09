/**
 * @param {number[][]} nums
 * @return {int}
 */
var minTransfers = function(nums) {
    const hash_nums={};
    for(let i = 0; i < nums.length ; i++){
        let given = nums[i][0];
        let get = nums[i][1];
        let amount = nums[i][2];

        if(hash_nums[given]== null){
            hash_nums[given] = -amount ;
        }else{
            hash_nums[given] = hash_nums[given] - amount;
        }

        if(hash_nums[get]==null){
            hash_nums[get] = amount;
        }else{
            hash_nums[get] = hash_nums[get] + amount; 
        }
    }

    // remove all 0 debit people from array.
    const debits = Object.values(hash_nums).filter(x => x != 0);
    return dfs(debits, 0);
};

const dfs=(debits, index) =>{
    let minTrans = Number.MAX_SAFE_INTEGER;
    // skip settle debits, in debits[index] = 0 ;
    while(index < debits.length && debits[index]==0){
        index++;
    }

    for(let i = index ; i< debits.length; i++){
        if((debits[index] < 0 && debits[i] > 0) || (debits[index] > 0 && debits[i]<0 ) ){
            debits[i] += debits[index];
            minTrans = Math.min(minTrans, dfs(debits, index + 1)+1);
            debits[i] -= debits[index];
        }
    }

    if(minTrans != Number.MAX_SAFE_INTEGER){
        return minTrans;
    }else{
        return 0;
    }


}

const nums =[[0,1,10], [1,0,1], [1,2,5], [2,0,5]];

console.log(minTransfers(nums));