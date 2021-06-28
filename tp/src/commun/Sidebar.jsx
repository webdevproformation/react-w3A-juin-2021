const Sidebar = () => {

    const articles = [
        { id: 1 , titre : "Article 1"},
        { id: 2 , titre : "Article 2"},
        { id: 3 , titre : "Article 3"},
        { id: 4 , titre : "Article 4"},
    ];

    return <aside>
        <h2>Derniers articles publiés</h2>
        <ul>
            {articles.map((article, index) => 
                <li key={index}>{article.titre}</li>
            )}
        </ul>
    </aside>
}
export default Sidebar ;