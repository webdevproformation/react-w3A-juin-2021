import Sidebar from "../commun/Sidebar";
import ArticlesService from "../services/ArticlesService";
import Like from "../commun/Like";
const Home = () => { 
    const articles = ArticlesService.getActiveArticles();

    function augmenterParent(id){
        alert(`je suis la fonction parent ${id}`);
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
                <Sidebar articles={articles} />
            </div>
        </>
    )
}  
export default Home;