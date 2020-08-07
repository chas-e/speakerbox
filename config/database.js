// require mongoose
const mongoose = require("mongoose");

// set up and configure mongoose
mongoose.connect(process.env.DATABASE_URL || "mongodb://localhost/speakerbox", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// create/ declare the db shortcut for mongoose.connection
const db = mongoose.connection;

// set an event lisener to make sure the db is connected, and on which port
db.on("connected", function() {
    console.log(`Mongoose connected to {db.host}:${db.port}`);
});