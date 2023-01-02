const router = require("express").Router();
const {
    getAll,
    getById,
    create,
    update,
    deleteDepartment
} = require("../controllers/departments-ctrl");


router.get("/", getAll);
router.get("/byId", getById);
router.post("/saveData", create);
router.put("/update", update);
router.delete("/delete", deleteDepartment)

module.exports = router;