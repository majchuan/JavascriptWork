//Insert sort aloghterim 
const nums=[10,9,8,7,6,5,4,3,2,1];
const insertSort = (nums) =>{

    for(let i = 1 ; i < nums.length ; i++){
        let j = i -1;
        const key = nums[i];
        while(j >= 0 && nums[j] > key ){
            nums[j+1] =nums[j];
            j--;
        }

        nums[j+1] = key;
    }

    return nums;
}

//console.log(insertSort(nums));

const user1 = {
    userId : 1 ,
    arriveTime : new Date("Nov 11 2021 10:00:00 AM")
}

const user2 = {
    userId : 2,
    arriveTime : new Date("Nov 09 2021 11:00:00 AM")
}

const user3 = {
    userId : 3,
    arriveTime : new Date("Nov 08 2021 06:00:00 PM")
}

const users= [ user1, user2, user3];
var birthday = new Date('December 17, 1995 03:24:00');
console.log(users.sort((x,y) => x.arriveTime - y.arriveTime));