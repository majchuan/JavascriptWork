/**
 * @param {string[]} logs
 * @return {string[]}
 */
 var reorderLogFiles = function(logs) {
    const letters =[];
    const digits =[];
    for(let log of logs){
        if(checkNum(log)){
            digits.push(log);
        }else{
            letters.push(log);
        }
    }

    letters.sort((x,y) =>{
        let content1 = x.split(" ").slice(1).join(" ");
        let content2 = y.split(" ").slice(1).join(" ");
        //console.log(content1, content2);
        if(content1 == content2){
            return sortLexi(x.split(" ")[0], y.split(" ")[0]);
        }else{
            return sortLexi(content1, content2);
        }
    });
    
    return [...letters, ...digits];
};

const checkNum = (log) =>{
    const nums = log.split(" ").slice(1);
    if(isNaN(parseInt(nums.join(" ")))){
        return false;
    }else{
        return true;
    }
}

const sortLexi=(letter1, letter2) =>{
    if(letter1 == letter2) {
        return 0
    }
    
    if(letter1 > letter2){
        return 1;
    }
    
    return -1;
}

const logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"];
console.log(reorderLogFiles(logs));