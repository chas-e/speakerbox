// require mongoose, set up Schema shortcut variable
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create the Artist Schema
artistSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    genre: {
        type: String
    },

    albums: [{
        type: Schema.Types.ObjectId,
        ref: "Album"
    }],

}, {
    timestamps: true
});

module.exports = mongoose.model("Artist", artistSchema);