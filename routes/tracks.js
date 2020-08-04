const router = require("express").Router();
const tracksCtrl = require("../controllers/tracks");


router.get("/", tracksCtrl.index);

module.exports = router;