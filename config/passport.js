const passport = require("passport");
const SpotifyStrategy = require("passport-spotify").Strategy;
const User = require("../models/user");

passport.use(
    new SpotifyStrategy({
            clientID: process.env.SPOTIFY_CLIENT_ID,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
            callbackURL: process.env.SPOTIFY_CALLBACK_URL

        },
        function(accessToken, refreshToken, expires_in, profile, done) {
            User.findOne({ "spotifyId": profile.id }, function(err, user) {
                if (user) {
                    return done(err, user);
                } else {
                    const newUser = new User({
                        displayName: profile.displayName,
                        email: profile.emails[0].value,
                        spotifyId: profile.id
                    });
                    newUser.save(function(err) {
                        return done(err, newUser);
                    });
                }
            });
        }
    ));

// serialize user for session
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

// deserialize user after session
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});