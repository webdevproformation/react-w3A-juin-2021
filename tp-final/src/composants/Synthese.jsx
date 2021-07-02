const Synthese = ({montants}) => {

    return <div className="text-center">
        <h2>Synthese</h2>
        <div className="row">
            <div className="col-6">
                <h3>Revenus</h3>
                <p>{montants.filter((item) => { return item.montant >= 0 })
                    .reduce((acc , item) => { return acc + item.montant }, 0)}</p>
            </div>
            <div className="col-6">
                <h3>Dépenses</h3>
                <p>{montants.filter((item) => { return item.montant < 0 })
                    .reduce((acc , item) => { return acc + item.montant }, 0)}</p>
            </div>
        </div>
        <hr />
    </div>
}
export default Synthese