/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    return n-1;
};

var numberOfMatchesSlowFunction = function(n) {
    return champion(n,0);
};

const champion=(teams, matches) =>{
    if(teams < 2) return 0 ;

    if(teams == 2){
        return matches+1;
    }

    if(teams % 2 == 0){
        return champion(teams / 2 , matches + (teams / 2));
    }else{
        return champion((teams - 1) / 2 + 1 , matches + (teams - 1)/ 2 );
    }
}