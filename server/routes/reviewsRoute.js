const router = require("express").Router();
const {
    getAll,
    getById,
    create,
    update,
    deleteReview
} = require("../controllers/reviews-ctrl");


router.get("/", getAll);
router.get("/byId", getById);
router.post("/saveData", create);
router.put("/update", update);
router.delete("/delete", deleteReview)

module.exports = router;