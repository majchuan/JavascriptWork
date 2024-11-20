//const fetch = require('node-fetch'); // Ensure you have installed 'node-fetch'
import fetch from "node-fetch";
import * as cheerio from "cheerio";

async function printUnicodeGrid(url) {
    try {
        // Fetch the content of the Google Doc
        //const urltoTest = url + "?output=txt";
        const response = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const text = await response.text();
        const $ = cheerio.load(text);
        const body = $('body').text();
        console.log(body);
        // Split the document into lines
        const lines = text.split('\n');

        // Parse the character and coordinate information
        const gridData = [];
        for (const line of lines) {
            if (line.trim()) { // Ignore empty lines
                const parts = line.split(/\s+/); // Split by whitespace
                if (parts.length === 3) {
                    const char = parts[0];
                    const x = parseInt(parts[1], 10);
                    const y = parseInt(parts[2], 10);
                    if (!isNaN(x) && !isNaN(y)) {
                        gridData.push({ char, x, y });
                    }
                }
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
        for (const row of grid) {
            console.log(row.join(''));
        }
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

// Example usage with the Google Doc URL
const docUrl = "https://docs.google.com/document/d/e/2PACX-1vRMx5YQlZNa3ra8dYYxmv-QIQ3YJe8tbI3kqcuC7lQiZm-CSEznKfN_HYNSpoXcZIV3Y_O3YoUB1ecq/pub?output=txt"
printUnicodeGrid(docUrl);
