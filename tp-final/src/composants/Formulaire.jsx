import {useState} from "react";
import {schemaOperation} from "../verif/schema";
import { useDispatch } from "react-redux";
import { addMontant , getMontants } from "../action/montant.action";

const Formulaire = () => {
    const [nom , setNom] = useState("");
    const [montant , setMontant] = useState(0);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const nouvelleOperation = {
            nom,
            montant : +montant
        };
        const verif = schemaOperation.validate(nouvelleOperation)
        
       if(!Object.keys(verif).includes("error")){
            // ajouter en base de donnée les info et mettre à jour le store 
            dispatch(addMontant(nouvelleOperation));
            dispatch(getMontants());
            setNom("");
            setMontant(0);
        } 
    }

    return <>
        <h2>Ajouter une nouvelle opération</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="nom">nom</label>
                <input type="text" className="form-control" value={nom} onChange={(e) => {setNom(e.currentTarget.value)}} />
            </div>
            <div className="form-group">
                <label htmlFor="montant">montant</label>
                <input type="number" className="form-control" value={montant} onChange={(e) => {setMontant(e.currentTarget.value)}} />
            </div>
            <div className="form-group d-flex justify-content-end my-3">
                <input type="submit"  className="btn btn-success"/>
            </div>
        </form>
    </>
}
export default Formulaire