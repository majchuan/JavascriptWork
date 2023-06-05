/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
/*
*
* three points p0, p1, p2, and the slope using p0 and p1 is ΔY1ΔX1\frac{\Delta Y1}{\Delta X1} 
ΔX1
ΔY1
​
* and the slope between p0 and p2 is ΔY2ΔX2\frac{\Delta Y2}{\Delta X2},
ΔX2
ΔY2
​
*we will check if these two slopes are equal or not, i.e. ΔY1ΔX1\frac{\Delta Y1}{\Delta X1} 

​*Since ΔX\Delta XΔX can be zero as well and in that case dividing by it would cause an issue. We can tweak the previous equality equation to convert division into multiplication to avoid the divide by zero issues. The new equation would be:

ΔY1 * ΔX2  = ΔY2 * ΔX1
*/
var checkStraightLine = function(coordinates) {
    
    let startX = coordinates[0][0];
    let startY = coordinates[0][1];
    let endX = coordinates[1][0];
    let endY = coordinates[1][1];

    let deltaX = getXDiff(startX, endX);
    let deltaY = getYDiff(startY, endY);


    for(let i = 2 ; i < coordinates.length ; i++){
        if(deltaY * getXDiff(startX,coordinates[i][0]) != deltaX * getYDiff(startY , coordinates[i][1])){
            return false;
        }
    }

    return true;

};

const getYDiff = (startY, endY) =>{
    return endY - startY ;
}

const getXDiff =(startX, endX) =>{
    return endX - startX;
}