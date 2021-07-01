import { useState } from 'react';

const Form = () => {

    const [article , setArticle]= useState(() => {return {title : "" , body : "", like : 0}})

    const submit = e => {
        e.preventDefault();
    }

    const change = e => {
        const {value, name} = e.currentTarget ;
        console.log(value, name);
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