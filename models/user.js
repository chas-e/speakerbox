const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    displayName: {
        type: String,
    },
    email: {
        type: String
    },

    spotifyId: {
        type: String
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);