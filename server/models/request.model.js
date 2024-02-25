const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
    foodId : mongoose.Types.ObjectId,
    userId : mongoose.Types.ObjectId,
    foods : String, 
    token : String
})

const Request = mongoose.model('Request',requestSchema)

module.exports = Request