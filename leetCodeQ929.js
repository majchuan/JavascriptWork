/**
 * @param {string[]} emails
 * @return {number}
 */
 var numUniqueEmails = function(emails) {
    const hash_email={};
    
    for(let email of emails){
        hash_email[cleanEmail(email)] ? hash_email[cleanEmail(email)]++ : hash_email[cleanEmail(email)] = 1;
    }
    //console.log(hash_email);
    return Object.keys(hash_email).length;
};

const cleanEmail=(email) =>{
    const atIndex = email.indexOf("@");
    let leftEmail = email.slice(0,atIndex);
    let rightEmail = email.slice(atIndex);
    
    leftEmail = leftEmail.replaceAll(".","");
    const plusSignIndex = leftEmail.indexOf("+");
    if(plusSignIndex > 0){
        leftEmail = leftEmail.slice(0,plusSignIndex);
    }
    
    return leftEmail + rightEmail;

}