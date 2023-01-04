const Joi = require("@hapi/joi");

module.exports =  validateOrder = (order) => {
    const schema = Joi.object({
        orderNum: Joi.string().required(),
        date: Joi.date(),
        profit: Joi.number(),
        user:Joi.required(),
        lawyer:Joi.required(),
    });
    const{error}=schema.validate(order, {abortEarly:false});
    return {error}
};
