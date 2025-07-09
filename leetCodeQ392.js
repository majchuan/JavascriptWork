/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    if (s.length == 0) return true;
    let p1 = 0, p2 = 0;
    while (p2 < t.length) {
        if (s[p1] == t[p2]) {
            p1++;
            p2++;
            if (p1 == s.length) return true;
        }
        else p2++;
    }
    return false;
};

const  s = "abc", t = "ahbgdc";

console.log(isSubsequence(s,t));