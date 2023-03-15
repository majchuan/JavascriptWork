/*
*Booking hotels,
*there is the list of hotels with price. user has a every mutiple days to visited the citys, assume there is only one hotel in the citys. 
*to find out all travel routes which match the travel budget. 
*user input:
*hotels :{
    paris :[30,20,120,50,90],
    london:[50, 120, 90, 70,220],
    amsterdam:[90,120,150,143,110]
}
userTravelInCity = 2 days,
budget = 580;
*/

const travelInBudgets =(hotels,userTravelInCity, budget) =>{
    const citys = Object.keys(hotels);
    const trips = [];
    const visited = new Set();
    dfsCityAndPrice(hotels, citys, trips, visited, userTravelInCity, [], budget, 0);
    for(let t of trips){
        console.log(t[0], t[1], t[2]);
    }
    return trips;
}

const dfsCityAndPrice = (hotels, citys, trips, visited, userTravelInCity, totalBudgets, budget, totalSum) =>{
    if(visited.size == citys.length){
        if( totalSum <= budget ){
            trips.push([[...visited], totalBudgets.slice(), totalSum]);
        }
        return;
    }

    for(let city of citys){
        if(visited.has(city)) continue;
        visited.add(city);
        for(let i = 0 ; i < hotels[city].length -1 ; i++){
            let j = i;
            let days = hotels[city].slice(i, i+ userTravelInCity).map(x => {
                return {day : j++ , price : x } ;
            });
            let daysSum = days.reduce((x,y) => x + y.price,0);
            totalSum += daysSum;
            totalBudgets.push(days);
            dfsCityAndPrice(hotels, citys, trips, visited, userTravelInCity, totalBudgets,budget, totalSum);
            totalSum -= daysSum;
            totalBudgets.pop();
        }
        visited.delete(city);
    }
}
const dfsCity=(hotels, citys , trips, visited)=>{

    if(visited.size == citys.length){
        trips.push([...visited]);
        return;
    }

    for(let city of citys){
        if(visited.has(city)) continue;
        visited.add(city);
        dfsCity(hotels, citys, trips, visited);
        visited.delete(city);
    }
}

const dfsPrice = (hotels, trip, tripIndex, userTravelInCity, budget, totalBudgets, result)=>{
    
    if(totalBudgets.length == trip.length){
        let totalSum = 0;//totalBudgets.reduce((x,y) => x[1] + y[1],0);
        for(let tb of totalBudgets){
            totalSum += tb[1];
        }
        if(totalSum <= budget){
            result.push([trip,totalBudgets.slice(), totalSum]);
        }
        return;
    }

    for(let i = tripIndex ; i < trip.length ; i++){
        const prices = hotels[trip[i]];
        for(let j = 0 ; j < prices.length -1; j++){
            let days= prices.slice(j, j+userTravelInCity);
            let sum = days.reduce((x,y) => x+y,0);
            totalBudgets.push([days,sum]);
            dfsPrice(hotels, trip, i+1 , userTravelInCity, budget, totalBudgets, result);
            totalBudgets.pop();
        }
    }
    return ;
}

const hotels ={
    paris :[30,20,120,50,90],
    london:[50, 120, 90, 70,220],
    amsterdam:[90,120,150,143,110]
};
const userTravelInCity = 2;
const budget = 450;


//console.log(travelInBudgets(hotels, userTravelInCity, budget));
travelInBudgets(hotels,userTravelInCity,budget);