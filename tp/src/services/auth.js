
// plusieurs fonctions 

export function login(  login, password ){
    // ??? login ET password sont conformes 
    if( login === "hello" && password === "les amis"){
        // si ils sont conformes => localStorage => stocker une ok 
        localStorage.setItem("auth","ok");
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
  
    return !!localStorage.getItem("auth");
}
