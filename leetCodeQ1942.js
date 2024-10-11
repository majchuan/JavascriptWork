/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
var smallestChair = function(times, targetFriend) {
    const indexTimes = times.map((element ,index) => {
         return [element,index];
     });
 
     indexTimes.sort((a,b) => a[0][0] - b[0][0]);
 
     const chair = new Array(times.length).fill(-1);
 
     for(let i = 0 ; i < indexTimes.length ; i++){
         const currentIndexTime = indexTimes[i];
 
         let left = 0;
         while(chair[left] != -1 && chair[left]> currentIndexTime[0][0]){
             left++;
         }
         if(currentIndexTime[1] == targetFriend) return left;
 
         chair[left] = currentIndexTime[0][1];
     }
 
     return -1;
 };