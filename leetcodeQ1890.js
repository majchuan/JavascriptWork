/**
 * @param {string[]} nums
 * @return {string}
 */
 var findDifferentBinaryString = function(nums) {
    for(let i = 0; i <= nums.length; i++){
        let result =  (i>>>0).toString(2);
        if(nums.length - result.length > 0){
            const padding = new Array(nums.length - result.length).fill(0).join("");
            result = padding+result;
        }       
        if(nums.includes(result) == false){
           return result;
        }
        
    }
    
    return null;
};
