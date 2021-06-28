const Sidebar =  ({articles})  => {

    // console.log(props.articles)
    // props { [{},{},{}] }
    // const {articles} = props; // destructuration 

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