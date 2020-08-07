// require neccessary models for controller functions
const Track = require("../models/track");
const Album = require("../models/album");

// export functions for router
module.exports = {
    index,
    create,
    addToAlbum,
};

// render the index view
function index(req, res) {
    Track.find({}, function(err, tracks) {
        res.render("tracks/index", { title: "All Tracks", user: req.user, tracks });
    });
}

// create a new track
function create(req, res) {
    req.body.author = req.user._id;
    Track.create(req.body, function(err, track) {
        res.redirect("/tracks");
    });
}

// Associate a track to an album
function addToAlbum(req, res) {
    Album.findById(req.params.id, function(err, album) {
        album.tracks.push(req.body.trackId);
        album.save(function(err) {
            res.redirect(`/albums/${album._id}`);
        });
    });
}