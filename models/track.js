const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trackSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: Schema.Types.ObjectId,
        ref: "Artist"

    },
    album: {
        type: Schema.Types.ObjectId,
        ref: "Album"
    },
    releaseDate: {
        type: Date
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Track", trackSchema);