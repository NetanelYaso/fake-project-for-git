const lawyerModel = require("../models/lawyersModel");
const validateLawyer = require("../validation/lawyerValidation");
const key = process.env.SECRET_KEY;
const getAll = async (req, res) => {
    await lawyerModel.find({})
        .then((lawyers, error) => {
            if (error) {
                return res.status(400).json({ success: false, error });
            }
            if (lawyers.length === 0) {
                return res.json({ success: false, massage: "no lawyers found" });
            }
            res.status(200).json({ success: true, lawyers })
        })
}

const getById = async (req, res) => {
    await lawyerModel.findById(req.params.id)
        .then((lawyer) => {
            if (!lawyer) {
                return res.json({ success: false, massage: "lawyer is not found" });
            }
            return res.status(200).json({ success: true, lawyer });
        })
        .catch(error => res.status(400).json({ success: false, error }))
}

const create = async (req, res) => {
  const { error } = validateLawyer(req.body.lawyer);
  if (error) return res.status(400).json(error);
    try {
        if(req.body.lawyer.avatar){
        const avatar  = req.body.lawyer.avatar;
      const result = await cloudinary.uploader.upload(avatar, {
        folder: "team_project_lawyers",
      });
      req.body.lawyer.avatar= {
        public_id: result.public_id,
        url: result.secure_url,
      }
    }
        await lawyerModel.insertMany(req.body.lawyer)
            .then((result) => res.status(300).json({ success: true, massage: result }))
            .catch(error => res.status(400).json({ success: false, error}))
    } 
    catch (err) {
      return console.log({ success: false, err});
    }
}

const update = async (req, res) => {
    lawyerModel.findByIdAndUpdate(req.body.lawyer)
        .then((lawyers) => res.status(200).json({ sucsess: true, lawyers }))
        .catch(error => res.status(400).json({ success: false, error }))
}

const deleteLawyer = async (req, res) => {
    await lawyerModel.findByIdAndDelete(req.params.id)
        .then(lawyers => res.status(200).json({ success: true, lawyers }))
        .catch(error => res.status(400).json({ success: false, error }))
}
module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteLawyer
}