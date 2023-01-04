const router = require("express").Router();
const {
    getAll,
    getById,
    logInOrSignUpFunc,
    update,
    deleteUser,
    register,
    logIn,
} = require("../controllers/user-ctrl");


router.get("/", getAll);
router.get("/byId", getById);
router.post("/log-in__sign-up", logInOrSignUpFunc);
router.post("/log-in", logIn);
router.post("/sign-up", register);
router.put("/update", update);
router.delete("/delete", deleteUser)

module.exports = router;
