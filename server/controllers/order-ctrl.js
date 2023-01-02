const ordersModel = require("../models/oreders")

const getAll = async (req, res)=>{
    await ordersModel.find({})
    .then((result, err)=>{
        if(err){
            res.status(400).json({success: false, message: err})
        }
        else{
            res.status(200).json({succes:true, message: result})
        }

    })
}