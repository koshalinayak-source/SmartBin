const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/SmartBin`);

const garbageSchema = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user',
    },
    date : {
        type : Date,
        default : Date.now()
    },
    description: {
        type: String,
        // required: true
    },
    location: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'processed', 'completed'],
        default: 'processed'
    }
})

module.exports = mongoose.model("garbage",garbageSchema);
