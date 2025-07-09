/*
*Question: How will you rotate a square (N x N) matrix by 90 degrees in the anti-clockwise direction without using any extra space?
Answer: Suppose we have the following matrix:

1 2 3
4 5 6
7 8 9

Then, rotating it by 90 degrees in the anti-clockwise direction will result in the following matrix:

3 6 9
2 5 8
1 4 7

Following deductions can be made after examining the aforementioned resultant matrix:

The first row of the source matrix will result in the first column of the obtained matrix in the reverse order
The second row of the source matrix will result in the second column of the obtained matrix in the reverse order
The last row of the source matrix will result in the last column of the obtained matrix in the reverse order
Any N x N matrix will have floor(N/2) square cycles. For each square cycle, elements in the corresponding cell will be swapped 
in the anti-clockwise direction; from top to left, left to bottom, bottom to the right, and from right to the top.
*/

/*
*
Question: You are given an array with positive numbers. Explain how you will find the largest subset of the array containing 
elements that are Fibonacci numbers.
Answer: A simple approach for finding out the largest subset of an array of positive numbers that contain Fibonacci numbers is to 
iterate through all the elements of the array. Then, check for every number whether it is a Fibonacci number or not. 
If it then adds it to the result.

Although the aforementioned approach is simple, it isn’t efficient. Following steps can be followed for devising an 
efficient way of achieving the same:

Find the max in the array
Generate Fibonacci numbers until the max of the array and store the same in a hash table
Traverse the array again and add all numbers present in the array and the hash table to the result
*/