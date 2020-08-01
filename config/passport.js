const passport = require("passport");
const { deserializeUser } = require("passport");
const SpotifyStrategy = require("passport-spotify").Strategy;

passport.use(
    new SpotifyStrategy({
            clientID: process.env.SPOTIFY_CLIENT_ID,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
            callbackURL: process.env.SPOTIFY_CALLBACK_URL

        },
        function(accessToken, refreshToken, expires_in, profile, done) {
            deserializeUser.findOrCreate({ spotifyId: profile.id }, function(err, user) {
                return done(err, user);
            });
        }
    )
);