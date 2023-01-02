const router = require("express").Router();
const {
    getAll,
    getById,
    create,
    update,
    deleteLawyer
} = require("../controllers/lawyers-ctrl");


router.get("/", getAll);
router.get("/byId", getById);
router.post("/saveData", create);
router.put("/update", update);
router.delete("/delete", deleteLawyer)

module.exports = router;