const Album = require("../models/album");
const Artist = require("../models/artist");
const Track = require("../models/track");

module.exports = {
    index,
    create
};

function index(req, res) {
    Album.find({}, function(err, albums) {
        Artist.find({}, function(err, artists) {
            Track.find({}, function(err, tracks) {
                res.render("albums/index", { title: "All Albums", user: req.user, albums, artists, tracks });
            });
        });
    });
}

function create(req, res) {
    Artist.findById(req.params.id, function(err, artist) {
        Track.findById(req.params.id, function(err, track) {
            console.log(req.body);
            const album = new Album(req.body);
            album.artist = artist;
            album.tracks = track;
            album.save(function(err, album) {
                res.redirect("/albums");

            });
        });
    });
}