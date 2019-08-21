const express = require('express');
const server = express();
const port = 5000;
server.use(express.json());

server.get('/' , (req,res) => {
    res.send('<h1>Web Authorization Project # 1</h1>');
})

server.listen(port , (req,res) => {
    console.log(`Server Listening on port: ${port}`);
}) 

module.exports = server;