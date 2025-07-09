/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    let map = new Map(); // email: [account_indices]
    let nameMap = new Map();

    for (let i=0; i<accounts.length; i++) {
        let [name, ...emails] = accounts[i];
        for (const e of emails) {
            const list = map.get(e) || [];
            list.push(i);
            map.set(e, list);
            nameMap.set(e, name);
        }
    }

    const answer = [];
    let visited = new Set();  // account indices
    for (const [email, list] of map.entries()) {
        const emailSet = new Set();
        dfs(accounts, list, emailSet, visited, map);
        if (emailSet.size > 0) {
            const emails = Array.from(emailSet).sort();
            answer.push([nameMap.get(emails[0]), ...emails]);
        }
    }
    return answer;
};

const dfs=(accounts, list, emailSet, visited, map) => {
    for (let i=0; i<list.length; i++) {
        const accIdx = list[i];
        if (visited.has(accIdx))
            continue;

        visited.add(accIdx);
        let [name, ...emails] = accounts[accIdx];
        emails.map(e => {
            emailSet.add(e);
            dfs(accounts, map.get(e), emailSet, visited, map);
        }); 
    }
}
