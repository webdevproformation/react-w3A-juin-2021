import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addArticle , getArticles} from "../actions/article.action";

const Form = () => {

    const [article , setArticle]= useState(() => {return {title : "" , body : "", like : 0}})
    
    const dispatch = useDispatch();

    const submit = e => {
        e.preventDefault();

        dispatch(addArticle(article)); // créer l'article en BDD et mettre à jour le store

        // dispatch(getArticles()); // mettre à jour la liste des articles 
        // vider le formulaire
        setArticle({title : "" , body : "", like : 0});
    }

    const change = e => {
        const {value, name} = e.currentTarget ;
        setArticle(prevArticle => {
            return { ...prevArticle, [name] : value }
        });
    }

    return <>
        <h3 className="card-title fs-5 mt-3">Créer un article</h3>
        <form onSubmit={submit}>
            <div className="form-group">
                <label htmlFor="title">title</label>
                <input type="text" name="title" id="title" className="form-control" value={article.title} onChange={change}/>
            </div>
            <div className="form-group">
                <label htmlFor="body">body</label>
                <textarea name="body" id="body" className="form-control" value={article.body} onChange={change}></textarea>
            </div>
            <div className="form-group mt-3 d-flex justify-content-end">
                <input type="submit" className="btn btn-outline-success" />
            </div>
        </form>
    </>
}

export default Form ;