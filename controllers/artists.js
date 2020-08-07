// require necessary models
const Artist = require("../models/artist");
const Album = require("../models/album");

// export functions 
module.exports = {
    index,
    create,
    show,
    delete: removeArtist,
    edit,
    update
};

// show initial artists view
function index(req, res) {
    Artist.find({}, function(err, artists) {
        res.render("artists/index", {
            title: "All Artists",
            user: req.user,
            artists
        });
    });
}

// create a new artist doc
function create(req, res) {
    req.body.author = req.user._id;
    Artist.create(req.body, function(err, artist) {
        res.redirect("/artists");
    });
}

function show(req, res) {
    Artist.findById(req.params.id)
        .populate("albums").exec(function(err, artist) {
            Album.find({ _id: { $nin: artist.albums } },
                function(err, albums) {
                    res.render("artists/show", {
                        title: "Artist Detail",
                        user: req.user,
                        artist,
                        albums
                    });
                });
        });
}

function removeArtist(req, res) {
    Artist.findByIdAndDelete(req.params.id, function(err, artist) {
        res.redirect("/artists");
    });
}

function edit(req, res) {

}

function update(req, res) {

}