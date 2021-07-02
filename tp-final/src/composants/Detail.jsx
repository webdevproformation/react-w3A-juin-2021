import Item from "./Item"
const Detail = ({operations}) => {
    return <>
        <h2 className="text-center">Détail des opérations</h2>
        <table className="table table-sm table-striped">
            <thead>
                <tr>
                    <th>id</th>
                    <th>nom</th>
                    <th>montant</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {operations.map((operation, index) => {
                    return <Item key={index} operation={operation} />
                })}
            </tbody>
        </table>
        <hr />
       
    </>
}
export default Detail