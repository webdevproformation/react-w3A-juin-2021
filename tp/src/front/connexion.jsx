const connexion = () => {

    return <form>
            <div className="form-group">
                <label htmlFor="login">login</label>
                <input type="text" name="login" className="form-control" id="login"/>
            </div>
            <div className="form-group">
                <label htmlFor="password">password</label>
                <input type="text" name="password" className="form-control" id="password"/>
            </div>
            <div className="form-group mt-3 d-flex justify-content-center">
                <input type="submit" className="btn btn-success"/>
            </div>
        </form>
}

export default connexion ;