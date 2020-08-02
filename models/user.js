const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    displayName: {
        type: String,

    }

}, { timestamps: true });