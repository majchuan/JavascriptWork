/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let result = [];
    backTrack(s,0,[], result);    
    return result;
};

const checkPalindrome = (s) =>{
    let start = 0 ;
    let end = s.length -1 ;
    while(start < end){
        if(s[start] != s[end]){
            return false;
        }
        start++;
        end--;
    }

    return true;
}

/*
*substring issue. or continues array
*/

const backTrack =(s,start , subStrList, result) =>{
    //if(start == (s.length)){
        //console.log(subStrList) ;
        result.push(subStrList);
    //}

    for(let i = start ; i< s.length ; i++){
        let subStrs = s.slice(start , i+1);
        if(checkPalindrome(subStrs)){
            //console.log([...subStrList,subStrs]);
            backTrack(s, i+1 , [...subStrList, subStrs], result);
            //backTrack(s,i+1,subStrList.concat(subStrs),result);
            //backTrack(s,i+1, subStrList.concat(s[i]),result);
        }
    }

}

const s="aab";
console.log(partition(s));

/*
* find continues array 2 sum 
* nums=[1,2,3,4,5] , k =2 
*/

const backTrackSum = (nums,start , currentNums,result) =>{
    if(start == nums.length){
        console.log(currentNums.filter(x => x.length == 3).pop());
        result.push(currentNums.filter( x => x.length == 3).reduce((x,y) => x+y, 0));
    }
    //result.push(currentNums);

    for(let i = start ; i< nums.length; i++){
        backTrackSum(nums, i+1, [...currentNums, nums.slice(start,i+1)], result);
    }
}

const nums_continues=[1,2,3,4,5];
const output=[]
//console.log(backTrackSum(nums_continues, 0 , [],output));
//console.log(output);