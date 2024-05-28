/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let left = 0 ;
   let right = 0;
   let substr = "";
   let cost = 0;
   let maxLength = 0;

   while(left < s.length)
   {
       cost += Math.abs(s.charCodeAt(left) - t.charCodeAt(left));

       while(cost > maxCost){
           cost -= Math.abs(s.charCodeAt(right) - t.charCodeAt(right));
           right++;
       }

       maxLength = Math.max(maxLength, left - right + 1);
       left++;

   }
   return maxLength;

};