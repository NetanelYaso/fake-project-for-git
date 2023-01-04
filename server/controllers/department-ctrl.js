const departmentModel = require("../models/departmentsModel");
const validateDepartment = require("../validation/departmentValidation");
const getAll = async (req, res) => {
    await departmentModel.find({})
        .then((departments, error) => {
            if (error) {
                return res.status(400).json({ success: false, error });
            }
            if (departments.length === 0) {
                return res.json({ success: false, massage: "no departments found" });
            }
            res.status(200).json({ success: true, departments })
        })
}

const getById = async (req, res) => {
    await departmentModel.findById(req.params.id)
        .then((department) => {
            if (!department) {
                return res.json({ success: false, massage: "department is not found" });
            }
            return res.status(200).json({ success: true, department });
        })
        .catch(error => res.status(400).json({ success: false, error }))
}

const create = async (req, res) => {
  const { error } = validateDepartment(req.body.department);
  if (error) return res.status(400).json(error);
    await departmentModel.insertMany(req.body.department)
        .then((result) => res.status(300).json({ success: true, massage: result }))
        .catch(error => res.status(400).json({ success: false, error }))
}

const update = async (req, res) => {
    departmentModel.findByIdAndUpdate(req.body.department)
        .then((departments) => res.status(200).json({ sucsess: true, departments }))
        .catch(error => res.status(400).json({ success: false, error }))
}

const deleteDepartment = async (req, res) => {
    await departmentModel.findByIdAndDelete(req.params.id)
        .then(departments => res.status(200).json({ success: true, departments }))
        .catch(error => res.status(400).json({ success: false, error }))
}
module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteDepartment
}