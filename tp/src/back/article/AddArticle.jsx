import {useState} from "react";

const AddArticle = () => {
   const [titre, setTitre] =  useState("un titre");
   const [contenu, setContenu] = useState("un contenu par défaut");
   const [status, setStatus] = useState(0);

   function handleSubmit(e){
       e.preventDefault();

       const nouvelArticle = {
           titre : titre,
           contenu : contenu ,
           isActif : status,
           like : 0
       }
       console.log(nouvelArticle);
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
                    <textarea name="contenu" id="contenu"  rows="5" className="form-control" onChange={ (e) => setContenu(e.currentTarget.value) }>{contenu}</textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="status">status</label>
                    <select name="status" id="status" className="form-select" onChange={ (e) => setStatus(!!+e.currentTarget.value) }>
                        <option value="1" selected={ status === 1 ? true : false }>Actif</option>
                        <option value="0" selected={ status === 0 ? true : false }>Inactif</option>
                    </select>
                </div>
                <div className="form-group mt-3">
                    <input type="submit" className="btn btn-success"/>
                </div>
            </form>
        </>
    )
}

export default AddArticle;