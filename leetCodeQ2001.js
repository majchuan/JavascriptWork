/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = function(rectangles) {
    const hash_rec = {};

    let count = 0 ;

    for(let rec of rectangles){
        let ans = rec[0] / rec[1];
        //console.log(ans);
        if(hash_rec[ans] != null){
            count += hash_rec[ans];
            hash_rec[ans] +=1;
        }else{
            hash_rec[ans] = 1 ;
        }
    }

    return count ; 
};