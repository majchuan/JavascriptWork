/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
 const intervalIntersection = (firstList, secondList) => {
     let i = 0;
     let j = 0;
     let result = [];

     while(i < firstList.length && j < secondList.length){
        const firstElement = Math.max(firstList[i][0], secondList[j][0]);
        const secondElement = Math.min(firstList[i][1], secondList[j][1]);
        if(firstElement <= secondElement){
            result.push([firstElement,secondElement]);
        }
        if(firstList[i][1] < secondList[j][1]){
            i++;
        }else{
            j++;
        } 
     }

     return result;
 }

 const firstList=[[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]];
 const firstList_1=[[1,3],[5,9]], secondList_1 = [[4,8]]

 console.log(intervalIntersection(firstList_1,secondList_1));