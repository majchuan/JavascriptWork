/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const hash_p = new Map();
    const result = [];
    permute(nums, 0 , hash_p);

    for(let item in hash_p){
        result.push(hash_p[item]);
    }
    return result;
};

const permute = (nums,startIndex, hash_p) =>{
    if(startIndex == nums.length-1){
        if(hash_p[nums]==null) {
            hash_p[nums] = nums.slice();
        }
    }

    for(let i = startIndex ; i<nums.length ; i++){
        swap(nums, i , startIndex);
        permute(nums, startIndex+1, hash_p) ;
        swap(nums, i, startIndex);
    }
}

const swap = (nums, left,right) =>{
    let temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
}

const nums=[1,1,2];
console.log(permuteUnique(nums));

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 function permuteUnique1(array) {
	const permutations = [];
    array.sort((a,b) => a-b);
	getPermutationsHelper(array, [], permutations);
	return permutations;
}

function getPermutationsHelper(array, currPermutation, permutations) {
	if (!array.length && currPermutation.length) {
		permutations.push(currPermutation);
	} else {
		for (let i = 0; i < array.length; i++) {
            if (i > 0 && array[i-1] === array[i])   continue;
			const arr = array.slice(0, i).concat(array.slice(i + 1));
			const perm = [array[i]].concat(currPermutation);
			getPermutationsHelper(arr, perm, permutations);
		}
	}
}