window.addEventListener("load",init);
function init(){
    document.querySelector("#login").addEventListener("click",login);
    document.querySelector("#register").addEventListener("click",register);
}

function login(){
    var userid = document.querySelector("#userid".value);
    var pwd = document.querySelector("#pwd".value);
}