/*
Strings: Reverse words in a sentence
Reverse the order of words in a given sentence (an array of characters). 
Take the “Hello World” string for example:
*/

const words = "Hello World";
let reverseWords ="";

for(let i = words.length -1 ; i >=0 ; i--)
{
    reverseWords = reverseWords + words[i];
}

console.log(reverseWords);

/*
Strings: String segmentation
You are given a dictionary of words and a large input string. 
You have to find out whether the input string can be completely segmented into the words of a given dictionary. 
The following example elaborates on the problem further.
*/

const dictionary = ["apple", "apple","pear","pie"];
let str = "pieapple";

let s = "hellonow";
const dictionary1= ["hello","hell","on","now"];

function canSegmentString(str, dictionary){
    let searchStr = "";
    for(let i =0; i < str.length ; i++){
        searchStr = searchStr + str[i];
        if(dictionary.includes(searchStr)){
            if(searchStr.length === str.length){
                return true;
            }else{
                if(canSegmentString(str.substring(i+1), dictionary)){
                    return true;
                }
            }
        }
    }

    return false;

}

const isMatched = canSegmentString(str,dictionary);

//const isMatched1 = canSegmentString(s,dictionary1);
console.log(isMatched);

/*
Given a list of daily stock prices (integers for simplicity), return the buy and sell prices for making the maximum profit.
We need to maximize the single buy/sell profit. 
If we can’t make any profit, we’ll try to minimize the loss. 
For the below examples, buy (orange) and sell (green) prices for making a maximum profit are highlighted.
*/

const stockPrice =[8,5,12,9,19,1];
const stockPrice_1 = [21,12,11,9,6,3];
const stockPrice_2 = [1, 2, 3, 4, 3, 2, 1, 2, 5];
const stockPrice_3 = [8, 6, 5, 4, 3, 2, 1]
 
function findMaxProfit(stockPrice){
    const bestTrade = {
        currentBuy : Number.MIN_SAFE_INTEGER,
        currentSell : Number.MIN_SAFE_INTEGER,
        profit: Number.MIN_SAFE_INTEGER
    };

    for(let i=0 ; i < stockPrice.length ;i++){
        for(let j =i + 1; j < stockPrice.length; j++){
            if(bestTrade.profit <(stockPrice[j] - stockPrice[i])){
                bestTrade.currentBuy = stockPrice[i];
                bestTrade.currentSell = stockPrice[j];
                bestTrade.profit = stockPrice[j] - stockPrice[i];
            }
        }
    }

    return bestTrade;
}

const dailyTrade = findMaxProfit(stockPrice_2);

console.log(dailyTrade);

/*
* array to map 
*/

const words1 = ["word","good","best","word"];
const hashMap = {};
for(let w of words1){
    hashMap[w] ? hashMap[w]++ : (hashMap[w]=1);
}

console.log(hashMap);

const words2 = ["word","good","best","word"];
const hashMap1 = new Map();
for(let w of words1){
    if( hashMap1.has(w)){
        hashMap1.set(w, hashMap1.get(w)+1);
    }else{
        hashMap1.set(w,1);
    }
}

console.log(hashMap1.get("word"));
const wordMap = { "word" : 1 ,"best": 23,"good" : 100};

console.log(wordMap);

const aSet = new Set([1,2,2,3,4,5,5,5,6]);

console.log(aSet);

aSet.add(5);
console.log(aSet);

aSet.add(7);

console.log(aSet);
aSet.delete(5);
console.log(aSet);
aSet.entries();

console.log(aSet.entries());

const item1 = {a:1,b:2};
const item2 = {a:1,b:2};

const itemSet = new Set();
itemSet.add(item1);
itemSet.add(item2);

console.log(itemSet);

itemSet.forEach((key,value,itemSet) => {
    console.log(key);
    console.log(value, value.a, value.b);
})


while(aSet.entries().next().value != undefined){
    aSet.entries().next();
}