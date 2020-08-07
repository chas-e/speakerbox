// require necessary models
const Album = require("../models/album");
const Track = require("../models/track");

// export functions for the controller
module.exports = {
    index,
    create,
    show,
    delete: deleteAlbum,
    edit,
    update
};

//  get the index view for albums
function index(req, res) {
    Album.find({}, function(err, albums) {
        res.render("albums/index", { title: "All Albums", user: req.user, albums });
    });
}

// create a new album
function create(req, res) {
    req.body.author = req.user._id;
    Album.create(req.body, function(err, album) {
        res.redirect("/albums");
    });
}

// get the detail view for an album
function show(req, res) {
    Album.findById(req.params.id)
        .populate("tracks").exec(function(err, album) {
            Track.find({ _id: { $nin: album.tracks } },
                function(err, tracks) {
                    res.render("albums/show", { title: "Album Details", user: req.user, album, tracks });

                });
        });
}

// delete an album
function deleteAlbum(req, res) {
    Album.findByIdAndDelete(req.params.id, function(err, album) {
        res.redirect("/albums");
    });
}

// get the edit view for an album
function edit(req, res) {
    Album.findById(req.params.id)
        .populate("tracks").exec(function(err, album) {
            Track.find({ _id: { $nin: album.tracks } },
                function(err, tracks) {
                    res.render("albums/edit", { title: "Edit Album", user: req.user, album, tracks });
                });
        });
}

// put update to an album in the db
function update(req, res) {
    Album.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, album) {
        res.redirect(`/albums/${album._id}`);
    });
}