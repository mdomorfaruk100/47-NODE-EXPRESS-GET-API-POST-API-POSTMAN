const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(res);
    res.send('<h1>I know how to open Node...YAY</h1>')
});

app.listen(3000, () => console.log('Listening to port 3000'));
