const Joi = require("@hapi/joi");

module.exports =  validateOrder = (order) => {
    const schema = Joi.object({
        orderNum: Joi.string().required(),
        date: Joi.date(),
        profit: Joi.number(),
    });
    const{error}=schema.validate(order, {abortEarly:false});
    return {error}
};
