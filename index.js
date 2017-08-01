import express from 'express';

let app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const server = app.listen(3000, () => {
    console.log(`Server is running on port ${server.address().port}!`);
});
