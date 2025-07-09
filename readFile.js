const fs = require('fs');
const readLine = require('readline');

const readFileByLine = async(filePath) =>{
    try{
        const fileStream = fs.createReadStream(filePath);
        const hash_line = new Map();

        const rl = readLine.createInterface({
            input : fileStream,
            crlfDelay : Infinity          
        });
    
        for await (const line of rl){
            const key = line.trim();
            if(hash_line.has(key)){
                console.log(key);
            }else{
                hash_line.set(key,1);
            }
        }
    
        console.log("Finished reading line", hash_line);
    }catch(err){
        console.error(err.message);
    }
}

readFileByLine('./data.txt');