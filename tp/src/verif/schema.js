import Joi from "@hapi/joi";

export const schemaContact = Joi.object({
    email : Joi.string().min(3).max(50).required().email({ tlds: { allow: false } }),
    sujet : Joi.string().min(3).max(50).required(),
    message : Joi.string().min(3).max(200).required(),
    service : Joi.string().allow("sav", "technique")
});

export const schemaArticle = Joi.object({
    titre : Joi.string().min(3).max(100).required(),
    contenu : Joi.string().min(3).max(400).required(),
    isActif : Joi.bool(),
    like : Joi.number().equal(0)
})