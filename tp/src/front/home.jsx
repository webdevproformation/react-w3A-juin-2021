import Sidebar from "../commun/Sidebar";
import ArticlesService from "../services/ArticlesService";
import Like from "../commun/Like";
import { useState } from "react";
import {Link} from "react-router-dom";

const Home = () => { 
    
    const [articles, setArticles] = useState((new ArticlesService()).getActiveArticles());
    //const objetArticle = new ArticlesService();

    function augmenterParent(id){
        setArticles(prevState => {
      
            const articleRecherche = prevState.find((item) => { return item.id === id });
            const index = prevState.indexOf(articleRecherche);
            prevState[index].like = prevState[index].like + 1;
           
            return [...prevState] ;
        }); // refresh de la vue ! 
    }

    function rechercher(texteRecherche){
        setArticles(prevState => {
           /*  console.log(`je suis la fonction recherché dans le parent ${texteRecherche}`);
            console.log(prevState); */
            if(texteRecherche.length === 0){
                return (new ArticlesService()).getActiveArticles()
            }
            const articlesFiltre = prevState.filter( (article) => { 
                return article.titre.toLowerCase().includes(texteRecherche.toLowerCase())
            });
            // console.log(articlesFiltre);
            // rdv 15H50 @ toute suite !! 
            return articlesFiltre;
        });
    }

    return (
        <>
            <h1>je suis la home page</h1>
            <div className="col-9">
                <div className="row">
                    {articles.map((article, index) => 
                    <article className="col-4" key={index}>
                        <div className="card">
                            <header className="card-header">
                                <h2>{article.titre}</h2>
                            </header>
                            <img src="http://via.placeholder.com/300x200" alt="" />
                            <div className="card-body">
                                {article.contenu}
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                        <Like nb={article.like} id={article.id} augmente={augmenterParent} />
                        <Link to={`/article/${article.id}`} className="btn btn-dark">voir &rarr; </Link>
                            </div>
                        </div>
                    </article>
                    )}
                </div>
            </div>
            <div  className="col-3">
                <Sidebar articles={articles} action={rechercher} />
            </div>
        </>
    )
}  
export default Home;