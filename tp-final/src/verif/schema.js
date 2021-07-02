import Joi from "@hapi/joi";

export const schemaOperation = Joi.object({
    id : Joi.any().optional(),
    nom : Joi.string().min(5).max(30).required(),
    montant : Joi.number()
})