const Album = require("../models/album");
const Artist = require("../models/artist");
const Track = require("../models/track");

module.exports = {
    index,
    create,
    show,
    delete: deleteAlbum,
    edit,
    update
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
        res.redirect("/albums", { user: req.user });
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
        res.redirect(`/albums/${album._id}`, { user: req.user });
    });
}