import express from 'express';
import DecordingSecretMessage from './decordingSecretMessage.js';

const app = express();

app.get('/', (req,res) =>{
    res.send("hell world");
    res.end();
});

const PORT = 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));


const docUrl = "https://docs.google.com/document/d/e/2PACX-1vRMx5YQlZNa3ra8dYYxmv-QIQ3YJe8tbI3kqcuC7lQiZm-CSEznKfN_HYNSpoXcZIV3Y_O3YoUB1ecq/pub?output=txt";
const docUrl1 = "https://docs.google.com/document/d/e/2PACX-1vQGUck9HIFCyezsrBSnmENk5ieJuYwpt7YHYEzeNJkIb9OSDdx-ov2nRNReKQyey-cwJOoEKUhLmN9z/pub?output=txt";

DecordingSecretMessage(docUrl1);

