const express = require('express');
const Post = require('../models/post.model');

const router = express.Router();

router.get('/food', async (req, res) => {
    try {
        const foods = await Post.find({});
        return res.status(200).send(foods)
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "internal server error"
        })
    }
})
router.get('/food/:id', async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const food = await Post.findOne({
            _id: id
        });
        return res.status(200).send(food)
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "internal server error"
        })
    }
})
router.post('/food', async (req, res) => {
    try {
        const {
            description,
            location,
            image,
            distributor,
            foods
        } = req.body;
        const newPost = new Post({
            description,
            location,
            image: image || "",
            distributor,
            isBooked: false,
            isDelivered: false,
            foods: foods
        })
        await newPost.save()
        res.status(200).send({
            message: "Added successful"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "internal server error"
        })
    }
})
router.post('/food/code/:id', async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const update = await Post.updateOne({
            _id: id
        }, {
            $set: {
                code: req.body.code,
                isBooked: true
            }
        })
        console.log(update);
        res.status(200).send({
            message: "code added successful"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "internal server error"
        })
    }
})
router.post('/food/receive/:id', async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const {
            code
        } = req.body
        const update = await Post.findOne({
            _id: id,
            code
        })
        if (update) {
            await Post.updateOne({
                _id: id
            }, {
                $set: {
                    isDelivered: true
                }
            })
            res.status(200).send({
                message: "code added successful"
            })
        } else {
            res.status(400).send({
                message: "No such product"
            })

        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "internal server error"
        })
    }
})
module.exports = router