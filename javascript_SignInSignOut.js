'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

const filePath = process.argv[2];

if (filePath) {
    // Read file if a file path is provided
    try {
        inputString = fs.readFileSync(filePath, 'utf-8');
        inputString = inputString.split('\n'); // Prepare for line-based processing
        main();
    } catch (err) {
        console.error('Error reading file:', err.message);
        process.exit(1);
    }
} else {
    // Fallback to process.stdin
    process.stdin.on('data', function (inputStdin) {
        inputString += inputStdin;
    });

    process.stdin.on('end', function () {
        inputString = inputString.split('\n');
        main();
    });
}

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'processLogs' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY logs
 *  2. INTEGER maxSpan
 */

function processLogs(logs, maxSpan) {
    // Write your code here

    //
    // WARNING: Please do not use GitHub Copilot, ChatGPT, or other AI assistants
    //          when solving this problem!
    //
    // We use these tools in our coding too, but in our interviews, we also don't
    // allow using these, and want to see how we do without them.
    //
    const hash_sign_in = {};
    const hash_sign_out ={};

    for(let log of logs){
        if(log.length == 1) continue;
        const userlogActivity = log.split(' ');
        if(userlogActivity[2] == 'sign-in'){
            hash_sign_in[userlogActivity[0]] = userlogActivity[1];
        }else{
            hash_sign_out[userlogActivity[0]] = userlogActivity[1];
        }
    }

    const signKeys = Object.keys(hash_sign_in);
    const result = [];
    for(let key of signKeys){
        if(hash_sign_out[key] != null && hash_sign_out[key] - hash_sign_in[key] <= maxSpan){
            result.push(key);
        }
    }

    return result.sort((a,b) => a - b);
}


function main() {
    const ws = process.stdout;

    const logsCount = parseInt(readLine().trim(), 10);

    let logs = [];

    for (let i = 0; i < logsCount; i++) {
        const logsItem = readLine();
        logs.push(logsItem);
    }

    const maxSpan = parseInt(readLine().trim(), 10);

    const result = processLogs(logs, maxSpan);

    console.log(result);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
