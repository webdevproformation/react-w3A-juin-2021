import {useEffect, useState} from "react";
import axios from "axios";

function Hook({route}){

    const [titre, setTitre] = useState("");
    const [contenu, setContenu] = useState("");

    useEffect(() => {
        console.log("je suis exécuté une fois");
    } , []); // rafraichissement de la vue du composant // componentDidMount

    async function handleClick(){
        console.log({titre, contenu})
        const reponse = await axios.post("http://localhost:3004/articles", {titre, contenu});
        console.log(route)
        route.history.push("/");
    }
   
    return (
        <div>
            <input type="text" onChange={(e) => setTitre(e.currentTarget.value)} value={titre}
            placeholder="saisir un texte" className="form-control" />
            <textarea value={contenu} onChange={(e) => setContenu(e.currentTarget.value)}  placeholder="saisir un contenu"  className="form-control mt-3"></textarea>
            <button className="my-3 btn btn-dark" onClick={handleClick}>Soumettre</button>
        </div>
    )

}

export default Hook;