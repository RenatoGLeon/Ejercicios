//Al cargar la página se ejecutan las funciones
parpadear();
fade();

//Función parpadear(), cambia el color del titulo cada segundo
function parpadear(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    document.getElementById("h1cab").style.color="rgb("+ r + "," + g + "," + b +")";
    setTimeout("parpadear()",1000);
}

//Función fade(), desvanece la imagen por 2 segundos
function fade(){
    document.getElementById("imgcab").style.opacity = "0";
    document.getElementById("imgcab").style.transition="all 1s ease";
    setTimeout("fadeOut()",2000);
}

//Función fadeOut(), visualiza la imagen por 2 segundos
function fadeOut(){
    document.getElementById("imgcab").style.opacity = "1.0";
    document.getElementById("imgcab").style.transition="all 1s ease";
    setTimeout("fade()",2000);
}