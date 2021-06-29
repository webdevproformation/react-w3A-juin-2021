import React, { Component } from 'react';
import ArticlesService from "../services/ArticlesService";
import {Link} from "react-router-dom";

class Dashboard extends Component {
    state = { 
        articles : (new ArticlesService()).getData()
    }
    render() { 
        const {articles} = this.state;
        return ( 
            <>
                <div className="col-12">
                    <h1>Bienvenu dans le back office </h1>
                </div>
                <div className="col-12">
                    <Link to="/admin/add" className="btn btn-success">Ajouter un nouvel article</Link>
                </div>
                <div className="col-12">
                <table className="table table-striped table-sm">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>titre</th>
                        <th>status</th>
                        <th>actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {articles.map( ( article , index ) => {
                        return <tr key={index}>
                                <td>{article.id}</td>
                                <td>{article.titre}</td>
                                <td>{article.isActif ? "Actif" : "Inactif" }</td>
                                <td>
                                    <button className="btn btn-primary">voir</button>
                                    <button className="btn btn-warning mx-3">modifier</button>
                                    <button className="btn btn-danger">supprimer</button>
                                </td>
                            </tr>
                    } )}
                    </tbody>
                </table>
                </div>
            </>
        );
    }
}
 
export default Dashboard;