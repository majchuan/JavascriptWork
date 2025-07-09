/**
 * @param {string} date
 * @return {string}
 */
 var reformatDate = function(date) {
    let contents = date.split(" ");
    let [day, month, year] = contents;
    const months = {"Jan": "01", "Feb": "02", "Mar": "03", "Apr": "04", "May": "05",
                   "Jun": "06", "Jul": "07", "Aug": "08", "Sep": "09", "Oct": "10",
                   "Nov": "11", "Dec": "12"};
    day = day.length === 3 ? "0" + day[0] : day.slice(0,2);
    return year.toString()+"-"+ months[month]+"-"+day;
    
};