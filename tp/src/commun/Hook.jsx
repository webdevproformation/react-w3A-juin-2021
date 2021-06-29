import {useEffect, useState} from "react";

function Hook (){
    const [text, setText] = useState("");
    const [email, setEmail] = useState("");
    useEffect(() => {
        console.log("je suis exécuté une fois");
    } , []); // rafraichissement de la vue du composant // componentDidMount
    // tableau des dépendances 
    // React  va comparer le contenu de ce tableau avec la valeur du state 
    // si identique pas de mis à jour sinon 

    useEffect(() => {
        console.log("je suis exécuté une fois");
    } , [text]); // suite à la modification d'un state componentDidUpdate

    useEffect(() => {
       return () => {
            console.log("le composant vient d'être supprimé du DOM");
            // componentWillUnmount
       }
    } , []);
    return (
        <div>
            <input type="text" onChange={(e) => setText(e.currentTarget.value)} value={text}
            placeholder="saisir un texte"/>
            <input type="email" onChange={(e) => setEmail(e.currentTarget.value)} value={email} 
            placeholder="saisir votre email"/>
        </div>
    )

}

export default Hook;