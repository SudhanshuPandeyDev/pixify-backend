
const { login, signup, refresh, switchProfile } = require("../controllers/authController");
const { verifyToken } = require("../middlewares/verifyToken");

const router = require("express").Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/refresh", refresh);
router.get("/switch", verifyToken, switchProfile);

module.exports = router;
