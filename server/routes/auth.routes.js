const express = require('express');
const User = require('../models/user.model');

const router = express.Router();

router.post('/auth/login',async (req,res)=> {
    try {
        const { email , password } = req.body;
        const existingUser = await User.findOne({ email , password },{ password : 0 })
        if(!existingUser) return res.status(404).send({ message : "User not found" })
        return res.status(200).send(existingUser)
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message : "internal server error" })
    }
})

router.post('/auth/register', async(req,res)=> {
    try {
        const { username , password , mobileNumber , email , pincode , role } = req.body;
        const user = await User.findOne({ email })
        if(user) return res.status(400).send({ message : "User already found" });
        const newUser = new User({
            username,password,mobileNumber,email,pincode , role , isAdmin : false
        })
        await newUser.save()
        res.status(200).send({ message : "Register successful" })
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message : "internal server error" })
    }
})

module.exports = router