/*
Bubble sort :
compare two items in a list, if first value smaller than second value , swap it.
*/

const regularArray=[5,8,6,9,12,10,7,4,3,2,2,2,1];

const sortedArray = (regularArray) =>{
    let swap = true ;
    do{
        swap = false;
        for(let i = 0; i < regularArray.length - 1; i++){
            if(regularArray[i] > regularArray[i+1]){
                let temp = regularArray[i+1];
                regularArray[i+1] = regularArray[i];
                regularArray[i]=temp;
                swap = true;
            }
        }
    }while(swap)

    return regularArray;
}

console.log(sortedArray(regularArray));