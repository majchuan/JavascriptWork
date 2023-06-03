/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    const hash_ManagerEmployee ={};

    for(let i = 0 ; i < n ; i++){
        if(manager[i] != -1){
            hash_ManagerEmployee[manager[i]] ? hash_ManagerEmployee[manager[i]].push(i) : hash_ManagerEmployee[manager[i]]=[i];
        }
    }

    const dfs = (employeeId) => {
        let maxTime = 0;
        const sub_employees = hash_ManagerEmployee[employeeId];
        if(sub_employees == null) return informTime[employeeId];
        for(let sub_employee_id of sub_employees){
            maxTime = Math.max(maxTime, dfs(sub_employee_id));
        }

        return maxTime + informTime[employeeId];
    }

    return dfs(headID);
};