/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var pseudoPalindromicPaths  = function(root) {
    const palindrome = new Array(10).fill(0);
    return dfs(root, palindrome);
};

const dfs=(node, palindrome) =>{
    let sum = 0 ;
    if(node == null) return 0;

    palindrome[node.val]++;

    if(node.left == null && node.right ==null){
        let odd = 0 ;
        for(let i = 0 ; i < 10 ; i++){
            odd += palindrome[i] % 2; 
        }
        palindrome[node.val]--;
        if(odd <= 1){
            return 1 ;
        }else{
            return 0;
        }
    }else{
        sum = dfs(node.left, palindrome) + dfs(node.right, palindrome);
    }
    palindrome[node.val]--;

    return sum;
}
/**
* @param {TreeNode} root
* @return {number}
*/
var pseudoPalindromicPathsHashMap  = function(root) {
   const palindrome = {};
   return dfs(root, palindrome);
};

const dfsHashMap=(node, palindrome) =>{
   let sum = 0;
   if(node != null){
       palindrome[node.val] ? palindrome[node.val]++ : palindrome[node.val] =1;;
       if(node.left == null && node.right ==null){
           let result = checkPalindrome(palindrome);
           palindrome[node.val]--;
           return result;
       }else{
           sum = dfs(node.left, palindrome) + dfs(node.right, palindrome);
       }
       palindrome[node.val]--;
       return sum;
   }

   return 0;
}

const checkPalindrome = (palindrome) =>{
   let odd = 0;
   for(let key in palindrome){
       if(palindrome[key] % 2 == 1){
           odd++;
           if(odd > 1) return 0 ;
       }
   }

   return 1;
}