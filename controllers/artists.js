// require necessary models
const Artist = require("../models/artist");
const Track = require("../models/track");
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
            Track.find({}, function(err, tracks) {
                res.render("artists/index", { title: "All Artists", user: req.user, artists, albums, tracks });
            });
        });
    });
}

// create a new artist doc
function create(req, res) {
    Album.findById(req.params.id, function(err, album) {
        Track.findById(req.params.id, function(err, track) {
            console.log(req.body);
            const artist = new Artist(req.body);
            artist.albums = album;
            artist.tracks = track;
            artist.save(function(err, artist) {
                res.redirect("/artists");

            });
        });
    });
}