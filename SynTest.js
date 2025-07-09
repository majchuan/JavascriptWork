const fs = require("fs");

const commands = ["LGRGRGL","RRGLGLGLLLGRRGRR","RLRLGRLRGLRGLRLR"];
let direction = 0 ;
let xDirection = 0;
let yDirection = 9 ;

commands.forEach(x => {
    if(x === "R"){
        direction = (direction + 1) % 4;
    }else if( x === "L"){
        direction = (direction + 3) % 4;
    }

    if(x === "G"){
        switch(direction)
        {
            case 0 : 
                yDirection++;
            case 1 :
                xDirection++;
            case 2 :
                yDirection--;
            case 3 :
                xDirection--;
        }
    }

});

if(xDirection === 0 && yDirection===0)
{
    console.log("Back to origiunal point, start a circle");
}else{
    console.log("Move forward the path, no circle.");
}


const fruits = ["apple","peach","pears","banana"];

fruits.forEach( x => console.log(x));

console.log(
    fruits.length
);

fruits.push("strawberry");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("blackberry");
console.log(fruits);

const index = fruits.indexOf("blackberry");
console.log(index);

const removeFruits = fruits.splice(index,3);
console.log(fruits);
console.log(removeFruits);

fruits.push("cherry");
fruits.unshift("tomato");
const shawonCopy = fruits.slice();
console.log(shawonCopy);

console.log(fruits.includes("cherry"));

for(let [key,value] in fruits)
{
    console.log(value);
}

const obj = {a: 1 , b: 2, c:"mark"}

for(let prop in obj)
{
    console.log(`obj.${prop} = ${obj[prop]}`);
}

const newMap = new Map([
    [1,"mark"],
    [2,"ma"],
    [3,"chris"],
    [4,"alice"]
]);

for(let [key,value] of newMap)
{
    console.log(key , value);
}

const newSet = new Set(
    [11,22,22,33,44]
);

console.log(newSet);

for(const [key,value] in newSet.entries())
{
    console.log(key, value);
}

let strVal = "markisgooddman";

for(let i = 0 ; i < strVal.length; i++)
{
    console.log(strVal[i]);
}

console.log("new line");

const longWords = [
    'cat',
    'car',
    'cadaliac',
    'caddy',
    'alphabet',
    'island'
];

longWords.forEach(x => {
    let compressKey ="";
    for(let i =0 ; i < x.length ; i++){
        compressKey = compressKey + x[i];
    }
    console.log(compressKey);
});

const longWords_1 = longWords.map(x => {
    return x.toUpperCase();
});

console.log(longWords_1);

console.log(longWords_1.join(' '));

const longWordsMap = longWords.map(x => x.toUpperCase());

console.log(`This is new long words map ${longWordsMap}`);


//const isPromoted = prompt("Mark", 100);
//alert(isPromoted);


const path = "C:\\Users\\majin\\Desktop\\Mark\\Resume\\";
console.log(fs.constants.W_OK , fs.constants.R_OK, fs.constants.F_OK, fs.constants.X_OK);
fs.access(path, 6, (err) =>{
    if(err){
        console.log("path exist",err);
    }else{
        console.log("path not exist",err);
    }
});