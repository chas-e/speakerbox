const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trackSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    releaseDate: {
        type: Date,
        default: Date.now
    },

    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Track", trackSchema);