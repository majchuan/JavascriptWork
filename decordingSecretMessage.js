//const fetch = require('node-fetch'); // Ensure you have installed 'node-fetch'
import fetch from "node-fetch";
import * as cheerio from "cheerio";


const DecordingSecretMessage =  async (url) => {
    try {
        // Fetch the content of the Google Doc
        //const urltoTest = url + "?output=txt";
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const text = await response.text();
        const $ = cheerio.load(text);
        const cells = $('table > tbody >tr > td > p > span');
        const items = cells.map((index, element) =>{
            console.log($(element).text());
            return ($(element).text());
        }).get();
        console.log(items);
        // Parse the character and coordinate information
        const gridData = [];
        for(let i = 0 ; i < items.length; i += 3){
            const x = parseInt(items[i],10);
            const y = parseInt(items[i+2],10);
            const char = items[i+1];
            if(!isNaN(x) && !isNaN(y)){
                gridData.push({char,x,y});
            }
        }

        // Find the size of the grid
        const maxX = Math.max(...gridData.map(data => data.x));
        const maxY = Math.max(...gridData.map(data => data.y));

        // Create a grid and fill it with spaces
        const grid = Array.from({ length: maxY + 1 }, () =>
            Array(maxX + 1).fill(' ')
        );

        // Place the characters in the grid
        for (const { char, x, y } of gridData) {
            grid[y][x] = char;
        }
        // Print the grid row by row
        for(let i = grid.length-1 ; i >= 0 ; i--){
            console.log(grid[i].join(''));
            //console.log('');
        }
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

export default DecordingSecretMessage;


