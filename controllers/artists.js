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
        Album.find({}, function(err, albums) {
            res.render("artists/index", { title: "All Artists", user: req.user, artists, albums });
        });
    });
}

// create a new artist doc
function create(req, res) {
    Album.findById(req.params.id, function(err, album) {
        const artist = new Artist(req.body);
        artist.albums = album;
        artist.save(function(err, artist) {
            res.redirect("/artists");
        });
    });
}