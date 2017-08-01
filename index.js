import express from 'express';
import bodyParser from 'body-parser';

import GameState from './game-state';

let app = express();
let gameState = new GameState();

const server = app.listen(3000, () => {
  console.log(`Server is running on port ${server.address().port}!`);
});

app.use(bodyParser.json());

// ROUTES

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/game-state', (req, res) => {
    res.json(gameState);
});

app.post('/join-game', (req, res) => {
    console.log(req.body);
    let { name, symbol } = req.body;
    gameState.addPlayer({ name, symbol });
    res.status(200).end();
});

app.post('/take-turn', (req, res) => {
    console.log(req.body);
    let { move } = req.body;
    gameState.addMove({ move });
    res.status(200).end();
});
