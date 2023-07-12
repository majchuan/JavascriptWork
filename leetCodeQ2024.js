/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
    let TCount = 0
    let FCount = 0
    let maxLength = 0
    let left = 0
    let right = 0

    while (right < answerKey.length) {
      if (answerKey[right] === 'T') TCount += 1
      if (answerKey[right] === 'F') FCount += 1

      while (TCount > k && FCount > k) {
        if (answerKey[left] === 'T') TCount -= 1
        if (answerKey[left] === 'F') FCount -= 1

        left += 1
      }

      maxLength = Math.max(maxLength, right - left + 1)
      right += 1
    }

  return maxLength
};


/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswersSlowApproach = function(answerKey, k) {
    let hash_count = {};
    for(let i = 0; i < k; i++){
        hash_count[answerKey[i]] ? hash_count[answerKey[i]]++ : hash_count[answerKey[i]] = 1;
    }

    let left = 0 ; 
    let maxLength = k ;
    for(let right = k ; right < answerKey.length ; right++){
        if(hash_count[answerKey[right]]){
            hash_count[answerKey[right]]++;
        }else{
            hash_count[answerKey[right]] = 1;
        }
        while(Math.min(hash_count["T"], hash_count["F"]) > k ){
            if(hash_count[answerKey[left]]){
                hash_count[answerKey[left]]--;
                left++;
            }
        }

        maxLength = Math.max(maxLength, right - left + 1);

    }

    return maxLength;
};

