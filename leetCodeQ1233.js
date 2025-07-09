/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
    const folderSet = new Set(folder);
    for(let fSet of folderSet){
        let subFolder = fSet;
        while(subFolder){
            subFolder = subFolder.substring(0,subFolder.lastIndexOf("/"));
            if(folderSet.has(subFolder)){
                folderSet.delete(fSet);
            }
        }
    }

    return Array.from(folderSet);
};

/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfoldersSortingApproach = function(folder) {
    folder.sort();
    
    const result = [];
    
    // Step 2: Iterate through the sorted folder list
    for (const afolder of folder) {
        // If result is empty or current folder is not a subfolder of the last added folder
        if (result.length === 0 || !afolder.startsWith(result[result.length - 1] + '/')) {
            result.push(afolder);
        }
    }
    
    return result;
};

const folder =["/a","/a/b/c","/a/b/d"];
const folder1= ["/a/b/c","/a/b/ca","/a/b/d"];
const folder2 = ["/ah/al/am","/ah/al"];
const folder3=["/aa/ab/ac/ad","/aa/aq/ay","/bf/bv/cd/ch/cj",
"/bf/bg","/aa/aq/ar","/bf","/aa/ab/aj/an/ao","/aa/aq/ay/az","/aa/aq/ay/bc","/bf/bg/bh/bi/bj","/bf/bv/bw/ca/cc","/bf/bg/bh/bl"];
console.log(removeSubfolders(folder3));

