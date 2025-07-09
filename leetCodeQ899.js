/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var orderlyQueue = function(s, k) {

    if(k ==1){
        let temp = s ;

        for(let i = 0 ; i < s.length ; i++){
            let substr = s.slice(i+1) + s.slice(0,i+1);
            if( temp > substr  ){
                temp = s.slice(i+1) + s.slice(0,i+1);
            }
        }

        return temp;
    }
   
    return s.split("").sort().join('') ; 
};