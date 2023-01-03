const Joi = require("@hapi/joi");

module.exports =  validateReview = (review) => {
    const schema = Joi.object({
        name: Joi.string().min(5).required(),
        active: Joi.boolean().required(),
        coverImage: Joi.required(),
        lawyers: Joi.required(),
        lastUpdate: Joi.date().required(),
    });
    const{error}=schema.validate(review, {abortEarly:false});
    return {error}
};
