import { useState , useEffect } from 'react';
import axios from 'axios';
import Hook from "../commun/Hook";
import {Link} from "react-router-dom";

function Api (props){
    const [articles , setArticles] = useState([]);
    const [article , setArticle] = useState({});

    async  function getData(){
        const {data} = await axios.get("http://localhost:3004/articles?isActif=true");
        setArticles(data);
    }

    useEffect(() => {
        getData();
    }, []);

    const handleDelete = async id => {
        const reponse = await axios.delete(`http://localhost:3004/articles/${id}`);
        console.log(reponse);
        getData()
    }

    const handleModif = (article) => {
        setArticle(article)
    }

    return (
        <>
            <h1>j'utilise une api</h1>
            <Hook refresh={getData} data={article}/>
            {articles.map((article, index) => {
                return <h2 key={index}>
                        <Link to={`/api/${article.id}`}>
                            {article.titre}
                        </Link>
                        <button className="mx-3 btn btn-warning" onClick={() => handleModif(article)}>Modifier</button>
                        <button className="btn btn-danger" onClick={() => handleDelete(article.id)} >Supprimer</button>
                    </h2>
            })}
        </>
    )
}
export default Api;