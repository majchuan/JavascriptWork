/*
You are given a m*n grid. You are asked to generate k mines on this grid randomly. 
Each cell should have equal probability of k / m*n of being chosen.
*/
const selectItem = (stream,k) =>{
    // Index for elements in stream[]
    let i;
    
    // reservoir[] is the output array. Initialize
    // it with first k elements from stream[]
    let reservoir = [];
    for(i = 0; i < k; i++)
        reservoir[i] = stream[i];

    // Use a different seed value so that we don't get same result each time
    // we run this program

    // Iterate from the (k+1)th element to nth element
    for(; i < n; i++)
    {
        // Pick a random index from 0 to i.
        let j = (Math.floor(Math.random() * 100000000) % (i + 1));
                
        // If the randomly picked index is
        // smaller than k, then replace the
        // element present at the index
        // with new element from stream
        if (j < k)
            reservoir[j] = stream[i];
    }

    printArray(stream);

}

const printArray =(stream)=>{
    console.log(stream);
}

const stream = [ 1, 2, 3, 4, 5, 6,7, 8, 9, 10, 11, 12 ];
const k = 5;

