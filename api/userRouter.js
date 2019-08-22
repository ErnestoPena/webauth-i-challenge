const express = require('express');

const userRouter = express.Router()

const userDB = require('../data/users-db')

userRouter.get('/' , async (req , res) => {
    try {
        const allUsers = await userDB.find()
        res.status(200).json(allUsers);
    }   
    catch (err) {
        res.status(500).json({message: 'Something went wrong with your request', });
    } 
})




module.exports = userRouter;