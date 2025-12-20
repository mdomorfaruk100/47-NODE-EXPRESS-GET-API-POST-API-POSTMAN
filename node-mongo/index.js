const express = require('express');
const app = express();

const users = ["Asad", 'Moni', 'Sabed', 'Susmita', 'Shohan'];

app.get('/', (req, res) => {
    const fruit = {
        product: 'ada',
        price: 220,
    }
    res.send(fruit);
});

app.get('/fruits/banana', (req, res) => {
    res.send({fruit:'banana',quantity: 1000 ,price: 10000})
})

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const name = users[userId];
    console.log(req.query);
    res.send({id: userId, name })
})

app.listen(3000, () => console.log('Listening to port 3000'));
