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

    artist: {
        type: Schema.Types.ObjectId,
        ref: "Artist"
    },

    tracks: [{
        type: Schema.Types.ObjectId,
        ref: "Track"
    }]


}, {
    timestamps: true

});

module.exports = mongoose.model("Album", albumSchema);