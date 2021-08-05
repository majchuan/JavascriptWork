var topKFrequent = function(nums, k) {
    const map = new Map();
    for(let n of nums) map.set(n, (map.get(n) || 0) + 1);
    const keys = [...map.keys()], finalIdx = keys.length - k;
    let start = 0, end = keys.length-1;
    
    while(start <= end) {
        const pivot = Math.floor(Math.random() * (end - start + 1)) + start;
        const pivotIdx = pivotHelper(pivot, start, end);
        
        if(pivotIdx === finalIdx) return keys.slice(finalIdx);
        if(pivotIdx < finalIdx) start = pivotIdx + 1;
        else end = pivotIdx - 1;
    }
    
    function pivotHelper(pivot, start, end) {
        // move pivot away to the end
        swap(pivot, end);
        let swapIdx = start;
        
        for(let i = start; i < end; i++) {
            if(map.get(keys[i]) < map.get(keys[end])) {
                swap(swapIdx, i); swapIdx++;
            }
        }
        swap(swapIdx, end);
        return swapIdx;
    }
    
    function swap(i, j) {
        [keys[i], keys[j]] = [keys[j], keys[i]];
    }
};