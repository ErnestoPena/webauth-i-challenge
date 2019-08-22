const express = require('express');

const server = express();
const userRouter = require('./api/userRouter');
const loginRouter = require('./api/loginRouter');
const registerRouter = require('./api/registerRouter');

server.use(express.json());

//STRETCH
const protectedRouter = require('./api/protectedRouter');
server.use(`/api/restricted` , protectedRouter); ///${/.*/}
//End od Stretch

const port = 9000;


server.use('/api/users' , userRouter);
server.use('/api/login' , loginRouter);
server.use('/api/register' , registerRouter);

server.get('/' , (req,res) => {
    res.send('<h1>Web Authorization Project # 1</h1>');
})

server.listen(port , (req,res) => {
    console.log(`Server Listening on port: ${port}`);
}) 

module.exports = server;