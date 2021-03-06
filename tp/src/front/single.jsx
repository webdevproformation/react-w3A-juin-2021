import {useEffect, useState} from "react";
import ArticlesService from "../services/ArticlesService";
import {Link} from "react-router-dom";

const Single = (props) => {
    const [article, setArticle ] = useState({})
    useEffect( () => {
        // récupérer l'id de l'article que l'on veut afficher 
        const id = +props.match.params.id; 
        const service = new ArticlesService();
        setArticle(service.getFirst(id))
    } , [props.match.params.id]);
    return (
        <div className="col-12">
            <h1>{article.titre}</h1>
            <img src="http://via.placeholder.com/1200x300" alt="" className="img-fluid" />
            <p class="multiligne">{article.contenu}</p>
            <Link to="/" className="btn btn-dark">Retour à l'accueil</Link>
            <Link to={`/admin/modif/${article.id}`} className="btn btn-warning ms-3">Modifier article</Link>
        </div>
    )
}

export default Single ;