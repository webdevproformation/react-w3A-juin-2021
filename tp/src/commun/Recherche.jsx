const Recherche = ({action}) => {

    function textRecherche(e){
        action(e.currentTarget.value);
        // console.log();
    }

    return <input type="text" className="form-control" onChange={textRecherche} />
}

export default Recherche ;