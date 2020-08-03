const router = require("express").Router();
const passport = require("passport");


router.get("/", function(req, res) {
    res.render("index", { title: "Speakerbox" });
});

// login route
router.get('/auth/spotify', passport.authenticate('spotify', {
        scope: ['user-read-private', 'user-read-email']
    }),
    function(req, res) {});

// spotify callback route
router.get('/auth/spotify/callback',
    passport.authenticate('spotify', {
        failureRedirect: '/login'
    }),
    function(req, res) {
        res.redirect("/");
    });

// logout route
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;