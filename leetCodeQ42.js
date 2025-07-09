/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    let left =0 ;
    let right = height.length -1 ;
    let result = 0;
    while(left < right){
        let minValue = Math.min(height[left], height[right]);
        if(height[left] == minValue){
            left++;
            while(left < right && height[left] < minValue){
                result += minValue - height[left];
                left++;
            }
        }else{
            right--;
            while(left < right && height[right] < minValue){
                result += minValue - height[right];
                right--;
            }
        }
    }
    
    return result;
};

const height=[0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(height));