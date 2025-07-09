/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
    const n = arr.length;
    const hash_map = new Map();
    
    for (let i = 0; i < n; i++) {
        const num = arr[i];
        let reminder = num % k;
        
        if (reminder < 0) reminder += k;
        
        hash_map.set(reminder, (hash_map.get(reminder) || 0) + 1);
    }
    
    for (const [reminder, count] of hash_map) {
        if (reminder === 0) {
            if (count % 2 != 0) {
                return false;
            }
            hash_map.delete(0);
        }
        else {
            const counterPart = k - reminder;
            
            if (hash_map.has(counterPart) == false) return false;
            
            const otherCount = hash_map.get(counterPart);
            
            if (count != otherCount) return false;
            
            hash_map.delete(reminder);
            hash_map.delete(counterPart);
        }
    }
   
    return hash_map.size == 0;
}
