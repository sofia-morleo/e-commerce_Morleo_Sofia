function isNoAuthRedirectHome(){
    if (localStorage.getItem("email")) {
        window.location.href = "./index.html";
    }
}
isNoAuthRedirectHome();