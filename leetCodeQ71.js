/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack =[];
    let pathes = path.split("/");
    pathes = pathes.filter(x => x !="");

    console.log(pathes);

    for(let p of pathes){
        if(p == "."){
            continue
        }else if(p == ".."){
            if(stack.length > 0){
                stack.pop();
            }
        }else{
            stack.push(p);
        }
    }

    return "/" + stack.join("/");
};