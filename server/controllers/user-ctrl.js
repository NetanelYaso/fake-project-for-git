const userModel = require("../models/usersModel");
const validateUser = require("../validation/userValidation");
const key = process.env.SECRET_KEY;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cloudinary = require("../DB/cloudinaryDB");

const getAll = async (req, res) => {
  await userModel.find({}).then((users, error) => {
    if (error) {
      return res.status(400).json({ success: false, error });
    }
    if (users.length === 0) {
      return res.json({ success: false, massage: "no users found" });
    }
    res.status(200).json({ success: true, users });
  });
};

const getById = async (req, res) => {
  await userModel
    .findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.json({ success: false, massage: "user is not found" });
      }
      return res.status(200).json({ success: true, user });
    })
    .catch((error) => res.status(400).json({ success: false, error }));
};

const create = async (req, res) => {
  try {
    const avatar = req.body.avatar;
    const result = await cloudinary.uploader.upload(avatar, {
      folder: "team_project_users",
    });
    req.body.avatar = {
      public_id: result.public_id,
      url: result.secure_url,
    };
    await userModel
      .insertMany(req.body)
      .then((result) =>
        res.status(300).json({ success: true, massage: result })
      )
      .catch((error) => res.status(400).json({ success: false, error }));
  } catch (err) {
    return console.log({ success: false, err });
  }
};

const logIn = async (req, res, user) => {
  const isMatch = await bcrypt.compare(
    `${req.body.user.password}`,
    `${user.password}`
  );
  if (isMatch) {
    const payload = {
      id: user._id,
      email: user.email,
    };
    jwt.sign(payload, key, (err, token) => {
      if (err) return res.status(400).json({ err });
      return res.header("authToken", token).json({ user, token });
    });
  } else {
    return res.status(400).json({ passwordIncorrect: "Password incorrect" });
  }
};

const register = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.user.password, salt);
  req.body.user.password = hashedPassword;
  try {
    if(req.body.user.avatar){
    const avatar = req.body.user.avatar;
    const result = await cloudinary.uploader.upload(avatar, {
      folder: "team_project_users",
    });
    req.body.user.avatar = {
      public_id: result.public_id,
      url: result.secure_url,
    };
}
    await userModel
      .insertMany(req.body.user)
      .then(() => {
        res.json({ massage: `success in adding ${req.body.user.email}` });
      })
      .catch((err) => console.log(err));
  } catch (err) {
    return console.log({ success: false, err });
  }
};

const logInOrSignUpFunc = async (req, res) => {
  const { error } = validateUser(req.body.user);
  if (error) return res.status(400).json(error);
  const email = req.body.user.email;
  const user = await userModel.findOne({ email });
  console.log(user);
  if (!user) {
    return register(req, res);
  } else {
    return logIn(req, res, user);
  }
};

const update = async (req, res) => {
  userModel
    .findByIdAndUpdate(req.body)
    .then((users) => res.status(200).json({ sucsess: true, users }))
    .catch((error) => res.status(400).json({ success: false, error }));
};

const deleteUser = async (req, res) => {
  await userModel
    .findByIdAndDelete(req.params.id)
    .then((users) => res.status(200).json({ success: true, users }))
    .catch((error) => res.status(400).json({ success: false, error }));
};
module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteUser,
  logInOrSignUpFunc,
};
