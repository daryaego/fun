const format = require('string-format-js');
const answers = require('./answers');

const express = require('express');
const app = express();
const port = process.argv.slice(2)?.[0] ?? 3001;

const logger = (req, res, next) => {
    console.log(req.method, req.url)
    next();
}

app.use(logger);

app.get('/hello', (req, res) => {
    res.send('Hello, comrade');
    res.end();
});

app.get('/i_want', (req, res) => {
    // res.send(answers[Math.floor(Math.random()*answers.length)].format(req.query))
    req.query.name = req.query.name ?? 'это'
    res.send(answers[Math.floor(Math.random()*answers.length)].format(req.query))
})

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`)
})

module.exports = app