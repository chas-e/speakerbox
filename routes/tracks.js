const router = require("express").Router();
const tracksCtrl = require("../controllers/tracks");


router.get("/tracks", tracksCtrl.index);

module.exports = router;