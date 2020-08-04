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
                res.render("tracks/index", { title: "All Tracks", tracks, artists, albums });
            });
        });
    });
}

function create(req, res) {

}