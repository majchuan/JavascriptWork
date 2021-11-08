/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    const hash_str ={}
    for(let s of strs){
        const sortedStr = s.split('').sort().join('');
        if(hash_str[sortedStr] == null) {
            hash_str[sortedStr] = [];
        }
        hash_str[sortedStr].push(s);
    }
    
    return Object.values(hash_str);
}



const strs=["","",""];
const strs1=["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs1));