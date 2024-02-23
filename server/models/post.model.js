const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    description: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    distributor: {
        type: String,
        require: true
    },
    isDelivered: {
        type: Boolean,
        require: true
    },
    isBooked: {
        type: Boolean,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    code : String ,
    foods: String
})


const Post = mongoose.model('Post', postSchema)

module.exports = Post;