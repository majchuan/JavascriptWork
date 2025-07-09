/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    const hash_tickets = {};

    for(const [src, dest] of tickets){
        hash_tickets[src] ? hash_tickets[src].push(dest) : hash_tickets[src] =[dest];
    }
 
    for(let key in hash_tickets){
       hash_tickets[key].sort();
    }

    const itinerary = [];
    dfs(hash_tickets, "JFK", itinerary);

    return itinerary.reverse();
};

const dfs=(hash_tickets , airport, itinerary) =>{
    while(hash_tickets[airport] != null && hash_tickets[airport].length > 0){
        dfs(hash_tickets, hash_tickets[airport].shift(), itinerary);
    }
    itinerary.push(airport);
}