const Track = require("../models/track");
const Artist = require("../models/artist");
const Album = require("../models/album");


module.exports = {
    index,
    create
};

function index(req, res) {
    Track.find({}, function(err, tracks) {
        Artist.find({}, function(err, artists) {
            Album.find({}, function(err, albums) {
                res.render("tracks/index", { title: "All Tracks", user: req.user, tracks, artists, albums });
            });
        });
    });
}

function create(req, res) {
    console.log(req.body);
    Album.findById(req.params.id, function(err, album) {
        Artist.findById(req.params.id, function(err, artist) {
            const track = new Track(req.body);
            track.album = album;
            track.artist = artist;
            track.save(function(err, track) {
                res.redirect("/tracks");

            });
        });
    });
}