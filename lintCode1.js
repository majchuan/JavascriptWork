/*
*Array partition 
*given an array of 2n integers, your task is to group these integers into n pairs of integer,
*say(a1,b1),(a2,b2)... which makes sum of min(ai,bi) for all i from 1 to n as large as possible.
*input [1,4,3,2,]
*/

const arrayPairSum = (nums) =>{
    nums.sort();
    let miniumSum = 0 ;
    nums.forEach((element,index) => {
        if((index+1) % 2 > 0){
            miniumSum = miniumSum + element;
        }
    });
    return miniumSum;
}

const nums =[1,4,3,2];
const nums1=[5,6]
console.log(arrayPairSum(nums1));

/*
*meeting room
*given an array of meeting time intervals consisting of start and end time
[[s1,e1],[s2,e2]...](si < ei) determine if a person could attend all meetings.
input: intervals =[[0,30],[5,10],[15,20]]
output : false
*/

const canAttendMeetings = (intervals) =>{
    let attendMeeting = false ;
    for(let i =0 ; i < intervals.length ; i++){
        for(let j=i+1; j < intervals.length; j++){
            if(intervals[i][1] < intervals[j][0]){
                attendMeeting = true ;
            }else{
                attendMeeting = false;
                return attendMeeting;
            }
        }
    }
    return attendMeeting ;
}

const intervals =[[0,30],[5,10],[15,20]];
const intervals1=[[5,8],[9,15]];
console.log(canAttendMeetings(intervals1));

/*
*Movign target
*given an array nums and an integer target.
*you need move the element which eaual to target to the front of the array,and the order of the 
*remain element can not changed.
input: nums=[5,1,6,1]
target = 1
*/

const moveTarget = (nums2, target) =>{
    let swap = false;
    do{
        swap=false;
        for(let i =0 ; i < nums2.length-1; i++){
            if(nums2[i] != target && nums2[i+1] == target){
                let temp = nums2[i+1];
                nums2[i+1] = nums2[i];
                nums2[i] = temp;
                swap =true;
            }
        }
    }while(swap==true);

    return nums2;
}
const nums2=[5,1,6,1]
const target = 1;
console.log(moveTarget(nums2,target));
const nums3=[-1,2,3,5,2,2]
const target1= 2;
console.log(moveTarget(nums3,target1));

/*
*Two sum 
*given an array of integers that is already sorted in ascending absolute order, find two numbers 
*so that the sum of them equals a specific numbers.
*return indices of the two numbers such that they add up the target where index1 must be less than index2. 
*/

const twoSum= (nums4,target3) =>{
    const sumArray =[];
    for(let i=0; i< nums4.length; i++){
        for(let j= i+1 ; j< nums4.length; j++){
            if(nums4[i]+ nums4[j] == target3){
                sumArray.push([i,j]);
            }
        }
    }
    return sumArray;
}

const nums4=[0,-1,2,-3,4];
const target3 = 1 ;
console.log(twoSum(nums4, target3));

/*
*Number of substrings with all zeroes
*given a string str containing on 0 or 1, 
*please return the number of substrings consist of 0
*input : "00010011"
output 9;
*/

const stringCount= (str) =>{
    const strLength = str.length;
    let zeros ="";
    let substringZeros = 0 ;
    for(let i=0; i< strLength; i++){
        zeros += "0";
        for(let j=0; j <= strLength - zeros.length; j++){
            if(zeros === str.substring(j,j+zeros.length)){
                substringZeros++;
            }
        }
    }

    return substringZeros;
}

const str = "00010011";
const str1="010010"
console.log(stringCount(str1));

/*
*Most frequent substring
*given a string, we want to know the maximu number of occurrence of any substring that satisfies 
the following two conidtions
1.the substring's length is within the inclusive range from minLength to maxLength.
2.the total number of unique characters in the substring does not exceed maxUnique.
*/
const getMaxOccurrences=(s, minLength,maxLength, maxUnique) => {
    const occurrences ={};
    for(minLength; minLength <= maxLength ; minLength++){
        for(let i=0; i<= s.length - minLength; i++){
            let subStr = s.substring(i,i+minLength);
            occurrences[subStr] ? occurrences[subStr]++ : occurrences[subStr] = 1 ;
        }
    }

    return Math.max(...Object.values(occurrences));
}

const s="abcabccde";
const minLength =2
const maxLength =5
const maxunique =3
console.log(getMaxOccurrences(s,minLength,maxLength,maxunique));

/*
*longest semi alternating substring
*you are given a string S of Length N only contain characters a and b.
*a substring of S is called semi-alternating substring if it does not 
*contain three identifcal conseutive chacters such as aaa or bbb substring
*/

const longestSemiAlternatingSubstr = (s) =>{
    let subStr = "";
    for(let i=1 ;i <= s.length; i++){
        for(let j = 0; j<= s.length -i ; j++){
            if(s.substring(j,j+i).includes("aaa")== false && s.substring(j,j+i).includes("bbb") == false){
                if(subStr.length < s.substring(j,j+i).length){
                    subStr = s.substring(j,j+i);
                }
            }
        }
    }

    return subStr;
}

const inputS ="baaabbabbb";
console.log(longestSemiAlternatingSubstr(inputS));
const inputS1 ="babba";
console.log(longestSemiAlternatingSubstr(inputS1));
const inputS2 ="abaaaa";
console.log(longestSemiAlternatingSubstr(inputS2));