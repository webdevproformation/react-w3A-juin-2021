import { useState , useEffect } from 'react';
import axios from 'axios';
import Hook from "../commun/Hook";
function Api (){
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
            <Hook />
            {articles.map((article, index) => {
                return <h2 key={index}>{article.titre}</h2>
            })}
        </>
    )
}
export default Api;