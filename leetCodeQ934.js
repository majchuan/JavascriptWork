/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {
    const m = grid.length, n = grid[0].length;
	const dirs = [[0,1], [0,-1], [1,0], [-1,0]];
	const queue = [];
	let step = 0;
	let hasFind = false;

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] === 1) {
				dfs(i, j);
				hasFind = true;
				break;
			}
		}
		if (hasFind) break;
	}

	
	while (queue.length) {
		const size = queue.length;

		for (let i = 0; i < size; i++) {
			let cur = queue.shift();
			let x = Math.floor(cur / m);
			let y = cur % n;

			for (let j = 0; j < dirs.length; j++) {
				let nx = x + dirs[j][0];
				let ny = y + dirs[j][1];
				if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] !== -1) {
					if (grid[nx][ny] === 1) return step;
					grid[nx][ny] = -1;
					queue.push(nx*m + ny);
				}
			}
		}
		step++;
	}

	return step;

	function dfs(i, j) {
		if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] !== 1) return;

		grid[i][j] = -1;
		queue.push(i*m + j);
		dfs(i-1, j);
		dfs(i+1, j);
		dfs(i, j-1);
		dfs(i, j+1);
	}
};


const grid = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]];
const grid1=[[0,1,0],[0,0,0],[0,0,1]];
const grid2 =[[0,1,0,0,0,0],[0,1,1,1,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[1,1,0,0,0,0]]

console.log(shortestBridge(grid2));