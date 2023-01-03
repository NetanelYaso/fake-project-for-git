const router = require("express").Router();
const {
    getAll,
    getById,
    logInOrSignUpFunc,
    update,
    deleteUser
} = require("../controllers/users-ctrl");


router.get("/", getAll);
router.get("/byId", getById);
router.post("/log-in__sign-up", logInOrSignUpFunc);
router.put("/update", update);
router.delete("/delete", deleteUser)

module.exports = router;
