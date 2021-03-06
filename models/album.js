const mongoose = require("mongoose");
const Schema = mongoose.Schema;

albumSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    releaseDate: {
        type: Date,
        default: Date.now
    },

    label: {
        type: String,
        default: "Universal"
    },

    tracks: [{
        type: Schema.Types.ObjectId,
        ref: "Track"
    }],

    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }


}, {
    timestamps: true

});

module.exports = mongoose.model("Album", albumSchema);