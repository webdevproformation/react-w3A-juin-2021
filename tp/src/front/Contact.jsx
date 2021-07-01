import Joi from "@hapi/joi";

export const Contact = () => {

    const demande = {
        email : "contact@yahoo.fr",
        sujet : "yyy",
        message : "j'ai une question",
        like : -3
    }
    // on a un formulaire avec 3 champs et on doit vérifier si ce qui a été saisi est conforme 
    // définir un schéma Joi
    const schema = Joi.object({
        email : Joi.string().min(3).max(50).required(),
        sujet : Joi.string().min(3).max(50).required(),
        message : Joi.string().min(3).max(50).required(),
        like : Joi.number().greater(0)
    });

    // rdv 11h15 @ toute suite bon café !! 

    const verif = schema.validate(demande);
    console.log(verif);

    return <h1>Nous Contacter</h1>;
}

