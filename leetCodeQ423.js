/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
    const nums = [
    // from top to bottom
    // [digit, digit in words,  'unique letter' in 'digit in words'  ]
        [0, "zero", "z"], // z is unique letter in zero - if we see from top to bottom of this list
        [6, "six", "x"], //  x is unique letter in six - if we see from top to bottom
        [2, "two", "w"], //  w is unique letter in two
        [8, "eight", "g"],
        [4, "four", "u"],
        [3, "three", "r"],
        [5, "five", "f"],
        [7, "seven", "v"],
        [9, "nine", "i"],
        [1, "one", "o"],
    ];

    const freq = {};
    for(let ch of s){
        freq[ch] = (freq[ch] || 0) + 1 ;
    }
    console.log(freq);

    const result = [];

    for(const [n, w, unique] of nums){
        while(freq[unique] > 0 ){
            result.push(n);

            for(let ch of w){
                freq[ch] = (freq[ch] || 0) - 1 ;
            }
        }
    }

    result.sort((a,b) => a -b );
    return result.join('');
};


const s= "owoztneoer";
console.log(originalDigits(s));