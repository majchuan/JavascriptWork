/*
*Two words list , if they have same index and same value, consider this is exact match.
*if they just have value match but index is different, we consider this is almost match.
*for example:
*code :["X","B","F","Z","Y","I","P","G"];
*guess:["B","B","X","Z","I","E","D","A"];
*/

const code =["X","B","F","Z","A","I","D","D"];
const guess=["B","B","X","Z","I","E","D","A"];

const findMatch = (code , guess) => {

    const matchCode ={
        mcode : "",
        exactMatchNumber : 0 ,
        almostMatchNumber : 0
    };
    const matchCodeList =[matchCode];
    let exactMatchNumber = 0;
    let almostMatchNumber = 0;
    guess.forEach((element,index) =>{
        const matchIndex = code.findIndex(codeElement => codeElement === element);
        if(index == matchIndex){
            const existingMatchCode = matchCodeList.find(matchElement => matchElement.mcode === element);
            if(existingMatchCode != undefined){
                existingMatchCode.exactMatchNumber++;
                existingMatchCode.almostMatchNumber = 0 ;
            }else{
                matchCodeList.push({
                    mcode : element,
                    exactMatchNumber : 1,
                    almostMatchNumber :0
                });
            }

        }else if(matchIndex >= 0){
            const existingMatchCode = matchCodeList.find(matchElement => matchElement.mcode === element);
            if(existingMatchCode != undefined && existingMatchCode.exactMatchNumber === 0){
                existingMatchCode.exactMatchNumber = 0;
                existingMatchCode.almostMatchNumber++;
            }else{
                matchCodeList.push({
                    mcode : element,
                    exactMatchNumber : 0,
                    almostMatchNumber :1
                });
            }
        }
    });

    console.log("Exact Match Number",matchCodeList.reduce((accu,current) =>  accu + current.exactMatchNumber,0), 
    "Almost Match Number", matchCodeList.reduce((accu,current) => accu + current.almostMatchNumber,0));
}

findMatch(code, guess);

