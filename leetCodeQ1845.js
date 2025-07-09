/**
 * @param {number} n
 */
var SeatManager = function(n) {
    this.hash_seat = {};
    this.index = 1 ;
    for(let i = 1 ; i <= n ; i++){
        this.hash_seat[i]=0;
    } 
 };
 
 /**
  * @return {number}
  */
 SeatManager.prototype.reserve = function() {
     this.hash_seat[this.index] = 1;
     let reverseSeatNumber = this.index;
     while(this.hash_seat[this.index] == 1){
         this.index++;
     }
     return reverseSeatNumber;
 };
 
 /** 
  * @param {number} seatNumber
  * @return {void}
  */
 SeatManager.prototype.unreserve = function(seatNumber) {
     this.hash_seat[seatNumber]=0 ;
     if(seatNumber < this.index) this.index = seatNumber;
 
 };
 
 /** 
  * Your SeatManager object will be instantiated and called as such:
  * var obj = new SeatManager(n)
  * var param_1 = obj.reserve()
  * obj.unreserve(seatNumber)
  */