const express = require('express');
const protectedRouter = express.Router();
const userDB = require('../data/users-db')
const bcrypt = require('bcrypt');

protectedRouter.use(verifyLogedUser);

protectedRouter.get('/' , async (req , res) => {
    try {
        res.status(200).json('You are a validated user');
    }
    catch (err) {
        res.status(500).json({message:'Problems with your request'});
    }
})


async function verifyLogedUser(req , res , next) {

   try {
        const {email , password} = req.headers
        const [user] = await userDB.findEmail(email);
        
        if (user && bcrypt.compareSync(password , user.password)) {
            next();
        } else {
            res.redirect(`back`)
        }
   } 
   catch (err) {
    res.status(500).json({message:'There was a problem with your request, special'})
   }
}
    

module.exports = protectedRouter;