/**
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */
var minMoves = function(target, maxDoubles) {
    let steps = 0 ;
    return dfs(target, maxDoubles, steps)
};

const dfs=(target , maxDoubles, steps) =>{
    if(target == 1){
        return steps;
    }
    if(maxDoubles == 0){
        steps += target - 1;
        return steps;
    }
    
    if(target %  2 == 0 &&  maxDoubles > 0){
        target = target / 2 ;
        maxDoubles--;
        steps++;
        return dfs(target, maxDoubles, steps);
    }
    
    if(target % 2 != 0 && maxDoubles > 0){
        target -= 1 ;
        steps++;
        return dfs(target, maxDoubles, steps);
    } 
}

const minMovesFaster = (target , maxDoubles) =>{
    let steps = 0;
    while(maxDoubles > 0){
        if(target == 1){
            return steps;
        }

        if(target % 2 == 0){
            target = target / 2 ;
            maxdoubles--;
            steps++;
        }else{
            target--;
            steps++;
        }
    }

    return steps+(target -1);
}

const target = 19, maxDoubles = 2;
console.log(minMoves(target,maxDoubles));