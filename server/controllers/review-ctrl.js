const reviewModel = require("../models/reviewsModel");
const validateReview = require("../validation/reviewValidation");
const getAll = async (req, res) => {
    await reviewModel.find({})
        .then((reviews, error) => {
            if (error) {
                return res.status(400).json({ success: false, error });
            }
            if (reviews.length === 0) {
                return res.json({ success: false, massage: "no reviews found" });
            }
            res.status(200).json({ success: true, reviews })
        })
}

const getById = async (req, res) => {
    await reviewModel.findById(req.params.id)
        .then((review) => {
            if (!review) {
                return res.json({ success: false, massage: "review is not found" });
            }
            return res.status(200).json({ success: true, review });
        })
        .catch(error => res.status(400).json({ success: false, error }))
}

const create = async (req, res) => {
  const { error } = validateReview(req.body.review);
  if (error) return res.status(400).json(error);
    await reviewModel.insertMany(req.body.review)
        .then((result) => res.status(300).json({ success: true, massage: result }))
        .catch(error => res.status(400).json({ success: false, error }))
}

const update = async (req, res) => {
    reviewModel.findByIdAndUpdate(req.body.review)
        .then((reviews) => res.status(200).json({ sucsess: true, reviews }))
        .catch(error => res.status(400).json({ success: false, error }))
}

const deleteReview = async (req, res) => {
    await reviewModel.findByIdAndDelete(req.params.id)
        .then(reviews => res.status(200).json({ success: true, reviews }))
        .catch(error => res.status(400).json({ success: false, error }))
}
module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteReview
}