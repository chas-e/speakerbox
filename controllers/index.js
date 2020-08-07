// require the user model
const User = require("../models/user");

// export function for the controller
module.exports = {
    index
};

// render the index view
function index(req, res) {
    User.find({}, function(err, users) {
        res.render("index", { title: "Speakerbox", user: req.user });
    });
}