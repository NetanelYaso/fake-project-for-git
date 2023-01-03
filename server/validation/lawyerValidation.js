const Joi = require("@hapi/joi");

module.exports =  validateLawyer = (lawyer) => {
    const schema = Joi.object({
        name: Joi.string().min(5).required(),
        email: Joi.string().min(5).required(),
        phone: Joi.number().min(9).max(18).required(),
        experience: Joi.string().required(),
    });
    const{error}=schema.validate(lawyer, {abortEarly:false});
    return {error}
};
