// require express, and set up Router, require controller
const router = require("express").Router();
const artistsCtrl = require("../controllers/artists");

router.get("/", isLoggedIn, artistsCtrl.index);
router.post("/", isLoggedIn, artistsCtrl.create);

// middleware to ensure user is authorized
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/spotify');
}

// export router for the server module
module.exports = router;