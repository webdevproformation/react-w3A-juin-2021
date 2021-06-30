import {useEffect, useState} from "react";
import axios from "axios";

function Hook({refresh, data}){

    const [id, setId] = useState("");
    const [titre, setTitre] = useState("");
    const [contenu, setContenu] = useState("");

    useEffect(() => {
        console.log("je suis exécuté une fois");
    } , []); // rafraichissement de la vue du composant // componentDidMount

    useEffect(() => {
        setId(data.id)
        setTitre(data.titre);
        setContenu(data.contenu);
    }, [data])

    async function handleClick(){
        /* console.log({titre, contenu}) */
        if(id.length > 0){
            // update à réaliser
            await axios.put(`http://localhost:3004/articles/${id}`, {id, titre, contenu , isActif : true});
        }   else {
            // insert à réaliser 
            await axios.post("http://localhost:3004/articles", {titre, contenu , isActif : true});
        }
        // réinitialise le formulaire 
        setId("")
        setTitre("");
        setContenu("");

        refresh();
       
    }
   
    return (
        <div>
            <input type="hidden"  value={id} onChange={(e) => setId(e.currentTarget.value)} className="form-control" />
            <input type="text" onChange={(e) => setTitre(e.currentTarget.value)} value={titre}
            placeholder="saisir un texte" className="form-control" />
            <textarea value={contenu} onChange={(e) => setContenu(e.currentTarget.value)}  placeholder="saisir un contenu"  className="form-control mt-3"></textarea>
            <button className="my-3 btn btn-dark" onClick={handleClick}>Soumettre</button>
        </div>
    )

}

export default Hook;