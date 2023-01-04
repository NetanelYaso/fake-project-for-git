const Joi = require("@hapi/joi");

module.exports =  validateReview = (review) => {
    const schema = Joi.object({
        name: Joi.string().min(5).required(),
        coment: Joi.string().required(),
        rating: Joi.number().required()
    });
    const{error}=schema.validate(review, {abortEarly:false});
    return {error}
};
