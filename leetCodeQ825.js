/**
 * @param {number[]} ages
 * @return {number}
 */
 var numFriendRequests = function(ages) {
    ages.sort((a,b) => a-b);
    let i = 0 , j = ages.length -1;
    let friendRequest = 0;
    while(j >= 0){
        while(i < j){
            let ageX = ages[i];
            if((ageX > 0.5 * ages[j] + 7) && (ageX <= 100 || ages[j] >=100) && ageX <= ages[j]){
                friendRequest++
            }
            if((ages[j] > 0.5 * ageX + 7) && (ages[j] <= 100 || ageX >=100) && ages[j] <= ageX ){
                friendRequest++
            }
            i++;
        }
        i = 0;
        j--;
    }

    return friendRequest ; 
};