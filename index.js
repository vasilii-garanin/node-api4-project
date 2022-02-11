require('dotenv').config();
const express = require('express');
const cors = require('cors');
const res = require('express/lib/response');

const server = express();

server.use(express.json());
server.use(cors());

server.get('/api/hello', (req, res) => {
    res.json({message: 'api is working'})
})

server.use('*', (req, res) => {
    res.status(`<h1>Hello World !<h1>`)
})

server.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})

console.log(process.env.PORT, process.env.NODE_ENV);
