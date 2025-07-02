const mongoose = require('mongoose');
const { boolean } = require('zod');
require('dotenv').config();

mongoose.connect('process.env.MONGODB_URL')
// .env 

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: boolean,
        default: false
    }
});

const todo = mongoose.model('todo',todoSchema)

module.exports = {
    
}
