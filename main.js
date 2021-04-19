const express = require('express');
const app = express();
const port = 3001;

app.get('/hello', (req, res) => {
    res.send('Hello, comrade');
});

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`)
})

module.exports = app