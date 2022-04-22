/**
Condition: 
1.cost of pushing a button  =1 , cost of switching from one button to aontehr button =2 ;
2.Actual time needs to be within 10% of the input time.
Input: desired time in minutes and seconds
Output: Laziest list of the buttons ot press to approvimately give that time.

Example:
Input 10 minitues, 0 Seconds. 
The button you enter will be 1000, which total cost 1000 = 4(press four time button) + 1*2(switch once from button 1 to button 0, switch button cost is 2)
so total will be
1000 = 4+1*2 = 6;
two options that are most "lazy":
input 999 as 9 minitues and 99 seconds (press button 9 three times) the total time will be 10 minitues and 39 seconds,
input 888 as 8 minitues and 88 seconds (press button 8 three times) the total time will be 9 miniitues and 28 seconds,
coose 888 because it is closer. total cost 888 = 3; 
*/

const findCloseTime = (input) =>{
    
}