/*
*Finding the Shortest Path in Javascript: Breadth First Search
*/

const tree = {
	"10": {
		value: "10",
		left: "4",
		right: "17",
	},
	"4": {
		value: "4",
		left: "1",
		right: "9",
	},
	"17": {
		value: "17",
		left: "12",
		right: "18",
	},
	"1": {
		value: "1",
		left: null,
		right: null,
	},
	"9": {
		value: "9",
		left: null,
		right: null,
	},
	"12": {
		value: "12",
		left: null,
		right: null,
	},
	"18": {
		value: "18",
		left: null,
		right: null,
	},
};

/*
*Find smallest value
*/
const breathFirstSearch = (root,rootNode)=>{
    const queue = [] ;
    queue.push(rootNode);
    let smallestNode = null;
    while(queue.length > 0){
        let currentNode = queue[0];
        if(currentNode.left !== null && currentNode.right !== null){
            if(parseInt(currentNode.value) > parseInt(root[currentNode.left].value) && parseInt(currentNode.value) < parseInt(root[currentNode.right].value)){
                smallestNode = smallestNode === null ? root[currentNode.left] :
                smallestNode.value > root[currentNode.left].value ? root[currentNode.left] : smallestNode ;
            }
            if(currentNode.value < root[currentNode.left].value && currentNode.value > root[currentNode.right].value ){
                smallestNode = smallestNode === null ? root[currentNode.right] :
                smallestNode.value > root[currentNode.right].value ? root[currentNode.right] : smallestNode ;
            }
            if(currentNode.value > root[currentNode.left].value && currentNode.value > root[currentNode.right].value){
                smallestNode = smallestNode === null ? 
                root[currentNode.right].value > root[currentNode.left].value ? root[currentNode.left] : root[currentNode.right] :
                smallestNode.value > root[currentNode.right].value && smallestNode.value < root[currentNode.left].value ? root[currentNode.right] : 
                smallestNode ;
            }

            queue.push(root[currentNode.left]);
            queue.push(root[currentNode.right]);
        }

        if(currentNode.left !== null && currentNode.right === null){
            if(currentNode.value > root[currentNode.left].value){
                smallestNode = currentNode.left;
            }
            queue.push(root[currentNode.left]);
        }

        if(currentNode.left === null && currentNode.right !== null){
            if(currentNode.value > root[currentNode.right].value){
                smallestNode = currentNode.right;
            }

            queue.push(root[currentNode.right]);
        }

        queue.shift();
    }

    return smallestNode;
}

console.log(breathFirstSearch(tree,tree["10"]));

/*
*
start point [0,0],
deliveryCoordinates = [[1,3],[2,1],[1,1],[-2,2],[-1,1],[-3,-2],[-2,-1],[3,-1],[1,-2],[1,4]];
find the shortest path
*/
const deliveryCoordinates = [[1,3],[2,1],[1,1],[-2,2],[-1,1],[-3,-2],[-2,-1],[3,-1],[1,-2],[1,4]];
const rootNode =[0,0];

const findShortestRoute = (deliveryCoordinates, rootNode)=>{
    const deque =[];
    const path= [];
    const shortestPathDeliveryCoordinate = {
        distance : 0,
        shortestNode :[],
        index : 0
    }
    let index = 0;
    deque.push(rootNode);
    while(deliveryCoordinates.length > 0){
        const currentNode = deque[0];
        const twoLocationDistance = Math.sqrt(Math.pow(currentNode[0] - deliveryCoordinates[index][0],2) + Math.pow(currentNode[1]- deliveryCoordinates[index][1],2));
        if(shortestPathDeliveryCoordinate.distance === 0){
            shortestPathDeliveryCoordinate.distance = twoLocationDistance ;
            shortestPathDeliveryCoordinate.shortestNode = deliveryCoordinates[index];
            shortestPathDeliveryCoordinate.index = index;   
        }else if(shortestPathDeliveryCoordinate.distance > twoLocationDistance){
            shortestPathDeliveryCoordinate.distance = twoLocationDistance ;
            shortestPathDeliveryCoordinate.shortestNode = deliveryCoordinates[index];
            shortestPathDeliveryCoordinate.index=index;
        }
        if(index === deliveryCoordinates.length-1){
            //remove this shortest path location from delivercoordinates
            path.push(shortestPathDeliveryCoordinate.shortestNode);
            deque[0] = shortestPathDeliveryCoordinate.shortestNode ;
            deliveryCoordinates.splice(shortestPathDeliveryCoordinate.index,1);
            index = 0;
            shortestPathDeliveryCoordinate.distance = 0;
            shortestPathDeliveryCoordinate.shortestNode = [];
            shortestPathDeliveryCoordinate.index = 0;
        }else{
            index++;
        }
    }

    return path;
}

console.log(findShortestRoute(deliveryCoordinates,rootNode));