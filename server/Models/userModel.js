const mongoose = require('mongoose');


const userScheema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 30 },
    email: { type: String, required: true, minlength: 3, maxlength: 30, unique: true },
    password: { type: String, required: true, minlength: 3, maxlength: 1024, },
    
}, {
    timestamps: true,
});

const userModel = mongoose.model("User", userScheema);

module.exports = userModel;