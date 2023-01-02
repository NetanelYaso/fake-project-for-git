const ordersModel = require("../models/orders");

const getAll = async (req, res) => {
  await ordersModel.find({}).then((result, err) => {
    if (err) {
      res.status(400).json({ success: false, message: err });
    } else {
      res.status(200).json({ success: true, message: result });
    }
  });
};

const getById = async ()=>{
  
}