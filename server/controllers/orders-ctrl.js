const orderModel = require("../models/ordersModel");
const validateOrder = require("../validation/orderValidation");
const getAll = async (req, res) => {
    await orderModel.find({})
        .then((orders, error) => {
            if (error) {
                return res.status(400).json({ success: false, error });
            }
            if (orders.length === 0) {
                return res.json({ success: false, massage: "no orders found" });
            }
            res.status(200).json({ success: true, orders })
        })
}

const getById = async (req, res) => {
    await orderModel.findById(req.params.id)
        .then((order) => {
            if (!order) {
                return res.json({ success: false, massage: "order is not found" });
            }
            return res.status(200).json({ success: true, order });
        })
        .catch(error => res.status(400).json({ success: false, error }))
}

const create = async (req, res) => {
    const { error } = validateOrder(req.body.order);
    if (error) return res.status(400).json(error);
    await orderModel.insertMany(req.body.order)
        .then((result) => res.status(300).json({ success: true, massage: result }))
        .catch(error => res.status(400).json({ success: false, error }))
}

const update = async (req, res) => {
    orderModel.findByIdAndUpdate(req.body.order)
        .then((orders) => res.status(200).json({ sucsess: true, orders }))
        .catch(error => res.status(400).json({ success: false, error }))
}

const deleteOrder = async (req, res) => {
    await orderModel.findByIdAndDelete(req.params.id)
        .then(orders => res.status(200).json({ success: true, orders }))
        .catch(error => res.status(400).json({ success: false, error }))
}
module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteOrder
}