// require mongoose, and set up Schema variable shortcut
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create the user Schema
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

// compile the schema into a model, then export that model for te controllers
module.exports = mongoose.model("User", userSchema);