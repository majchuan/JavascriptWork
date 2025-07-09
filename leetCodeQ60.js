/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    const curr = new Set();
    let result =""
    let counter = 0 ;
    
    
    const dfs=(n,k,curr) =>{
        if(curr.size == n){
            counter++;
            if(counter == k) {
                result = [...curr].join("");
                return ;
            }
        }

        for(let i = 1 ; i<=n ; i++){
            if(curr.has(i)) continue;
            curr.add(i);
            dfs(n,k,curr);
            curr.delete(i);
        }
    }

    dfs(n,k,curr);
    return result;
};


/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutationFaster = function(n, k) {
    const findPermutation=(arr,curr)=>{
        if(curr.length == n){
            counter++
            if(counter == k){
                res = curr.join('')
                return
            }
        }
        
        for(let i=0;i<arr.length;i++){
            curr.push(arr[i])
            findPermutation(arr.filter(a=> a != arr[i] ) , curr)
            curr.pop()
        }
    }
    
    
    let arr = [], counter = 0, res=''
    for(let i=1;i<=n;i++){
        arr.push(i)
    }
    findPermutation(arr,[])
    return res
};