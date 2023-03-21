/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    
    const stack = [];
    for(let asteroid of asteroids){
        if(stack.length == 0 || asteroid  > 0 ) {
            stack.push(asteroid);
            continue;
        }
        if(stack.length > 0 &&  stack[stack.length -1] * asteroid > 0){
            stack.push(asteroid);
            continue;
        }
        let notA = false;
        while(stack.length > 0 && stack[stack.length -1] * asteroid < 0){
            if(Math.abs(stack[stack.length -1]) == Math.abs(asteroid)){
                stack.pop();
                notA = true;
                break;
            }else if(Math.abs(stack[stack.length -1]) < Math.abs(asteroid) ){
                stack.pop();
                notA = false;
            }else{
                notA = true;
                break;
            }
        }

        if(notA == false){
            stack.push(asteroid);
        }
    }

    return stack;
    
};

const asteroids = [-2,-1,1,2];
console.log(asteroidCollision(asteroids));