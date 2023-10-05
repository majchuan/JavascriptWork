/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
var largestWordCount = function(messages, senders) {
    const hash_msg ={};

    for(let i = 0 ; i < senders.length ; i++){
        hash_msg[senders[i]] ? hash_msg[senders[i]] += wordsCount(messages[i]) : hash_msg[senders[i]] = wordsCount(messages[i]);
    }

    const keys = Object.keys(hash_msg);
    keys.sort((a,b)=>{
        if(hash_msg[a] == hash_msg[b]){
            return b > a ? 1 : -1;
        }else{
            return hash_msg[b] - hash_msg[a];
        }
    });

    return keys[0];
};

const wordsCount=(message) =>{
    return message.split(' ').length;
}