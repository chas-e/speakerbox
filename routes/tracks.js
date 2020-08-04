const router = require("express").Router();
const tracksCtrl = require("../controllers/tracks");


router.get("/", isLoggedIn, tracksCtrl.index);
router.post("/", isLoggedIn, tracksCtrl.create);

// middleware to ensure user is authorized
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/spotify');
}

// export router to server module
module.exports = router;