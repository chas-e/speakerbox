// require necessary models
const Artist = require("../models/artist");
const Album = require("../models/album");

// export functions 
module.exports = {
    index,
    create
};

// show initial artists view
function index(req, res) {
    Artist.find({}, function(err, artists) {
        res.render("artists/index", {
            title: "All Artists",
            user: req.user,
            artists
        });
    });
}

// create a new artist doc
function create(req, res) {
    Artist.create(req.body, function(err, artist) {
        res.redirect("/artists");
    });
}