import Sidebar from "../commun/Sidebar";
import ArticlesService from "../services/ArticlesService";

const Home = () => { 
    const articles = (new ArticlesService()).getData();
    return (
        <>
            <h1>je suis la home page</h1>
            <div className="col-9">
                <div className="row">
                    {articles.map((article, index) => 
                    <article className="col-4" key={index}>
                        <div className="card">
                            <header class="card-header">
                                <h2>{article.titre}</h2>
                            </header>
                            <img src="http://via.placeholder.com/300x200" alt="" />
                            <div className="card-body">
                                {article.contenu}
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