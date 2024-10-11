/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
var smallestChair = function(times, targetFriend) {
    // Initialize an array `levTime` to store the time each chair becomes available (-1 means the chair is currently free).
      const levTime = new Array(times.length).fill(-1);
  
      // Get the arrival time of the target friend (the friend we need to find the chair for).
      const tarFrnd = times[targetFriend][0];
  
      // Sort the times array by arrival times. This helps process each friend's arrival in the correct order.
      times.sort((a, b) => a[0] - b[0]);
  
      // Iterate over each friend's arrival and leaving time.
      for (let [arv, lev] of times) {
          let i = 0;
          // Find the first available chair, or a chair that will be free by the time the current friend arrives.
          while (levTime[i] > arv && levTime[i] !== -1) i++;
          
          // If the current friend's arrival time matches the target friend's arrival time, return the chair index.
          if (arv === tarFrnd) return i;
  
          // Mark this chair as occupied until the current friend's leaving time.
          levTime[i] = lev;
      }
  
      // This return statement is a fallback, but ideally the function will always return within the loop.
      return -1;
  };