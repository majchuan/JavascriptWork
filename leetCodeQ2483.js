/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    let minPenalty = 0; 
    let minIndex = 0 ;
    let hours = customers.length; 
    let currPenalty = 0 ;

    for(let i = 0 ; i < hours ; i++){

        if(customers[i] == "Y"){
            currPenalty--;
        }else{
            currPenalty++;
        }

        if(minPenalty > currPenalty){
            minPenalty = currPenalty;
            minIndex = i+1 ;
        }
    }



    return minIndex ; 
};