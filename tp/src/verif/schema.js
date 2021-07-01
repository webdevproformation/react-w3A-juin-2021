import Joi from "@hapi/joi";

export const schemaContact = Joi.object({
    email : Joi.string().min(3).max(50).required().email({ tlds: { allow: false } }),
    sujet : Joi.string().min(3).max(50).required(),
    message : Joi.string().min(3).max(200).required(),
    service : Joi.string().allow("sav", "technique")
});