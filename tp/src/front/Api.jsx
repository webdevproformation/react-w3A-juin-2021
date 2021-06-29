import { useState , useEffect } from 'react';
import axios from 'axios';
import Hook from "../commun/Hook";
import {Link} from "react-router-dom";

function Api (props){
    const [articles , setArticles] = useState([])
    useEffect(() => {
        async  function getData(){
            const {data} = await axios.get("http://localhost:3004/articles");
            setArticles(data);
        }
        getData();
    }, [])
    return (
        <>
            <h1>j'utilise une api</h1>
            <Hook route={props}/>
            {articles.map((article, index) => {
                return <h2 key={index}>
                        <Link to={`/api/${article.id}`}>
                            {article.titre}
                        </Link>
                    </h2>
            })}
        </>
    )
}
export default Api;