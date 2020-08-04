const Artist = require("../models/artist");
const Track = require("../models/track");
const Album = require("../models/album");
const artist = require("../models/artist");

module.exports = {
    index,
    create
};

function index(req, res) {
    Artist.find({}, function(err, artists) {
        Album.find({}, function(err, albums) {
            Track.find({}, function(err, tracks) {
                res.render("artists/index", { title: "All Artists", user: req.user, artists, albums, tracks });
            });
        });
    });
}

function create(req, res) {
    Album.findById(req.params.id, function(err, album) {
        Track.findById(req.params.id, function(err, track) {
            const artist = new Artist(req.body);
            artist.album = album;
            artist.track = track;
            artist.save(function(err, artist) {
                res.redirect("/artists");

            });
        });
    });
}