import Sidebar from "../commun/Sidebar";
import ArticlesService from "../services/ArticlesService";
import Like from "../commun/Like";
import { useState } from "react";

const Home = () => { 
    const objetArticle = new ArticlesService;

    const [articles, setArticles] = useState(objetArticle.getActiveArticles());

    function augmenterParent(id){
       // const results = objetArticle.augmenteLike(id);
       // console.log(results);
        setArticles(prevState => {
            console.log(prevState)
            const articleRecherche = prevState.find((item) => { return item.id === id });
            const index = prevState.indexOf(articleRecherche);
            prevState[index].like++
            return [...prevState] ;
        }); // refresh de la vue ! 
    }

    function rechercher(texteRecherche){
        setArticles(prevState => {
           /*  console.log(`je suis la fonction recherché dans le parent ${texteRecherche}`);
            console.log(prevState); */
            const articlesFiltre = prevState.filter( (article) => { 
                return article.titre.includes(texteRecherche)
            });
            // console.log(articlesFiltre);
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
                            <div className="card-footer">
                                <Like nb={article.like} id={article.id} augmente={augmenterParent} />
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