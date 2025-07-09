var MyCalendar = function() {
    this.bookingTimeHash= {};
    this.bookingTime =[];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {

    if(this.bookingTimeHash[start.toString() + end.toString()] != null ){
        return false;
    } 

    if(this.bookingTime.length == 0){
        this.bookingTimeHash[start.toString() + end.toString()] = [start, end];
        this.bookingTime.push([start, end]);
        return true;
    }
    
   
    
    let i = 0 ;
    let j = this.bookingTime.length; 
    
    while(i < j){
        let mid = Math.floor((i + j)/2);
        if((this.bookingTime[mid][0] < start && this.bookingTime[mid][1] > start) || 
            (this.bookingTime[mid][0] < end && this.bookingTime[mid][1] > end) || 
            (this.bookingTime[mid][0] > start && this.bookingTime[mid][1] == end) ||
            (this.bookingTime[mid][0] == start && this.bookingTime[mid][1] < end) ||
            (this.bookingTime[mid][0] > start && this.bookingTime[mid][1] < end) || 
            (this.bookingTime[mid][0] < start && this.bookingTime[mid][1] > end)
            ){
            return false;
        }
        
        if(this.bookingTime[mid][1] <= start){
            i = mid+1; 
        }
        
        if(this.bookingTime[mid][0] >= end){
            j = mid; 
        }
    }
    
    this.bookingTime.splice(i,0,[start,end]);
    this.bookingTimeHash[start.toString() + end.toString()] = [start ,end];
    
    console.log(this.bookingTime);
    
    return true; 
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */

const myCalendar = new MyCalendar();
myCalendar.book(97,100);
myCalendar.book(33,51);
myCalendar.book(89,100);
myCalendar.book(83,100);
myCalendar.book(75,92);
myCalendar.book(76,95);
myCalendar.book(19,30);
myCalendar.book(53,63);
myCalendar.book(8,23);
myCalendar.book(18,37);
myCalendar.book(87,100);
myCalendar.book(83,100);
myCalendar.book(54,67);
myCalendar.book(35,48);
myCalendar.book(58,75);
myCalendar.book(70,89);
myCalendar.book(13,32);
myCalendar.book(44,63);
myCalendar.book(51,62);
myCalendar.book(2,15);
/*
myCalendar.book(38,44);
myCalendar.book(15,20);
myCalendar.book(27,33);
myCalendar.book(34,42);
myCalendar.book(44,50);
myCalendar.book(35,40);
myCalendar.book(24,31);
*/

