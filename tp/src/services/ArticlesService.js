class ArticlesService{
    data = [
        {
            id: 1 ,
            titre : "article 1",
            contenu : "lorem ipsum ",
            like : 2,
            isActif : true 
        },
        {
            id: 2 ,
            titre : "article 2",
            contenu : "lorem ipsum ",
            like : 0 ,
            isActif : false 
        },
        {
            id: 3 ,
            titre : "article 3",
            contenu : "lorem ipsum ",
            like : 10,
            isActif : true
        }
    ];
    getData(){
        return this.data;
    }

    getActiveArticles(){
        return this.data.filter( (item) => { return item.isActif } )
    }
}
export default ArticlesService ;

// rdv 14h02 bon appétit 
// Back office => une zone où l'on va pouvoir CRUD : 
/**
 * CREATE
 * READ
 * Update
 * DELETE des articles 
 */