const auth_config = {
    client: 'f42cc8a6-a1f1-4e75-90e1-612febbb9e7f',
    redirect: 'https://rpwagner.github.io/demos/',
    scopes: 'openid profile email https://auth.globus.org/scopes/385d3079-5121-40bc-a52f-055296497631/https'};

const auth_manager = new globus.authorization.create(auth_config);

//sessionStorage.removeItem("pkce_state");
//sessionStorage.removeItem("pkce_code_verifier");

console.log("Loaded body");

function globus_login(){
    auth_manager.login();
    document.getElementById("user").innerHTML = "Logged in";
}

const login_button = document.querySelector('#login_button')
login_button.addEventListener('click', globus_login);

