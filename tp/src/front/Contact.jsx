import { schemaContact } from "../verif/schema";
import {useState} from "react";
import axios from "axios";

export const Contact = () => {

    const [email, setEmail] = useState("");
    const [sujet, setSujet] = useState("");
    const [service, setService] = useState("");
    const [message, setMessage] = useState("");
    const [erreurs, setErreurs] = useState([]);

    // on a un formulaire avec 3 champs et on doit vérifier si ce qui a été saisi est conforme 
    // définir un schéma Joi

    const handleSubmit = async e => {
        e.preventDefault();
        const nouveauMessage = {
            email ,
            service ,
            sujet ,
            message 
        }

        const verif = schemaContact.validate(nouveauMessage , {abortEarly : false});
        console.log(Object.keys(verif).includes("error")) // {id : 1, text : "hello"}
        
        if(!Object.keys(verif).includes("error")){
            
            // lancer l'insertion en base de données 
            await axios.post("http://localhost:3004/contacts", nouveauMessage);

            setEmail("")
            setSujet("")
            setMessage("")
            setService("")
            setErreurs( [{message : "merci pour votre message !", color : "success"}] )
            return 
        }
        setErreurs( verif.error.details )
        // liste de tout ce qui est faux 
        // console.log(nouveauMessage , error); 

    }

    // rdv 11h15 @ toute suite bon café !! 

    

    return (<>
        <h1>Nous Contacter</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="email">email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} className="form-control" id="email" />
            </div>
            <div className="form-group">
                <label htmlFor="sujet">sujet</label>
                <input type="text" value={sujet} onChange={(e) => setSujet(e.currentTarget.value)} className="form-control" id="sujet" />
            </div>
            <div className="form-group">
                <label htmlFor="service">service</label>
                <select name="service" id="service" className="form-select" onChange={(e) => setService(e.currentTarget.value)} value={service} >
                    <option value="">Veuillez sélectionner un service</option>
                    <option value="sav">Service Après Vente</option>
                    <option value="technique">Service Technique</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="5" className="form-control" onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
            </div>
            <div className="form-group">
                <input type="submit" className="btn btn-outline-success mt-3" />
            </div>
        </form>
        {erreurs.length > 0 && <div className={`alert alert-${(erreurs[0].color === undefined) ? "warning" : erreurs[0].color} mt-3`}>
            <ul className="mb-0">
               {erreurs.map((erreur, index) => { 
                   return <li key={index}>{erreur.message}</li>
                })}
            </ul>
        </div>}
    </>);
}

