//creamos una funcion login
function login(){
    //coloco las variables que corresponden al usuario y a la contraseña
    var user, pass;

    //los voy a llamar con el getElementById que devuelve una referencia al elemento por su ID

    user = document.getElementById("usuario").value;
    pass = document.getElementById("contraseña").value;


    if(user == "fernando" && pass == "1234"){

        window.location = "principal.html";

    }else if(user != "fernando" && pass != "1234"){
        alert("Usuario y contraseña equivocado");
    }
}