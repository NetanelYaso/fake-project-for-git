const getAll = async (req, res) => {
    await userModel.find({})
        .then((users, error) => {
            if (error) {
                return res.status(400).json({ success: false, error });
            }
            if (users.length === 0) {
                return res.json({ success: false, massage: "no users found" });
            }
            res.status(200).json({ success: true, users })
        })
}

const getById = async (req, res) => {
    await userModel.findById(req.params.id)
        .then((user) => {
            if (!user) {
                return res.json({ success: false, massage: "user is not found" });
            }
            return res.status(200).json({ success: true, user });
        })
        .catch(error => res.status(400).json({ success: false, error }))
}

const create = async (req, res) => {
    try {
        const avatar  = req.body.avatar;
      const result = await cloudinary.uploader.upload(avatar, {
        folder: "team_project_users",
      });
      req.body.avatar= {
        public_id: result.public_id,
        url: result.secure_url,
      }
        await userModel.insertMany(req.body)
            .then((result) => res.status(300).json({ success: true, massage: result }))
            .catch(error => res.status(400).json({ success: false, error }))
    } 
    catch (err) {
      return console.log({ success: false, err });
    }
}

const update = async (req, res) => {
    userModel.findByIdAndUpdate(req.body)
        .then((users) => res.status(200).json({ sucsess: true, users }))
        .catch(error => res.status(400).json({ success: false, error }))
}

const deleteUser = async (req, res) => {
    await userModel.findByIdAndDelete(req.params.id)
        .then(users => res.status(200).json({ success: true, users }))
        .catch(error => res.status(400).json({ success: false, error }))
}
module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteUser
}