const mongoose = require('mongoose');


const blacklistSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '24h'  // TTL of 24 hours
    }
});


module.exports = mongoose.model('Blacklist', blacklistSchema);
