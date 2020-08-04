const router = require("express").Router();
const tracksCtrl = require("../controllers/tracks");


router.get("/", tracksCtrl.index);
router.post("/", tracksCtrl.create);

module.exports = router;