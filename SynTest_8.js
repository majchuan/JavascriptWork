/**
 * DeliveryCoordinates using pointer(x,y) like longtitude , latitude represent a location 
 * All driver start pointer as (0,0), please assign driver delivery location and find its
 * shortest path to deliver goods 
 * solution: we can separate all deliver coordinatior divide it to four direction. 
 * so based on four directions, we assign delivery coordinators to drivers. 
 */

const deliveryCoordinates = [[1,3],[2,1],[1,1],[-2,2],[-1,1],[-3,-2],[-2,-1],[3,-1],[1,-2],[1,4]];
const drivers = 4;

/*
*startpoint = [0,0]
*/
const findShortestRoute = (startPoint,targetDestinations, deliverLocationOrders) => {
    const shortPath = {
        startPoint : startPoint,
        endPoint : [],
        shortDistance : Number.MAX_SAFE_INTEGER
    }
    targetDestinations.forEach(element => {
        const twoPointDistance = Math.sqrt(Math.pow(element[0]-startPoint[0],2) + Math.pow(element[1] - startPoint[1],2))
        if(shortPath.shortDistance > twoPointDistance ){
            shortPath.shortDistance = twoPointDistance;
            shortPath.endPoint = element 
        }
    });
    deliverLocationOrders.push(shortPath);
    targetDestinations.splice(targetDestinations.findIndex(element => 
        element[0]== shortPath.endPoint[0] && element[1]== shortPath.endPoint[1]),
        1);
    if(targetDestinations.length == 0){
        return deliverLocationOrders;
    }else{
        deliverLocationOrders = findShortestRoute(shortPath.endPoint, targetDestinations, deliverLocationOrders);
    }

    return deliverLocationOrders;
}

const findShortPath = (driverTargetLocation,driverDirections) =>{
    driverTargetLocation.forEach(element => {
        console.log("Driver Name",element.driver, "Driver delivery location", element.coordinate);
    });

    driverTargetLocation.filter(element => driverDirections[0].includes(element.driver)).
    forEach(ele => {
        const northEastDriverPathOrder = findShortestRoute([0,0],ele.coordinate,[]);
        console.log("north East direction best route",northEastDriverPathOrder.map(element => element.endPoint));
    });

    driverTargetLocation.filter(element => driverDirections[1].includes(element.driver)).
    forEach(ele => {
        const eastSouthDriverPathOrder = findShortestRoute([0,0],ele.coordinate,[]);
        console.log("east south direction best route",eastSouthDriverPathOrder.map(element => element.endPoint));
    });

    driverTargetLocation.filter(element => driverDirections[2].includes(element.driver)).
    forEach(ele => {
        const southEastDriverPathOrder = findShortestRoute([0,0],ele.coordinate,[]);
        console.log("south west direction best route",southEastDriverPathOrder.map(element => element.endPoint));
    });

    driverTargetLocation.filter(element => driverDirections[3].includes(element.driver)).
    forEach(ele => {
        const westNorthDriverPathOrder = findShortestRoute([0,0],ele.coordinate,[]);
        console.log("west north direction best route",westNorthDriverPathOrder.map(element => element.endPoint));
    });
}

/*
* assign driver to 4 different directions (northeast, eastsouth,southwest, westnorth)
*/
const assignDriversDirection =(drivers)=>{
    const driverDirection ={
        northEast: 0,
        eastSouth: 1,
        southWest: 2,
        westNorth: 3
    }
    const northEastDrivers =[];
    const eastSouthDrivers =[];
    const southWestDrivers= [];
    const westNorthDrivers =[];
    for(let i =1; i<=drivers ; i++){
        switch(i%4){
            case driverDirection.northEast :
                northEastDrivers.push(i);
                break;
            case driverDirection.eastSouth :
                eastSouthDrivers.push(i);
                break;
            case driverDirection.southWest :
                southWestDrivers.push(i);
                break;
            case driverDirection.westNorth :
                westNorthDrivers.push(i)
                break;
        }
    }

    return [northEastDrivers,eastSouthDrivers,southWestDrivers,westNorthDrivers];
}

/*
*Create route for mutliple drivers based on the delivery coordinates locations
*/
const createDeliveryRoutes = (deliveryCoordinates,drivers) =>{

    const driverDirections = assignDriversDirection(drivers);

    const driverTargetLocation =[{
        driver : 0 ,
        coordinate : []
    }];
    

    const driverDirectionIndex ={
        northEast : 0,
        eastSouth : 1,
        southWest : 2,
        westNorth : 3
    }
    
    let northEastIndex = 0;
    let eastSouthIndex = 0;
    let southWestIndex = 0;
    let westNorthIndex = 0;
    // based on its value to deterine what direction this location belong to 
    deliveryCoordinates.forEach(element => {
        switch(true){
            case element[0] > 0 && element[1] > 0 :
                //mutliple location is abled to assigned to one driver. 
                const findElement1 = driverTargetLocation.find(element => 
                    element.driver == driverDirections[driverDirectionIndex.northEast][northEastIndex]);
                if(findElement1 != undefined){
                    findElement1.coordinate.push(element);
                }else{
                    driverTargetLocation.push(
                        {
                            driver: driverDirections[driverDirectionIndex.northEast][northEastIndex], 
                            coordinate : [[element[0] , element[1]]]
                        });
                }
                northEastIndex++;
                break;
            case element[0] < 0 && element[1] > 0 :
                const findElement2 = driverTargetLocation.find(element => 
                    element.driver == driverDirections[driverDirectionIndex.eastSouth][eastSouthIndex]);
                if(findElement2 != undefined){
                    findElement2.coordinate.push(element);
                }else{
                    driverTargetLocation.push({
                        driver: driverDirections[driverDirectionIndex.eastSouth][eastSouthIndex], 
                        coordinate : [[element[0],element[1] ]]
                    });
                }
                eastSouthIndex++;
                break;
            case element[0] < 0 && element[1] < 0 :
                const findElement3 = driverTargetLocation.find(element => 
                    element.driver == driverDirections[driverDirectionIndex.southWest][southWestIndex]);
                if(findElement3 != undefined){
                    findElement3.coordinate.push(element);
                }else{
                    driverTargetLocation.push({
                        driver: driverDirections[driverDirectionIndex.southWest][southWestIndex], 
                        coordinate : [[element[0],element[1] ]]
                    });
                }
                southWestIndex++;
                break;
            case element[0] > 0 && element[1] < 0 :
                const findElement4 = driverTargetLocation.find(element => 
                    element.driver == driverDirections[driverDirectionIndex.westNorth][westNorthIndex]);
                if(findElement4 != undefined){
                    findElement4.coordinate.push(element);
                }else{
                    driverTargetLocation.push({
                        driver: driverDirections[driverDirectionIndex.westNorth][westNorthIndex], 
                        coordinate : [[element[0],element[1] ]]
                    });
                }
                westNorthIndex++;
                break;
        }

        // one direction will have at least one driver, so we have split the orders by first come first have to assign location 
        // to driver who is in the same direction.
        if(northEastIndex == driverDirections[driverDirectionIndex.northEast].length) {
            northEastIndex = 0 ;
        }
        if(eastSouthIndex == driverDirections[driverDirectionIndex.eastSouth].length) {
            eastSouthIndex = 0 ;
        }
        if(southWestIndex == driverDirections[driverDirectionIndex.southWest].length) {
            southWestIndex = 0 ;
        }
        if(westNorthIndex == driverDirections[driverDirectionIndex.westNorth].length) {
            westNorthIndex = 0 ;
        }

    });

    // find each drivers shortest path in the one direction 
    findShortPath(driverTargetLocation,driverDirections)
   
}

createDeliveryRoutes(deliveryCoordinates,drivers);


