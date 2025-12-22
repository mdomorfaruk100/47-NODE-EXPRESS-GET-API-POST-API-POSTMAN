const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());
// app.use(express.json()); // This  is used to read post method json data from request body
// app.use(bodyParser.json()); // This bodyParser middleware is used to read post method json data from request body

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
    res.send({id: userId, name })
});

// post
app.post('/addUser', (req, res)=>{
    console.log('data: ', req.body)
    // save to database
    const user = req.body;
    user.id = 55;
    res.send(user);
});

app.listen(3000, () => console.log('Listening to port 3000'));
