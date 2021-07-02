import  Like  from "./Like" ; 
import { useDispatch } from "react-redux";
import { deleteArticle , getArticles } from "../actions/article.action";
import {useState} from "react";

const Article = (props) => {
    const {title , body , auteur , like, id} = props.article;
    const [edition, setEdition] = useState(false);
    const dispatch = useDispatch();
    const handleClick = (id) =>{
        // alert(id);
        dispatch(deleteArticle(id));
       // dispatch(getArticles());
    }

    return <div className="col-6">
        <article className="card mb-4">
            <header className="card-header">
                <h2 className="mb-0">{title}</h2>
            </header>
            <div className="card-body">
                <img src="http://placehold.it/600x300" alt="" className="img-thumbnail mb-2"/>
                {edition ? <form>
                    <textarea value={body} className="form-control" rows="6"></textarea>
                </form>  :  <p className="mb-0">{body}</p> }
                
            </div>
            <footer className="card-footer d-flex justify-content-between">
                {/* <p className="mb-0">{auteur}</p> */}
                <div>
                    <button className="btn btn-danger" onClick={() => {handleClick(id)}}> supprimer </button>
                    <button className="btn btn-warning ms-3" onClick={() => setEdition(!edition)}> modifier </button>
                </div>
               
                <Like nb={like}/>
            </footer>
        </article>
    </div>
}
export default Article ;