/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    let neighbors = {};
    for(let i = 0 ; i < equations.length; i++){
        const currValue = values[i];
        let A = equations[i][0];
        let B = equations[i][1];
        neighbors[A] ? neighbors[A].push([B,currValue]) : neighbors[A] =[[B,currValue]];
        neighbors[B] ? neighbors[B].push([A, 1/currValue]) : neighbors[B] =[[A,1/currValue]]; 
    }
    
    let result = [];
    for (let query of queries) {
        result.push(evaluate(query, neighbors));
    }
    
    return result;
};

function evaluate(query, neighbors) {
    const [C, D] = query;
    if(neighbors[C] == null || neighbors[D] == null) return -1;
    if (C === D) return 1;
    
    let queue = neighbors[C].slice();
    let visited = new Set();
    
    while (queue.length > 0 ) {
        const [variable, value] = queue.shift();
        
        if (variable === D) return value;
        visited.add(variable);

        if(neighbors[variable] == null) return ;

        for(let [next, nextValue] of neighbors[variable]){
            if(visited.has(next)) continue;
            queue.push([next, nextValue * value]);
        }
    }
    
    return -1;
}

const equations =[["a","b"],["b","c"]];
const values =[2.0,3.0];
const queries =[["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]];

console.log(calcEquation(equations,values,queries));
/*
*Array of currenty conversion reate e.g['USD','GBP', 0.77] Which means 1 USD dollar is equal to 0.77 GBP.
*Array of containing a "From" currency and a 'to' currentcy.
*Example
*Rates : [['USD','JPY',110], ['USD','AUG',1.45],['JPY','GBP',0.007]]
*To/From currency ['GBP','AUD']
*/

const convertCurrency =(rates,currencyToChanges) =>{
    const hash_currencys={};
    for(let rate of rates){
        let currency = rate[0];
        let targetCurrency = rate[1];
        let value = rate[2];
        hash_currencys[currency] ? hash_currencys[currency].push([targetCurrency,value]) : hash_currencys[currency] = [[targetCurrency,value]];
        //reverse currency
        hash_currencys[targetCurrency] ? hash_currencys[targetCurrency].push([currency, 1/value]) : hash_currencys[targetCurrency]=[[currency,1/value]];
    }

    for(let currencyChange of currencyToChanges){
        return calcCurrency(hash_currencys, currencyChange);
    }
}

const calcCurrency=(hash_currencys, convertCurrency)=>{
    const [currency, targetCurrency] = convertCurrency;
    if(hash_currencys[currency] == null || hash_currencys[targetCurrency] == null) return -1;
    if(currency == targetCurrency) return 1; 

    let queue = hash_currencys[currency].slice();
    let visited = new Set();

    while(queue.length > 0){
        let [money,exchangeRate] = queue.shift();

        if(money == targetCurrency) return exchangeRate;

        if(hash_currencys[money] == null) return -1;

        visited.add(money);

        for(let [nextCurrency, nextVal] of hash_currencys[money]){
            if(visited.has(nextCurrency)) continue;
            queue.push([nextCurrency, nextVal * exchangeRate]);
        }

    }

    return -1;
}

const rates=[['USD','JPY',110], ['USD','AUD',1.45],['JPY','GBP',0.007]];
const currencyToChanges =[['GBP','AUD']];
console.log(convertCurrency(rates, currencyToChanges));