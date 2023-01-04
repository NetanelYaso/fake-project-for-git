const Joi = require("@hapi/joi");

module.exports =  validateUser = (user) => {
    const schema = Joi.object({
        email: Joi.string().min(5).required().email(),
        password: Joi.string().min(5).required(),
        name:Joi.string().min(5),
        phone:Joi.string().min(9).max(18),
    });
    const{error}=schema.validate(user, {abortEarly:false});
    return {error}
};
