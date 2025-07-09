/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    const hash_s1 = new Map();
    const hash_s2 = new Map();

    let difference = 0 ;

    let s1Sort = s1.split('').sort().join('');
    let s2Sort = s2.split('').sort().join('');
    if(s1Sort != s2Sort) return false;

    for(let i = 0 ; i < s1.length; i++){
        hash_s1.set(i,s1[i]);
    }

    for(let i = 0; i < s2.length; i++){
        if(s2[i] != hash_s1.get(i)){
            difference++;
        }
    }

    if(difference == 2 || difference == 0) return true;
    return false;
};