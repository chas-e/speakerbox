const Album = require("../models/album");
const Artist = require("../models/artist");
const Track = require("../models/track");

module.exports = {
    index,
    create
};

function index(req, res) {
    Album.find({}, function(err, albums) {
        Track.find({}, function(err, tracks) {
            res.render("albums/index", { title: "All Albums", user: req.user, albums, tracks });
        });
    });
}

function create(req, res) {
    Track.findById(req.params.id, function(err, track) {
        console.log(req.body);
        const album = new Album(req.body);
        album.tracks = track;
        album.save(function(err, album) {
            res.redirect("/albums");

        });
    });
}