import axios from "axios";
import stringHash from "string-hash" ;
// plusieurs fonctions 

async function authentification(login , password) {
    const passwordHashe = stringHash(password);
    // SELECT * FROM users WHERE login = ${login} AND password = ${passwordHashe}
    let { data } = await axios.get(`http://localhost:3004/users?login=${login}&password=${passwordHashe}`);
    if(data.length === 0){
        return false ;
    }
    return { id : data[0].id , login : data[0].login };
}

export async function login(  login, password ) {
    // ??? login ET password sont conformes 
    const verif = await authentification(login , password);
    if( verif ){
        // si ils sont conformes => localStorage => stocker une ok 
        localStorage.setItem("auth",JSON.stringify(verif));
        return true;
    }
    return false;
}

export function logout(){
    localStorage.removeItem("auth");
    // localStorage => supprimer l'info dans le localStorage 
    const urlEncours = window.location.pathname;

    (urlEncours !== "/api") ? window.location.href = "/" :  window.location.href = "/api"
    
    // redirection vers la page d'authentification 
}

export function isLogged(){
    // retourner true si il n'y a bien l'item  dans le localStorage
    // sinon retourner false 
    console.log(!!localStorage.getItem("auth"))
    return !!localStorage.getItem("auth");
}
