/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let year = new Date(date).getFullYear()
    let month = new Date(date).getMonth()
    let day = new Date(date).getDate()
    let res = 0
    if (month == 0) {
        return day
    }
    for (let i = 0; i < month; i++) {
        res += days[i]
    }
    if (isLeapYear(year) && month != 1) {
        return res += day + 1
    } else {
        return res += day
    }
};

const isLeapYear = (year) =>{
    if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
        return true;
    }
    return false;
}