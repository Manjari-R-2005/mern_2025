const mongoose = require('mongoose');
const userData = new mongoose.Schema({
    username:String,
    paasword:String

})

module.exports = mongoose.model('User',userData)