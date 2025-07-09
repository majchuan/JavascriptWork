/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var strWithout3a3b = function(a, b) {
    let result = "";
    let aarr = new Array(a).fill("a");
    let barr = new Array(b).fill("b");
    let n = a+b;
    for(let i = 1 ; i <=n ; i++){
        if(result.length ==0){
            if(aarr.length >= barr.length){
                result += aarr.pop();
            }else{
                result += barr.pop();
            }
        }else if(result.length ==1){
            result = cal(aarr,barr,result);
        }else{
            let l = result[result.length - 1];
            let sl = result[result.length - 2];
            if (l == "a") {
                if (sl == "a") { // if 'aa', next should append 'b'
                    result += barr.pop();
                } else {
                    result = cal(aarr,barr,result);
                }
            } else {
                if (sl == "a") {
                    result = cal(aarr,barr,result);
                } else {  // if 'bb', next should append 'a'
                    result += aarr.pop();
                }
            }
        }
    }

    return result;
};

const cal=(aarr, barr, result)=>{
    if(aarr.length >= barr.length){
        result += aarr.pop();
    }else{
        result += barr.pop();
    }

    return result;
}


/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
/*
*I believe this is match question, but it looks like it explain very clear. 
*/
var strWithout3a3b_1 = function(a, b) {
    let targetSource = "";
    if(a >= b){
        for(let i = 0 ; i < a ; i++){
            targetSource+="a";
        }
        for(let j = 0; j<b; j++){
            targetSource +="b";
        }
    }else{
        for(let j = 0; j<b; j++){
            targetSource +="b";
        }
        for(let i = 0 ; i < a ; i++){
            targetSource+="a";
        }

    }
    

    return dfs(targetSource, a+b,0, "");
};

const dfs=(s , n , index, curr ) =>{

    if(curr.length == n){
        return curr;
    }

    for(let i = index ; i < s.length; ){
        curr += s[i];
        i = (i+1) % s.length;
        if(curr.length >= 2){
            if(curr.slice(curr.length-3) =="aaa" || curr.slice(curr.length-3)=="bbb"){
                curr = curr.slice(0, curr.length -1);
                //console.log("curr",curr);
                continue;
            }
        }
        
        return dfs(s,n,i, curr);
        //curr -= s[i];
    }

    return curr;

}
