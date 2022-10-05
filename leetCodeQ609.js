/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    const hash_paths = {}; 
    for(let s of paths){
        //console.log(s);
        const splitPaths = s.split(" ");
        for(let i = 1 ; i < splitPaths.length; i++){
            let leftIndex = splitPaths[i].indexOf("(");
            let rightIndex = splitPaths[i].indexOf(")");
            let fileContent = splitPaths[i].slice(leftIndex, rightIndex);
            //console.log(fileContent);
            if(hash_paths[fileContent]){
                hash_paths[fileContent].push(splitPaths[0]+"/"+splitPaths[i].slice(0,leftIndex));
            }else{
                hash_paths[fileContent] = [];
                hash_paths[fileContent].push(splitPaths[0]+"/"+splitPaths[i].slice(0,leftIndex));
            }
        }
    }
    
    return Object.values(hash_paths).filter(x => x.length > 1);
};

const paths= ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"];
console.log(findDuplicate(paths));