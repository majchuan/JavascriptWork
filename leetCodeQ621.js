/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    if (n === 0) return tasks.length;

      const map = {};
      for (let t of tasks) {
        if (map[t] == null) map[t] = 0;
        map[t]++;
      }

      let max = 0;  // task max frequency
      for (let t in map) {
        max = Math.max(max, map[t]);
      }

      let count = 0;  // the number of tasks with same max frequency
      for (let t in map) {
        if (map[t] === max) {
          count++;
        }
      }

      return Math.max(
        // case 1
        // AB...AB... = (max - 1) * (n + 1)
        // AB...AB...AB = (max - 1) * (n + 1) + count
        (max - 1) * (n + 1) + count,

        // case 2
        // e.g. (ABC)(ABD)(ABEF)
        tasks.length,
      );
}

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastIntervalFillingAndSortingSlots = function(tasks, n) {
  const freq = new Array(26).fill(0);

  for(let task of tasks){
      freq[task.charCodeAt(0) - 65]++;
  }

  console.log(freq);

  freq.sort((a,b) => a - b);

  let maxFreq = freq[25] - 1 ;

  let idleSlots = maxFreq * n ;

  for(let i = 24 ; i >=0 ; i--){
      if(freq[i] > 0){
          idleSlots -= Math.min(maxFreq, freq[i]);
      }
  }

  return idleSlots > 0 ? idleSlots + tasks.length : tasks.length;
};

const tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 3;
const tasks1 = ["A","A","A","B","B","B"], n1 = 3;
console.log(leastInterval(tasks1,n1));