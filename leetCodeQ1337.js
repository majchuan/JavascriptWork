/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const weaks = [];
    for(let i  = 0 ; i < mat.length ; i++){
        weaks.push([mat[i].filter(x => x==1).length, i]);
    }

    weaks.sort((a,b) => a[0]-b[0]);

    return weaks.map(x => x[1]).slice(0,k);
};

var kWeakestRowsBinarySearchApproach = function(mat, k) {
    const soldiers = [];

    for(let i = 0; i < mat.length; i++){
        const soldierNum = binarySearchSolider(0 , mat[i].length , mat[i]);
        soldiers.push([soldierNum, i]);
    }

    return soldiers.sort((a,b) => a[0]-b[0]).map(x => x[1]).slice(0,k);
};

const binarySearchSolider = (left ,right ,row) =>{

    while(left < right){
        const mid = Math.floor((left + right)/2);
        if(row[mid] == 1){
            left = mid + 1 ;
        }else{
            right = mid;
        }
    }

    return left;
}