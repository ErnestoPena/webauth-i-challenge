const express = require('express');
const userDB = require('../data/users-db')
const bcrypt = require('bcrypt');


const loginRouter = express.Router();

loginRouter.post('/' , async (req , res) => {
    try {
        const { email , password} = req.headers;
        if (email && password) {
            const [existingUser] = await userDB.findEmail(email);
            if (existingUser && bcrypt.compareSync(password , existingUser.password)) {
                res.status(200).json({message: `Welcome ${existingUser.firstName} ${existingUser.lastName}`})
            } else {
                res.status(403).json({message:`The provided credentials do not match`})
            }
        } else {
            res.status(401).json({message: `Please provide credentials`});
        }
    }
    catch (err) {

    }
})



module.exports = loginRouter;