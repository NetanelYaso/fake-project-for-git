const router = require("express").Router();
const {
    getAll,
    getById,
    create,
    update,
    deleteUser
} = require("../controllers/users-ctrl");


router.get("/", getAll);
router.get("/byId", getById);
router.post("/saveData", create);
router.put("/update", update);
router.delete("/delete", deleteUser)

module.exports = router;
// const router = require("express").Router();
// const {
//     getAll,
//     getById,
//     create,
//     update,
//     deleteOrder
// } = require("../controllers/orders");


// router.get("/", getAll);
// router.get("/byId", getById);
// router.post("/saveData", create);
// router.put("/update", update);
// router.delete("/delete", deleteOrder)

// module.exports = router;