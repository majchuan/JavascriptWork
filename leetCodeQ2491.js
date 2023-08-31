/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
    skill.sort((a,b) => a -b);
    sum = skill[0] + skill[skill.length -1];
    chemistry = skill[0] * skill[skill.length -1];

    let left = 1 ;
    while(left < skill.length /2 ){
        if(sum == skill[left] + skill[skill.length - 1 - left]){

            chemistry += skill[left] * skill[skill.length -1 -left];
        }else{
            return -1;
        }
        left++;
    }
    return chemistry;
};