const mongoose = require('mongoose');

const alienSchema = new mongoose.Schema(
    {
        name:{
            type: 'string',
            required: true
        },
        tech:{
            type: 'string',
            required: true
        },
        sub:{
            type: 'boolean',
            required:true,
            default: false
        }
    }
)

module.exports = mongoose.model('Alien', alienSchema);