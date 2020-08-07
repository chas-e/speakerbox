const Album = require("../models/album");
const Artist = require("../models/artist");
const Track = require("../models/track");

module.exports = {
    index,
    create,
    show,
    delete: deleteAlbum,
    edit,
    update,
    addToArtist
};

function index(req, res) {
    Album.find({}, function(err, albums) {
        res.render("albums/index", { title: "All Albums", user: req.user, albums });
    });
}

function create(req, res) {
    req.body.author = req.user._id;
    Album.create(req.body, function(err, album) {
        res.redirect("/albums");
    });
}

function show(req, res) {
    Album.findById(req.params.id)
        .populate("tracks").exec(function(err, album) {
            Track.find({ _id: { $nin: album.tracks } },
                function(err, tracks) {
                    res.render("albums/show", { title: "Album Details", user: req.user, album, tracks });

                });
        });
}

function deleteAlbum(req, res) {
    Album.findByIdAndDelete(req.params.id, function(err, album) {
        res.redirect("/albums");
    });
}

function edit(req, res) {
    Album.findById(req.params.id)
        .populate("tracks").exec(function(err, album) {
            Track.find({ _id: { $nin: album.tracks } },
                function(err, tracks) {
                    res.render("albums/edit", { title: "Edit Album", user: req.user, album, tracks });
                });
        });
}

function update(req, res) {
    Album.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, album) {
        res.redirect(`/albums/${album._id}`);
    });
}

function addToArtist(req, res) {
    Artist.findById(req.params.id, function(err, artist) {
        artist.albums.push(req.body.albumId);
        artist.save(function(err) {
            res.redirect(`/artists/${artist._id}`);
        });
    });
}