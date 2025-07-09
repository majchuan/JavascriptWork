/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
/*
*BFS
*/
 var GetImportanceBFS = function(employees, id) {
    employees.sort((x,y) => x.id -y.id);
    const enqueue = [employees.find(x => x.id == id)];
    let importance = 0 ;
    while(enqueue.length>0){
        let currLength = enqueue.length;
        for(let i = 0 ; i < currLength; i++){
            let employee = enqueue.shift();
            let subLength = employee.subordinates == null ? 0 : employee.subordinates.length; 
            for(let j = 0 ; j < subLength; j++){
                let subordinate = employees.find(x => x.id == employee.subordinates[j]);
                //importance += subordinate.importance;
                enqueue.push(subordinate);
            }
            importance += employee.importance;
            
        }
    }
    
    return importance; 
};

/*
*DFS
*/
var GetImportanceDFS = function(employees, id) {
    employees.sort((x,y) => x.id - y.id);
    let employee = employees.find(x => x.id == id);
    return dfs(employees, employee);
}

const dfs = (employees, employee) =>{
    let subLength = employee.subordinates == null ? 0 : employee.subordinates.length;
    let importance  = employee.importance ;
    for(let i = 0 ; i < subLength ; i++){
        let subordinate = employees.find(x => x.id == employee.subordinates[i]);
        importance +=dfs(employees, subordinate);
    }
    
    return importance ;
}