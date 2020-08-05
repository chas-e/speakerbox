//require express, set router, require controller module
const router = require("express").Router();
const albumsCtrl = require("../controllers/albums");

//mount routes for required functionality
router.get("/", isLoggedIn, albumsCtrl.index);
router.post("/", isLoggedIn, albumsCtrl.create);
router.get("/:id", isLoggedIn, albumsCtrl.show);
router.delete("/:id", isLoggedIn, albumsCtrl.delete);
router.get("/:id/edit", isLoggedIn, albumsCtrl.edit);
router.put("/:id", isLoggedIn, albumsCtrl.update);

// middleware to ensure user is authorized
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/spotify');
}

// export router for the server module
module.exports = router;