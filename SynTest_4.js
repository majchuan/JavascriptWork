/*
*Arrays: move zeros to the left
*Given an integer array, move all elements that are 0 to the left while maintaining the order of other elements in the array. 
*The array has to be modified in-place. Try it yourself before reviewing the solution and explanation.
*
def move_zeros_to_left(A):
  if len(A) < 1:
    return

  lengthA = len(A)
  write_index = lengthA - 1
  read_index = lengthA - 1

  while(read_index >= 0):
    if A[read_index] != 0:
      A[write_index] = A[read_index]
      write_index -= 1

    read_index -= 1

  while(write_index >= 0):
    A[write_index]=0;
    write_index-=1
    
v = [1, 10, 20, 0, 59, 63, 0, 88, 0]
print("Original Array:", v)

move_zeros_to_left(v)

print("After Moving Zeroes to Left: ", v)
*
*/

let intArray = [1,10,20,0,59,63,0,88,0]
let slowIndex = 0 ;
let fastIndex = 0;

for(let i =0 ; i < intArray.length ; i++)
{
    if(intArray[i] === 0)
    {
        for(let j = i-1 ; j >= slowIndex ; j--){
            intArray[j+1] = intArray[j];
        }
        intArray[slowIndex] = 0;
        slowIndex++;
    }
}

console.log(intArray);

