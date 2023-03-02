const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    // name: {
    //     required: true,
    //     type: String
    // },
    // age: {
    //     required: true,
    //     type: Number
    // }
    _id : {
        required: true,
        type: Number
    },
    title: {
        required: true,
        type: String
    },
    description : {
        required: true,
        type: String
    },
    author: {
        required: true,
        type: String
    },
    price : {
        required: true,
        type: Number
    },
    image : {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)