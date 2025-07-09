/*
Deeper search first, to find smallest node value
*/
const tree =[
    {value: 6, left: 5, right: 7},
    {value: 5, left: 3, right: 4},
    {value: 7, left: null, right: 9},
    {value: 3, left: 2, right: null},
    {value: 4, left: null, right: null},
    {value: 9, left: 8, right: 10},
    {value: 2, left: 1, right: null},
    {value: 8, left: null, right: null},
    {value: 10, left: null, right: null},
    {value: 1, left: null, right: null}
]

const dfsSearchSmallestNode = (tree) =>{
    const stack = [];
    let smallestNode = {
        value : tree[0].value ,
    };
    stack.push(tree[0]);

    while(stack.length > 0){
        const currentNode = stack.pop();
        const leftNode = tree.find(x => x.value === currentNode.left);
        const rightNode = tree.find(y => y.value === currentNode.right);
        if(leftNode && rightNode){
            if(leftNode.value <= rightNode.value ){
                smallestNode.value = smallestNode.value > leftNode.value ? leftNode.value : smallestNode.value;
            }else{
                smallestNode.value = smallestNode.value > rightNode.value ? rightNode.value : smallestNode.value;
            }
            stack.push(rightNode);
            stack.push(leftNode);
        }
        if(leftNode=== undefined && rightNode ){
            smallestNode.value = smallestNode.value > rightNode.value ? rightNode.value : smallestNode.value;
            stack.push(rightNode);
        }

        if(leftNode && rightNode === undefined){
            smallestNode.value = smallestNode.value > leftNode.value ? leftNode.value : smallestNode.value;
            stack.push(leftNode);
        }
        
    }

    return smallestNode;
}

console.log(dfsSearchSmallestNode(tree));

/*
start point [0,0],
deliveryCoordinates = [[1,3],[2,1],[1,1],[-2,2],[-1,1],[-3,-2],[-2,-1],[3,-1],[1,-2],[1,4]];
find the shortest path
*/

const dfsShortestPath = (deliveryLocations,rootNode) =>{

}