import {useState , useEffect} from "react";
import ArticlesService from "../../services/ArticlesService";

const UpdateArticle = (props) => {
   const [titre, setTitre] =  useState("");
   const [contenu, setContenu] = useState("");
   const [status, setStatus] = useState(1);
   const [id, setId] = useState(1);

    useEffect(() => {
        const id = +props.match.params.id; 
        const service = new ArticlesService();
        const articleAModifier = service.getFirst(id);
        setTitre(articleAModifier.titre);
        setContenu(articleAModifier.contenu);
        setStatus(articleAModifier.isActif);
        setId(articleAModifier.id);
    },[props.match.params.id])

   function handleSubmit(e){
       e.preventDefault();

       const articleAModifier = {
           id : id , 
           titre : titre,
           contenu : contenu ,
           isActif : status
       }
       const service = new ArticlesService();
       service.update(articleAModifier);
       props.history.push("/admin"); 
   }
    return (
        <>
            <h1>Modifier un article</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="hidden" name="id" value={id}/>
                    <label htmlFor="titre">titre</label>
                    <input type="text" className="form-control" id="titre" name="titre" value={titre} onChange={ (e) => setTitre(e.currentTarget.value) }/>
                </div>
                <div className="form-group">
                    <label htmlFor="contenu">contenu</label>
                    <textarea name="contenu" id="contenu"  rows="5" className="form-control" onChange={ (e) => setContenu(e.currentTarget.value) } value={contenu}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="status">status</label>
                    <select name="status" id="status" className="form-select" onChange={ (e) => setStatus(!!+e.currentTarget.value) } value={ status === true ? 1 : 0 }>
                        <option value="1">Actif</option>
                        <option value="0">Inactif</option>
                    </select>
                </div>
                <div className="form-group mt-3">
                    <input type="submit" className="btn btn-success"/>
                </div>
            </form>
        </>
    )
}

export default UpdateArticle;