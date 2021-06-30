import { useState , useEffect } from 'react';
import axios from 'axios';

function ApiSingle (props){
    const [article , setArticle] = useState({})
    useEffect(() => {
        async function getArticle(){
            const id = props.match.params.id;
            const {data} = await axios.get(`http://localhost:3004/articles/${id}`);
            if(data.isActif === true){
                setArticle(data);
                return 
            }
            props.history.push("/");
        }
        getArticle();
    }, [props.match.params.id , props.history])
    return (
        <>
            <h2>{article.titre}</h2>
        </>
    )
}
export default ApiSingle;