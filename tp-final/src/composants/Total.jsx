const Total = ({montants}) => {
    return <div className="text-center">
        <h1>Total</h1>
        <p>{montants.reduce((acc , montant) => { return acc + montant.montant }, 0)}</p>
        <hr />
    </div>
}
export default Total