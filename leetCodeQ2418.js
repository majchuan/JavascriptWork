/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    const name_height=[];
    for(let i = 0 ; i < names.length ; i++){
        name_height[i]=[names[i], heights[i]];
    }

    return name_height.sort((a,b) => b[1] - a[1]).map(x => x[0]);
};
