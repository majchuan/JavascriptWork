/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    const arrCopy =arr.slice();
    const maxValIndex = arr.indexOf(arrCopy.sort((x,y) => x-y)[arr.length-1]);
    let up = false;
    let down = false;
    
    for(let i = 1 ; i <= maxValIndex ; i++){
        if(arr[i-1] < arr[i]){
            up = true;
        }else{
            up = false;
            break;
        }
    }
    
    for(let i= maxValIndex ; i < arr.length -1 ; i++){
        if(arr[i] > arr[i+1]){
            down = true;
        }else{
            down = false;
            break;
        }
    }
    
   return up && down ? true : false ;
};

const arr=[0,3,2,1];
const arr1=[3,7,6,4,3,0,1,0];
console.log(validMountainArray(arr1));