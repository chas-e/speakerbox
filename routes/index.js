const router = require("express").Router();
const passport = require("passport");


router.get("/", function(req, res) {
    res.render("index", { title: "Speakerbox" });
});

// login route
router.get('/authorize', passport.authenticate('spotify', { scope: ['user-read-private', 'user-read-email'] }));

// google callback route
router.get('/oauth2callback', passport.authenticate('spotify', {
    successRedirect: '/',
    failureRedirect: '/'
}));

// logout route
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;