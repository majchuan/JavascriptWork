/*
*Given a book and a desired random note, we would like to see if we can create the ransom note from the book
*Example:
*Book: Give me a book that is better than a million dollars
*Ransom note: Give me a million dollars
*Response: true
*
*Book: Give me a book that is better than a million dollars
*Ransom note: Give me all your money
*Response: false
*Assume strings in book is not malformed in any way possible and only has regular ANSII characters
*/

const book ="Give me a book that is better than a million million million dollars";
const notes ="Give me a million dollars";
const book1 ="Give me a book that is better than a million dollars";
const notes1 ="Give me all you dollars";

const bookRansomMatch=(book, notes) =>{
    const bookMap ={};
    const notesMap ={};
    
    book.split(' ').forEach(element => {
        bookMap[element] ? bookMap[element]++ : bookMap[element] = 1
    });
    
    notes.split(' ').forEach(element => {
        notesMap[element] ? notesMap[element]++ : notesMap[element] = 1
    });
    
    console.log(bookMap);
    console.log(notesMap);
    
    for(let item in notesMap){
        if(bookMap[item] >= notesMap[item]){
            response = true ;
        }else{
            response = false ;
            break;
        }
    }
    
    return response;
}

console.log(bookRansomMatch(book,notes));
console.log(bookRansomMatch(book1,notes1));