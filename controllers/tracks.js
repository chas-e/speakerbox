const Track = require("../models/track");
const Artist = require("../models/artist");
const Album = require("../models/album");


module.exports = {
    index,
    create,
    addToAlbum
};

function index(req, res) {
    Track.find({}, function(err, tracks) {
        res.render("tracks/index", { title: "All Tracks", user: req.user, tracks });
    });
}

function create(req, res) {
    const track = new Track(req.body);
    track.save(function(err, track) {
        res.redirect("/tracks");
    });
}

function addToAlbum(req, res) {
    Album.findById(req.params.id, function(err, album) {
        album.tracks.push(req.body.trackId);
        album.save(function(err) {
            res.redirect(`/albums/${album._id}`, { user: req.user });
        });
    });
}