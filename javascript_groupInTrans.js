'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'groupTransactions' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY transactions as parameter.
 */

function groupTransactions(transactions) {
    // Write your code here

    //
    // WARNING: Please do not use GitHub Copilot, ChatGPT, or other AI assistants
    //          when solving this problem!
    //
    // We use these tools in our coding too, but in our interviews, we also don't
    // allow using these, and want to see how we do without them.
    //
    const hash_trans = {};
    for(let trans of transactions){
        hash_trans[trans] ? hash_trans[trans]++ : hash_trans[trans] = 1 ;
    }

    const keys =Object.keys(hash_trans);

    keys.sort((a,b) => {
        if(hash_trans[a] == hash_trans[b]){
            return a.localeCompare(b);
        }else{
            return hash_trans[b] - hash_trans[a];
        }
    });

    return keys.map(element =>{
        return element.toString()+' '+hash_trans[element];
    })
}

function main() {
    const ws = process.stdout;

    const transactionsCount = parseInt(readLine().trim(), 10);

    let transactions = [];

    for (let i = 0; i < transactionsCount; i++) {
        const transactionsItem = readLine();
        transactions.push(transactionsItem);
    }

    const result = groupTransactions(transactions);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
