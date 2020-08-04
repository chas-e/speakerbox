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

}