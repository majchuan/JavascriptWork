/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
     let fives = 0;
    let tens = 0;
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {//5
            fives++;
        } else if (bills[i] === 10) {//10
            if (fives) {
                fives--;
                tens++;
            } else {
                return false;
            }
        } else {//20
            if (fives >= 1 && tens >= 1) {
                fives--;
                tens--;
            } else if (fives >= 3) {
                fives = fives - 3;
            } else {
                return false;
            }
        }
    }
    return true;
};

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChangeMap = function(bills) {
    const n = bills.length;
    const totalSales = n * 5 ; 
    const totalBills = bills.reduce((a,b) => a + b , 0);

    if(totalBills - totalSales > totalSales) return false ;

    const currentBills = {5 : 0, 10 : 0 , 20 : 0}; 
    for(let bill of bills){
        if(bill == 20 ){
            currentBills[20]++;
            if(currentBills[10] > 0 && currentBills[5] > 0){
                currentBills[10]--;
                currentBills[5]--;
            }else if(currentBills[5] >= 3){
                currentBills[5] = currentBills[5]-3;
            }else{
                return false;
            }
        }

        if(bill == 10){
            currentBills[10]++;
            if(currentBills[5] > 0){
                currentBills[5]--;
            }else{
                return false;
            }
        }

        if(bill == 5){
            currentBills[5]++;
        }
    }

    return true;
};
