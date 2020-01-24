const express = require('express');
const mongoose = require('mongoose');
const io = require('socket.io');
const cors = require('cors'); //Baixar isso!!

const routes = require('./routes');


const server = express();

mongoose.connect('mongodb+srv://omnistack:pixelmono13@cluster0-61oqx.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);