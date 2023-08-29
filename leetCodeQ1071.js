 /**
  Assumptions:
  1. What we can do is take substrings of str2 and check to see if they 
  compare with subtrinsg of str1 based on length of the substring of str2

  Brute force
  1. Create a loop that creates substrings of str, and check's if it's repeatable in str1 and str2
   */  

  let min = Math.min(str2.length, str1.length);
  let max = Math.max(str2.length, str1.length);

  for(let i = min; i >= 1; i--) {
      
      let sub = str1.substring(0,i);
      let sl = sub.length;

      if(str1.length % sl !== 0 || str2.length % sl !== 0) continue;

      let j = 0;
      let match = true;
      while(j < max) {
          if(j < str1.length) {
              match = str1.substring(j,Math.min(j+sl,str1.length)) == sub;
          }
          if(j < str2.length) {
              match = str2.substring(j,Math.min(j+sl,str2.length)) == sub;
          }

          if(!match) break;
          j += sl;
      }

      if(match) {
          return sub;
      }
  }

  return "";