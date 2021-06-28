import Sidebar from "../commun/Sidebar";

const Home = () => { 
    const articles = [
        {
            id: 1 ,
            titre : "article 1",
            contenu : "lorem ipsum "
        },
        {
            id: 2 ,
            titre : "article 2",
            contenu : "lorem ipsum "
        },
        {
            id: 3 ,
            titre : "article 3",
            contenu : "lorem ipsum "
        }
    ];
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
                <Sidebar />
            </div>
        </>
    )
}  
export default Home;