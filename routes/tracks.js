const router = require("express").Router();
const tracksCtrl = require("../controllers/tracks");


router.get("/tracks", isLoggedIn, tracksCtrl.index);
router.post("/tracks", isLoggedIn, tracksCtrl.create);
router.post("/albums/:id/tracks", isLoggedIn, tracksCtrl.addToAlbum);

// middleware to ensure user is authorized
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/spotify');
}

// export router to server module
module.exports = router;