const countCyclicPairs=(nums) =>{
    let count = 0;

    for(const num of nums){
        const numStr = num.toString();
        let currNum = num ;
        const cyclicShiftSet = new Set();

        for(let i = 0 ; i < numStr.length; i++){
            currNum = cyclicShift(currNum);
            cyclicShiftSet.add(currNum);
        }

        console.log(cyclicShiftSet);

        for(const shiftedNum of cyclicShiftSet){
            if(nums.includes(shiftedNum) && shiftedNum != num){
                count++;
                break;
            }
        }
    }

    return count;
}

const cyclicShift = (number) =>{
    const strNum = number.toString();
    const shiftNum = strNum[strNum.length - 1] + strNum.slice(0,strNum.length -1);
    return parseInt(shiftNum);
}


console.log(countCyclicPairs([13,31,13]));