const router = require("express").Router();
const passport = require("passport");


router.get("/", function(req, res) {
    res.render("index", { title: "Speakerbox" });
});

// login route
router.get('/auth/spotify', passport.authenticate('spotify', {
    scope: ['user-read-email', "user-read-private"]
}));

// spotify callback route
router.get('/oauth2callback',
    passport.authenticate('spotify', {
        successRedirect: '/',
        failureRedirect: '/login'
    }));


// logout route
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;