/*
*Arrays: Merge overlapping intervals
*You are given an array (list) of interval pairs as input where each interval has a start and end timestamp. 
*The input array is sorted by starting timestamps. You are required to merge overlapping intervals and return a new output array.
*Consider the input array below. 
*Example:
*Intervals (1, 5), (3, 7), (4, 6), (6, 8) are overlapping so they should be merged to one big interval (1, 8). 
*Similarly, intervals (10, 12) and (12, 15) are also overlapping and should be merged to (10, 15).
*Try it yourself before reviewing the solution and explanation.
*
*/

const intervalArray =[[1,5],[3,7],[4,6],[6,8]];
const mergeArray = [].concat(...intervalArray);
const bigInterval =[].concat(mergeArray[0],mergeArray[mergeArray.length-1]);

console.log(bigInterval);