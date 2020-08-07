// require express, and set up Router, require controller
const router = require("express").Router();
const artistsCtrl = require("../controllers/artists");

router.get("/artists", isLoggedIn, artistsCtrl.index);
router.post("/artists", isLoggedIn, artistsCtrl.create);
router.get("/artists/:id", artistsCtrl.show);
router.delete("/artists/:id", artistsCtrl.delete);
router.get("/artists/:id/edit", isLoggedIn, artistsCtrl.edit);
router.put("/artists/:id", isLoggedIn, artistsCtrl.update);

// middleware to ensure user is authorized
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/spotify');
}

// export router for the server module
module.exports = router;