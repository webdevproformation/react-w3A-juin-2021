import { useDispatch } from 'react-redux';
import {schemaOperation} from "../verif/schema";
import {deleteMontant , getMontants , updateMontant} from "../action/montant.action";
import {useState } from "react";

const Item = ({operation}) => {
    const [modif, setModif] = useState(false)
    const [modifNom, setModifNom] = useState(operation.nom)
    const [modifMontant, setModifMontant] = useState(operation.montant)
    const dispatch = useDispatch();

    const handleSuppr = id => {
        dispatch(deleteMontant(id))
        dispatch(getMontants())
    }

    const handleSubmit = e => {
        e.preventDefault();
        const operationModifiee = {
            id : operation.id,
            nom : modifNom ,
            montant :  modifMontant
        }
        const verif =  schemaOperation.validate(operationModifiee);
        if(!Object.keys(verif).includes("error")){
            // ajouter en base de donnée les info et mettre à jour le store 
            dispatch(updateMontant(operationModifiee));
            dispatch(getMontants());
            setModif(false);
        } 
    }

    const normal = <>
            <td>{operation.id}</td>
            <td>{operation.nom}</td>
            <td>{operation.montant}</td>
    </>
    const formulaire = <td colSpan="3" style={{width:"300px"}}>
        <form className="d-flex" onSubmit={handleSubmit}>
            <input type="hidden" value={operation.id}  className="form-control" />
            <input type="text" value={modifNom}  className="form-control w-50" onChange={e => setModifNom(e.currentTarget.value) }/>
            <input type="number" value={modifMontant} className="form-control  w-25" nChange={e => setModifMontant(e.currentTarget.value) }/>
            <input type="submit"  className="btn btn-warning" value="OK"/>
        </form>    
    </td>;

    return <tr>
            { modif ? formulaire :  normal }
            <td>
                <button className="btn btn-primary btn-sm" onClick={() => setModif(!modif)}>modifier</button>
                <button className="btn btn-dark  btn-sm ms-3" onClick={() => handleSuppr(operation.id)}>supprimer</button>
            </td>
    </tr>
}
export default Item