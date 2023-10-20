/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
    const visited = new Set();

    let result = 0 ;

    for(let i = 0 ; i < nums.length; i++){
        if(visited.has(i) == false){
            let start = nums[i];
            let count = 0;

            do{
                start = nums[start];
                count++;
                visited.add(start);
            }while(start != nums[i]);

            result = Math.max(result, count);
        }
    }

    return result;
};