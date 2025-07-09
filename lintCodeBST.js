/*
*Minimum distance between bst nodes
*given a binary search tree with the root node, return minimum difference between
*the values of any two different nodes in the tree.
input: root={2,1}
*/

const tree1 =[
    {value :4 , left :2 , right : 6},
    {value :2 , left :1 , right : 3},
    {value :6 , left :null , right :null},
    {value :1 , left :null, right:null},
    {value :3 , left :null, right:null}
];

const tree =[
    {value : 2, left :1 , right : null},
    {value : 1, left :null, right: null}
];
const miniDiffInBST = (root) =>{
    let miniLeftDiffLength = Number.MAX_SAFE_INTEGER ;
    let miniRightDiffLength = Number.MAX_SAFE_INTEGER;
    if(root.left == null && root.right == null){
        return miniDiffLength;
    }
    if(root.left){
        let leftNode = tree.find(x => x.value == root.left);
        if(miniLeftDiffLength > Math.abs(root.value - leftNode.value)){
            miniLeftDiffLength = Math.abs(root.value - leftNode.value);
        }
        miniLeftDiffLength = miniDiff(leftNode, miniLeftDiffLength);
    }

    if(root.right){
        let rightNode = tree.find(x => x.value ==root.right);
        if(miniRightDiffLength > Math.abs(root.value - rightNode.value)){
            miniRightDiffLength = Math.abs(root.value - rightNode.value);
        }
        miniRightDiffLength = miniDiff(rightNode, miniRightDiffLength);
    }
    return Math.min(miniLeftDiffLength, miniRightDiffLength);
}

const miniDiff = (node, miniLength) =>{
    if(node.left == null && node.right == null){
        return miniLength;
    }
    if(node.left){
        let leftNode = tree.find(x => x.value == node.left);
        if(miniLength > Math.abs(node.value - leftNode.value)){
            miniLength = Math.abs(node.value - leftNode.value);
        }
        miniLength = miniDiff(leftNode, miniLength);
    }

    if(node.right){
        let rightNode = tree.find(x => x.value == node.right);
        if(miniLength > Math.abs(node.value - rightNode.value)){
            miniLength = Math.abs(node.value - rightNode.value);
        }
        miniLength = miniDiff(rightNode, miniLength);
    }
    return miniLength;
}

console.log(miniDiffInBST(tree[0]));

/*
*Build a temple
*the pillars of the temple are amde of wood. each pillar must be a piece of complte wood
*and must not be spliced.
*there are N segments wood with different length. you temple has esact M pillars which
*have the smae height and must be integer.
*what is the Maximum height of your temple(The height of M pillars)
*/

const find=(len,woods) =>{
    let cnt = 0;
    for(let i=0 ; i < woods.length; i++){
        cnt +=Math.floor((woods[i]/len));
    }

    return cnt;
}

const buildTemple =(m, woods)=>{
    let l = 1 ;
    r = Math.max(...woods);
    let ans = -1 ;
    while(l <= r ){
        let mid = Math.floor((l+r)/2);
        if(find(mid, woods) >=m){
            ans = mid;
            l= mid+1;
        }else{
            r=mid-1
        }
    }
    return ans;
}

const m =3;
const woods =[2,3,4];
console.log("Build Temple",buildTemple(m, woods));

/*
*Find A in a given string 
*using binary search
*/

const countA = (inputA)=>{
    let low = 0;
    let high = inputA.length - 1;
    let mid = Math.floor((low+high)/2);
    let leftA = findA(inputA, low, mid);
    let rightA = findA(inputA, mid+1, high);

    return leftA+rightA;
}

const findA= (inputA,low, high) =>{
    let aNums = 0 ;
    let mid = Math.floor((low+high)/2)
    if(low == high) {
        if(inputA[low] ==="A"){
            aNums++;
            return aNums;
        }else{
            return aNums;
        }
    }else{
        return aNums = findA(inputA,low,mid) + findA(inputA, mid+1, high);
    }
}

const inputA ="BBAACCDDD";
const inputA1 ="AAA"
console.log(countA(inputA));
console.log(countA(inputA1));

/*
*given a all integer array, find all subset.
*input nums=[1,2,3]
*output :[
    [1],[2],[3]
    [1,2],[1,3],[2,3]
    [1,2,3],[]
]
*/
//DFS
var subsets = (nums) => {
    let result = [];
    result = dfs(nums,[], 0);
    
    return result;
};

const dfs =(nums,current, index) => {
    let result =[];
    result.push(current);
    for(let i= index ; i < nums.length ;i++){
        result =[...result ,...dfs(nums,current.concat(nums[i]),i+1)];
    }
    return result;
}
const nums =[1,2,3,5];
console.log("subset is :", subsets(nums));

//BFS

var subsetsBFS =(nums) =>{
    if (!nums) return [];
    
    let subsets = [];
    
    subsets.push([]);
    
    for (let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i];
        const numSubsets = subsets.length;
        
        for (let j = 0; j < numSubsets; j++) {
            const subsetToAdd = subsets[j].slice();
            subsetToAdd.push(currentNumber);
            subsets.push(subsetToAdd);
        }
    }
    
    return subsets;
}

console.log("subset bfs is : ", subsetsBFS(nums));

/*
*Split nums
*given a integer NUMS and a integer K,
*all less K to left,
*all bigger K to right.
*/

const partitionArray = (nums,k) =>{
    for(let i=0 ; i < nums.length ; i++){
        for(let j= i+1; j < nums.length; j++){
            if(nums[i] > k && nums[j] < k && nums[i]> nums[j]){
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j]=temp;
            }
        }
    }

    return nums;
}

const nums1=[3,4,2,2,1,0];
const k = 2;

console.log("parition array by k :", partitionArray(nums1,k));


const balancedSplitExists = (arr) => {
    // Write your code here
    let midIndex = Math.floor(arr.length /2);
    arr.sort((x,y) => x-y);
    while(midIndex < arr.length){
        let leftResult = arr.slice(0,midIndex).reduce((x,y) => x+y, 0);
        let rightResult = arr.slice(midIndex, arr.length).reduce((x,y) => x+y, 0);
        if(leftResult < rightResult){
            midIndex++;
        }
        if(leftResult == rightResult && arr[midIndex-1] < arr[midIndex]){
            return true;
        }else if(leftResult == rightResult && arr[midIndex -1] >= arr[midIndex]){
            return false;
        }else if(leftResult > rightResult){
            return false;
        }
    }
}
const arr_11 = [2, 1, 2, 5];
const arr_22 = [3, 6, 3, 4, 4];
const expected_11 = true;
const output_11 = balancedSplitExists(arr_22);
console.log(output_11); 

/*
Lexicographically smallest array after at-most K consecutive swaps
Input: arr[] = {7, 6, 9, 2, 1}
        k = 3
Output: arr[] = {2, 7, 6, 9, 1}
Explanation: Array is: 7, 6, 9, 2, 1
Swap 1:   7, 6, 2, 9, 1
Swap 2:   7, 2, 6, 9, 1
Swap 3:   2, 7, 6, 9, 1
So Our final array after k = 3 swaps : 
2, 7, 6, 9, 1

Input: arr[] = {7, 6, 9, 2, 1}
        k = 1
Output: arr[] = {6, 7, 9, 2, 1}
*/
const minimizeWithKSwaps=(arr,n,k) =>{
    for(let i=0; i < n-1 && k > 0 ; i++){
        let pos = i ;
        for(let j= i+1; j< n ; j++){
            if(j-i > k){
                break;
            }
            if(arr[j] < arr[pos]){
                pos = j;
            }
        }

        let temp = 0;
        for(let j= pos ; j> i; j--){
            temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
        }

        k = k-pos-i;
    }

    return arr;
}
const arr=[1,6,8,10];
let n = arr.length;
let k1 = 10
console.log(minimizeWithKSwaps(arr,n,k1));

const minOveralAwkwardness=(arr) =>{
    arr.sort((x,y) => x-y);
    let diff = arr[1]-arr[0];
    for(let i=2 ; i < arr.length;i+=2){
        diff =Math.max(diff,arr[i]-arr[i-2]);
    }

    for(let i=3; i <arr.length; i+=2){
        diff=Math.max(diff, arr[i] - arr[i-2]);
    }

    return Math.max(diff, arr[arr.length-1] - arr[arr.length-2]);
}

const arr111 = [1,5,6,10];
console.log(minOveralAwkwardness(arr111));


const isArrSort=(arr) =>{
    for(let i =0 ; i< arr.length-1; i++){
      if(arr[i] - arr[i+1] < 0){
        return false;
      }
    }
    
    return true;
  }
  
  // Add any helper functions you may need here
  
  function minOperations(arr) {
    // Write your code here
    let maxIndex = 0;
    let maxValue = 0 ;
    for(let i=0; i<arr.length ; i++){
      if(maxValue < arr[i]){
        maxValue = arr[i];
        maxIndex = i;
      }
    }
    let maxValues =[];
    maxValues.push(maxValue);
    let i = 0;
    while(maxValues.length > 0 || i > arr.length){
      let temp = arr[maxIndex];
      arr[maxIndex] = arr[i];
      arr[i] = temp;
      maxValue = 0 ;
      for(let j = i+1 ; j < arr.length; j++){
        if(maxValue < arr[j]){
          maxValue = arr[j];
          maxIndex = j
        }
      }
      maxValues.push(maxValue);
      maxValues.shift();
      i++;
      if(isArrSort(arr) == true){
        return i ;
      }
    }
    
    return -1;
  }
  
  const arr33 = [1,2,5,4,3];
  console.log(minOperations(arr33));