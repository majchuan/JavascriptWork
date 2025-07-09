/*
*438.Find All Anagrams in a String
*/
const findAnagrams = (s,p) =>{
    let pLength = p.length;
    let targetStr = {};
    for(let i= 0; i < p.length ; i++){
        targetStr[p[i]] ? targetStr[p[i]]++ : targetStr[p[i]]=1 ;
    }
    const anagrams = [];
    for(let i =0 ; i <= s.length - pLength; i++){
        const substring = s.substring(i, i+pLength);
        if(isAllContains(substring, targetStr)){
            anagrams.push(i);
        }

    }

    return anagrams;
}

const isAllContains = (destStr,targetStr) =>{
    testStr = {};
    for(let i=0; i< destStr.length ; i++){
        testStr[destStr[i]] ? testStr[destStr[i]]++ : testStr[destStr[i]]=1;
    }
    let keyLength = Object.keys(testStr).length;
    for(let item in testStr){
        if(targetStr[item] != testStr[item]){
            return false;
        }
    }

    return true;
}

const s="cbaebabacd";
const p="abc";
console.log(findAnagrams(s,p));

/*
*934. Shortest Bridge
*/

/*
*416. Partition Equal Subset Sum
*/

const canPartition =(nums)=>{
    nums.sort((x,y) => x-y);
    console.log(nums);
    mid = Math.floor(nums.length /2 );
    return subSetSum(nums,mid);
}

const subSetSum=(nums,mid)=>{
    if(mid == nums.length - 1 ){
        let leftSubset =nums.slice(0,mid).reduce((x,y)=> x+y,0);
        let rightSubset = nums.slice(mid, nums.length).reduce((x,y)=> x+y,0); 
        if(leftSubset != rightSubset){
            return false ;
        }else{
            return true;
        }
    }else{
        let leftSubset =nums.slice(0,mid).reduce((x,y)=> x+y,0);
        let rightSubset = nums.slice(mid, nums.length).reduce((x,y)=> x+y,0); 
        if(leftSubset < rightSubset) {
            mid = mid+1;
            return subSetSum(nums,mid);
        }else if(leftSubset == rightSubset){
            return true;
        }else{
            return false;
        }
    }

}

const nums=[1,1,1,1,1]
console.log(canPartition(nums));
/*
var canPartition = function(nums) {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    if(sum % 2 !== 0) return false;
    sum /= 2;
    let dp = new Array(sum + 1).fill(false);
    dp[0] = true;
    
    for(let num of nums) {
        for(let i = sum; i >= num; i--){
            dp[i] = dp[i] || dp[i - num];
        }
    }
    
    return dp[sum];
};
*/

const rotation =(rotationStr, rotationFactor) =>{
    const az =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const AZ = az.map(x=> x.toUpperCase());
    const regexLowercase =/[a-z]/g;
    const regexHighcase = /[A-Z]/g
    const regexNumber = /[0-9]/g;
    if(rotationStr.match(regexLowercase)){
      let index = az.findIndex(x => x== rotationStr);
      let moveforwardIndex = (index+rotationFactor) % 26;
      rotationStr = az[moveforwardIndex];
    }
    if(rotationStr.match(regexHighcase)){
      let index = AZ.findIndex(x => x== rotationStr);
      let moveforwardIndex = (index+rotationFactor) % 26;
      rotationStr = AZ[moveforwardIndex];
    }
    if(rotationStr.match(regexNumber)){
      let num = parseInt(rotationStr);
      let numMoveforward = rotationFactor % 10 ;
      rotationStr = ((num+numMoveforward) % 10).toString();
    }
    
    return rotationStr;
  }
  
  function rotationalCipher(input, rotationFactor) {
    // Write your code here
    let result ="";
    for(let i=0; i<input.length;i++){
        result+=rotation(input[i],rotationFactor);
    }
    return result;
  }
  
  const testString ="Epp-gsrzsCw-3-fi:Epivx5."

  console.log(rotationalCipher(testString,3))


  const countSubarrays=(arr) => {
    // Write your code here
    const subArray=[];
    for(let i=0 ; i < arr.length; i++){
      let midIndex = i;
      let startIndex = 0;
      let endIndex = arr.length;
      let leftArr =[];
      let rightArr=[];
      let result = [];
      while(startIndex < midIndex){
        for(let i = startIndex; i < midIndex ; i++){
          if(arr[i] > arr[midIndex]){
            leftArr=[];
          }else{
            leftArr.push(arr[i]);
          }
        }
        if(leftArr.length>0){
          result.push(leftArr);
        }
        startIndex++;
      }
      
      while(endIndex > midIndex){
        for(let i= midIndex+1 ; i< endIndex ; i++){
          if(arr[i] > arr[midIndex]){
            rightArr=[]
          }else{
            rightArr.push(arr[i]);
          }
        }
        if(rightArr.length>0){
          result.push(rightArr);
        }
        endIndex--;
      }
     subArray[i] = result.length; 
    }
    return subArray;
  }
  
  const arr=[3,4,1,6,2];
  console.log(countSubarrays(arr));

  
class Node {
    constructor(x) {
      this.data = x;
      this.next = null;
    }
}
  
  // Add any helper functions you may need here
function reverse(head) {
// Write your code here
    const startNode = head;
    let evenArr =[];
    const result =[];
    while(head != null){
        if(head.data % 2 == 0){
            evenArr.push(head);;
        }else{
            if(evenArr.length > 0){
                result.push(evenArr);
                evenArr=[]
            }
        }
        head = head.next;
    }
    if(evenArr.length>0){
        result.push(evenArr);
    }

    result.forEach(element =>{
        let lowerIndex = 0;
        let higherIndex = element.length -1;
        while(lowerIndex < higherIndex){
            let temp = element[lowerIndex].data;
            element[lowerIndex].data = element[higherIndex].data;
            element[higherIndex].data= temp;
            lowerIndex++;
            higherIndex--;
        }
    });
    return startNode;
}

const print = (head) =>{
    let result = "["
    while(head != null){
        result += head.data +" ,";
        head = head.next;
    }
    result += "]";
    return result;
}

const head = new Node(2);
head.next = new Node(18);
head.next.next= new Node(24);
head.next.next.next = new Node(3);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next = new Node(9);
head.next.next.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next.next.next = new Node(12);

console.log(print(reverse(head)));
  Number.MIN_SAFE_INTEGER

const findPositions=(arr, x) => {
// Write your code here
    let result =[];
    let originalArr =[];
    for(let i =0; i< x ; i++){
        let arrLength =  x > arr.length ? arr.length : x ;
        let popArr = []
        let maxValue = 0;
        let maxIndex = 0;
        for(let j= 0; j < arrLength; j++){
            if(arr[j] > maxValue){
                maxValue = arr[j];
                maxIndex =j;
            }
            
            popArr.push(arr[j]==0 ? 0 : arr[j]-1);
        }
        result.push(maxIndex);
        arr.splice(0,popArr.length);
        popArr.splice(maxIndex,1);
        arr = [...arr, ...popArr];
    }
    return result;
}

const findPostionsRecursive =(arr,x) =>{
    x = Math.min(x,arr.length);
    let result = [];
    let max,maxPos=0;
    let start=0;
    let readCount;
    for(let i=0;i<x;i++)
    {
        readCount= Math.min(x,arr.length-i);
        maxPos=start;
        max=arr[maxPos];
        while(readCount >0 )
        {
            if(arr[start] != -1)
            {
                if(max < arr[start])
                {
                    max = arr[start];
                    maxPos = start;
                }
                
                if(arr[start] > 0)
                {
                    arr[start] = arr[start] -1;
                }
                readCount--;
            }
            start++;
            start = start % arr.length;

        }
        arr[maxPos] = -1;
        result[i] =  maxPos+1;
    
    }
    return result;
}

const x_1 = 5;
const x_2 = 4;
const arr_1 = [1, 2, 2, 3, 4, 5];
const expected_1 = [5, 6, 4, 1, 2 ];
const arr_2 = [2, 4, 2, 4, 3, 1, 2, 2, 3, 4, 3, 4, 4];
const output_1 = findPostionsRecursive(arr_2, x_2);
console.log("find position arr",output_1);