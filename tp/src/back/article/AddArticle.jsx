import {useState} from "react";
import ArticlesService from "../../services/ArticlesService";
import {schemaArticle } from "../../verif/schema";

const AddArticle = (props) => {
   const [titre, setTitre] =  useState("un titre");
   const [contenu, setContenu] = useState("un contenu par défaut");
   const [status, setStatus] = useState(1);
   const [erreurs, setErreurs] = useState([]);

   function handleSubmit(e){
       e.preventDefault();

       const nouvelArticle = {
           titre : titre,
           contenu : contenu ,
           isActif : (status == 1) ? true : false,
           like : 0
       }
       
       const verif = schemaArticle.validate(nouvelArticle , {abortEarly : false})
       
       if(!Object.keys(verif).includes("error")){
            const service = new ArticlesService();
            service.add(nouvelArticle);
            props.history.push("/admin");
            return ;
       }
       setErreurs( verif.error.details )


   }
    return (
        <>
            <h1>Ajouter une nouvel article</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="titre">titre</label>
                    <input type="text" className="form-control" id="titre" name="titre" value={titre} onChange={ (e) => setTitre(e.currentTarget.value) }/>
                </div>
                <div className="form-group">
                    <label htmlFor="contenu">contenu</label>
                    <textarea name="contenu" id="contenu"  rows="5" className="form-control" onChange={ (e) => setContenu(e.currentTarget.value) } value={contenu}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="status">status</label>
                    <select name="status" id="status" className="form-select" onChange={ (e) => setStatus(e.currentTarget.value) } value={status}>
                        <option value="1">Actif</option>
                        <option value="0">Inactif</option>
                    </select>
                </div>
                <div className="form-group mt-3">
                    <input type="submit" className="btn btn-success"/>
                </div>
            </form>
            {erreurs.length > 0 && <div className={`alert alert-${(erreurs[0].color === undefined) ? "warning" : erreurs[0].color} mt-3`}>
            <ul className="mb-0">
               {erreurs.map((erreur, index) => { 
                   return <li key={index}>{erreur.message}</li>
                })}
            </ul>
        </div>}
        </>
    )
}

export default AddArticle;