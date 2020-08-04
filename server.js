// require the necessary modules for web app
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const morgan = require("morgan");
const cors = require("cors");
const methodOverride = require("method-override");
const port = process.env.PORT || 8888;

// load the env variables

require("dotenv").config();

// create the express app
const app = express();

// connect to the MongoDB w mongoose, also require passport for oauth

require("./config/database");
require("./config/passport");

// require routes

const indexRoutes = require("./routes/index");
const tracksRoutes = require("./routes/tracks");

// set view engine to ejs

app.set("view engine", "ejs");

// mount middleware

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.json());
app.use(cors());
app.use(session({
    secret: "box",
    resave: false,
    saveUninitialized: true
}));

// mount passport middleware
app.use(passport.initialize());
app.use(passport.session());


// mount routes

app.use("/", indexRoutes);
app.use("/tracks", tracksRoutes);

// listen up!! and check

app.listen(port, () => {
    console.log(`Express is listening on port:${port}`);
});