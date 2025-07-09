/*
const orders = [
    {pickupTime :"2021-04-30 20:00:00 UTC", merchant:"roots" , cost:"500.00"},
    {pickupTime :"2021-04-30 08:00:00 UTC", merchant:"kitkat" , cost:"500.00"},
    {pickupTime :"2021-04-30 07:00:00 UTC", merchant:"vc" ,   cost:"500.00"},
    {pickupTime :"2021-04-30 14:00:00 UTC", merchant:"roots" , cost:"500.00"},
    {pickupTime :"2021-04-30 16:00:00 UTC", merchant:"gaps" , cost:"500.00"},
    {pickupTime :"2021-04-30 13:00:00 UTC", merchant:"gaps" , cost:"500.00"},
    {pickupTime :"2021-04-30 12:00:00 UTC", merchant:"roots" , cost:"500.00"},
    {pickupTime :"2021-04-30 09:00:00 UTC", merchant:"vc" , cost:"500.00"},
    {pickupTime :"2021-04-30 12:00:00 UTC", merchant:"kitkat" , cost:"500.00"},
];

console.log("hello world");

const pickUpOrders = orders.filter(x => new Date(x.pickupTime).getHours() < 14 && x.merchant==="roots");

let totalCost = 0 ;
pickUpOrders.forEach(x => totalCost += parseFloat(x.cost));

console.log(pickUpOrders.reduce( (a, b) => a + parseFloat(b.cost), 0));
console.log(pickUpOrders.length);
console.log(totalCost);

console.log(new Date().toLocaleDateString() === "4/30/2021");

console.log(orders);
*/

let i ; 
let N = 4;
for(i = 0 ; i < N ; i++)
{
    process.stdout.write("L\n");
    //console.log(i);
    
    if(i === N-2){
        let j = 1;
        while(j < N){
            process.stdout.write("L");
            //console.log("L");
            j++;
        }
    }
}
