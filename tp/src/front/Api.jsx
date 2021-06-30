import { useState , useEffect } from 'react';
import axios from 'axios';
import Hook from "../commun/Hook";
import {Link} from "react-router-dom";

function Api (props){
    const [articles , setArticles] = useState([]);
    useEffect(() => {
        async  function getData(){
            const {data} = await axios.get("http://localhost:3004/articles?isActif=true");
            setArticles(data);
        }
        getData();
    }, []);

    const handleDelete = async id => {
        const reponse = await axios.delete(`http://localhost:3004/articles/${id}`);
        console.log(reponse);
        const {data} = await axios.get("http://localhost:3004/articles?isActif=true");
        setArticles(data);
    }

    return (
        <>
            <h1>j'utilise une api</h1>
            <Hook route={props}/>
            {articles.map((article, index) => {
                return <h2 key={index}>
                        <Link to={`/api/${article.id}`}>
                            {article.titre}
                        </Link>
                        <button className="mx-3 btn btn-warning">Modifier</button>
                        <button className="btn btn-danger" onClick={() => handleDelete(article.id)} >Supprimer</button>
                    </h2>
            })}
        </>
    )
}
export default Api;