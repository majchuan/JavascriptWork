const logs =[
    { 'user': '1', 'page': 'A'},
    { 'user': '2', 'page': 'B'},
    { 'user': '1', 'page': 'B'},
    { 'user': '1', 'page': 'D'},
    { 'user': '2', 'page': 'A'},
    { 'user': '3', 'page': 'B'},
    { 'user': '3', 'page': 'D'},
    { 'user': '1', 'page': 'C'},
    { 'user': '3', 'page': 'C'},
    { 'user': '1', 'page': 'C'},
    { 'user': '2', 'page': 'C'},
    { 'user': '3', 'page': 'B'},
    { 'user': '1', 'page': 'A'},
    { 'user': '3', 'page': 'C'},
];

const getHistoryByUser=(logs) =>{
    const history ={};
    for(let log of logs){
        history[log.user] ? history[log.user].push(log.page) : history[log.user]=[log.page];
    }

    return history;
}

const getHistoryCombinations = (history) =>{
    const combinations ={};
    for(let key in history){
        if(history[key].length >= 3){
            for(let i = 0; i <= history[key].length - 3; i++){
                let combination = history[key].slice(i, i+3).join('');
                combinations[combination] ? combinations[combination]++ : combinations[combination] = 1 ;
            }
        }
    }

    return combinations;
}

const getMaxCombination = (historyCombinations) =>{
    let maxValue = 0 ;
    let maxCombination ="";
    for(let key in historyCombinations){
        if(historyCombinations[key] > maxValue) {
            maxValue = historyCombinations[key];
            maxCombination = key;
        }
    }

    return maxCombination;
}


console.log(getMaxCombination(getHistoryCombinations(getHistoryByUser(logs))));