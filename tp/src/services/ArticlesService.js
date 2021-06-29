class ArticlesService{
    static data = [
        {
            id: 1 ,
            titre : "Nouvel article 1",
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
            titre : "Dernier article 3",
            contenu : "lorem ipsum ",
            like : 10,
            isActif : true
        }
    ];
    getData(){
        return ArticlesService.data;
    }

    getActiveArticles(){
        return ArticlesService.data.filter( (item) => { return item.isActif } )
    }

    augmenteLike(id){
        const cloneData = [ ...this.data ];
        const articleRecherche = cloneData.find((item) => { return item.id === id });
        const index = cloneData.indexOf(articleRecherche);
        cloneData[index].like++; // augmenter le nombre de like 
        console.log(index, cloneData[index]);
        return this.getActiveArticles();
    }

    add(article){
        // ajouter une propriété id
        article.id = ArticlesService.data[ArticlesService.data.length - 1].id + 1
        ArticlesService.data.push(article); // ajouter un nouvel article !

        console.log(ArticlesService.data);
    }

    delete(id){
       //const articleASupprimer = ArticlesService.data.find((article) => { return article.id === id });
       // const index = ArticlesService.data.indexOf(articleASupprimer);

       // ArticlesService.data.splice( index, 1 ); // effectuer la suppression 

       ArticlesService.data = ArticlesService.data.filter((article) => { return article.id !== id });
    }

    getFirst(id){
        return ArticlesService.data.filter((article) => { return article.id === id })[0];
    }

    update(articleAModifier){
        // chercher l'article 
        let articleTrouve = ArticlesService.data.find((article) => {return article.id === articleAModifier.id});
        // index 
        const index = ArticlesService.data.indexOf(articleTrouve);
        // fusion 
        console.log(index);
        console.log(ArticlesService.data[index]);
        console.log(articleAModifier);
        ArticlesService.data[index] = { ...ArticlesService.data[index] , ...articleAModifier}
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