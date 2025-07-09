/**
 * @param {character[]} chars
 * @return {number}
 */
 var compress = function(chars) {
    let index = 0
    let i = 0
    
    while(i < chars.length){
        let j = i
       
        while(j < chars.length && chars[j] === chars[i]){
            j++
        }
        chars[index++] = chars[i]
        let count = j - i + ''
        
        if(j-i > 1){
            for(let i = 0; i < count.length; i++){
                chars[index++] = count[i]
            }
        }
        i = j
    }
    return index
};

var compressSlow = function(chars) {
    let c1 = 0;
    let c2 = 0;
    let repeater = 1;
    
    while(c1 < chars.length-1){
        if(chars[c1] != chars[c1+1]){
            //set first value characters
            chars[c2] = chars[c1];
            c2++;
            if(repeater > 1){
                let w = repeater.toString();
                for(let s of w ){
                    chars[c2] = s ;
                    c2++;
                }
            }
            repeater = 0 ;
        }
        c1++;
        repeater++;
    }

    chars[c2] = chars[c1];
    c2++;
    if(repeater > 1){
        let w = repeater.toString();
        for(let s of w){
            chars[c2] = s;
            c2++;
        }
    }
    
    
    return c2;
};