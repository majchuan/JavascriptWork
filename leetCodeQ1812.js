/**
 * @param {string} coordinates
 * @return {boolean}
 */
 var squareIsWhite = function(coordinates) {
    const ys= coordinates.split("");
    let sum = updateCharToNumber(ys[0]) + parseInt(ys[1]);
    if(sum % 2 == 0){
        return false;
    }else{
        return true;
    }
};

const updateCharToNumber = (character) =>{
    const chars = ["a","b","c","d","e","f","g","h"];
    
    return chars.indexOf(character) + 1 ;
}

const coordinates="a1";
console.log(squareIsWhite(coordinates));