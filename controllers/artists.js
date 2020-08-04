const Artist = require("../models/artist");
const Track = require("../models/track");
const Album = require("../models/album");

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

}