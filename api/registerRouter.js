const express = require('express');
const bcrypt = require('bcrypt');
const userRegistration = require('../data/users-db');

const registerRouter = express.Router();

registerRouter.post('/' , verifyEmail , async (req,res) => {
    try {
        const user = req.body;

        if (user.firstName && user.lastName && user.email && user.password) {
            const hash = bcrypt.hashSync(user.password , 10);
            user.password = hash;

            const newUser = await userRegistration.add(user);
            res.status(200).json(newUser);
        } else {
            res.status(403).json({message: 'There is one or multiple missing information to get you registered'})
        }
    }
    catch (err) {
        res.status(500).json({message:'Something went wrong with your request'})
    }
})

async function verifyEmail(req , res , next) {
    try {
        const { email } = req.body;
        const [found] = await userRegistration.findEmail(email);

        if (found) {
            res.status(422).json({message: `The email: ${email} is already registered`});
        } else {
            next()
        }

    }
    catch (err) {
        res.status(500).json({message:'Something went wrong with your request, middleware'});
    }
    
}

module.exports = registerRouter;