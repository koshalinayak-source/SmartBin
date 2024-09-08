const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/SmartBin`);

const userSchema = mongoose.Schema({
    username : String ,
    email : String,
    password : String,
    isAdmin: { type: Boolean, default: false },
    profilePic : {
        type:String,
        default:"defaultPhoto.webp",
    },
    garbageRequests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'garbage'
    }],
    recycleRequests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recycleItem'
    }]

})

module.exports = mongoose.model("user",userSchema);
