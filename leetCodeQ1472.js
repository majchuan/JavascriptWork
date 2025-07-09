/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.history = []
    this.stack = [homepage]
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.stack.push(url)
    this.history = []
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    while(this.stack.length > 1 && steps-- > 0){
        this.history.push(this.stack.pop())
    }
    return this.stack[this.stack.length-1]
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    while(this.history.length > 0 && steps-- > 0){
        this.stack.push(this.history.pop())
    }
    return this.stack[this.stack.length-1]
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
/*
browserHistory = new BrowserHistory("zav.com");
//browserHistory.visit("zav.com");       // You are in "leetcode.com". Visit "google.com"
browserHistory.visit("kni.com");     // You are in "google.com". Visit "facebook.com"
//browserHistory.visit("youtube.com");      // You are in "facebook.com". Visit "youtube.com"
browserHistory.back(7);                   // You are in "youtube.com", move back to "facebook.com" return "facebook.com"
browserHistory.back(7);                   // You are in "facebook.com", move back to "google.com" return "google.com"
browserHistory.forward(5);                // You are in "google.com", move forward to "facebook.com" return "facebook.com"
browserHistory.forward(1);
browserHistory.visit("pwrrbnw.com");     // You are in "facebook.com". Visit "linkedin.com"
browserHistory.visit("mosohif.com")
//browserHistory.forward(2);                // You are in "linkedin.com", you cannot move forward any steps.
browserHistory.back(9);                   // You are in "linkedin.com", move back two steps to "facebook.com" then to "google.com". return "google.com"
//browserHistory.back(7);                   // You are in "google.com", you can move back only one step to "leetcode.com". return "leetcode.com"
*/

browserHistory = new BrowserHistory("leetcode.com");
browserHistory.visit("google.com");       // You are in "leetcode.com". Visit "google.com"
browserHistory.visit("facebook.com");     // You are in "google.com". Visit "facebook.com"
browserHistory.visit("youtube.com");      // You are in "facebook.com". Visit "youtube.com"
browserHistory.back(1);                   // You are in "youtube.com", move back to "facebook.com" return "facebook.com"
browserHistory.back(1);                   // You are in "facebook.com", move back to "google.com" return "google.com"
console.log(browserHistory.forward(1));                // You are in "google.com", move forward to "facebook.com" return "facebook.com"
console.log(browserHistory.visit("linkedin.com"));     // You are in "facebook.com". Visit "linkedin.com"
console.log(browserHistory.forward(2));                // You are in "linkedin.com", you cannot move forward any steps.
console.log(browserHistory.back(2));                   // You are in "linkedin.com", move back two steps to "facebook.com" then to "google.com". return "google.com"
console.log(browserHistory.back(7));                   // You are in "google.com", you can move back only one step to "leetcode.com". return "leetcode.com"