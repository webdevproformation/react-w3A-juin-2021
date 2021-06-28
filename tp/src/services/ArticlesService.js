class ArticlesService{
    data = [
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
    getData(){
        return this.data;
    }
}
export default ArticlesService ;