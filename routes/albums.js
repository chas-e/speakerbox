//require express, set router, require controller module
const router = require("express").Router();
const albumsCtrl = require("../controllers/albums");

//mount routes for required functionality
router.get("/albums", isLoggedIn, albumsCtrl.index);
router.post("/albums", isLoggedIn, albumsCtrl.create);

// middleware to ensure user is authorized
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/spotify');
}

// export router for the server module
module.exports = router;