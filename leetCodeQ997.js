/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const judges = {};
    const people = {};
    if(n==1) return n;
    for(let t of trust){
        people[t[0]] ? people[t[0]].push(t[1]) : people[t[0]]=[t[1]];
        judges[t[1]] ? judges[t[1]].push(t[0]) : judges[t[1]]=[t[0]];
    }

    for(let i = 1 ; i <= n ; i++){
        if(judges[i] != null && judges[i].length == n- 1){
            if(people[i] == null) return i;
        }
    }

    return -1;
};
