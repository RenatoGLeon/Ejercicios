
//definiendo variables globales
var x=1;

// al cargar la pagina, ejecutamos las funciones simplemente con mencionarlas
carrusel();
fecha();
reloj();
scroll();


//la funcion carrusel(), devanece la imagen en un segundo
function carrusel(){
    x+=1;
    if(x>5) x=1;
    document.getElementById("imgcab").style.opacity = '0';
    document.getElementById("imgcab").style.transition="all 1s ease";
    setTimeout("roleo()", 1000);
}

//la funcion roleo(), realiza cambio de imagen y se muestra en un segundo
function roleo(){
    document.getElementById("imgcab").setAttribute("src","img/ban" + x +".jpg");
    document.getElementById("imgcab").style.opacity='1';
    document.getElementById("imgcab").style.transition="all 1s ease";
    setTimeout("carrusel()", 2000);
}

/*defina la funcion reloj donde ejecutamos las instrucciones para imprimir la hora
or intervalo de 1 segundo, ejecutando setTimeout */
function reloj(){
    let f=new Date();
    let h=f.getHours();
    let m=f.getMinutes()<10 ? "0" + f.getMinutes() : f.getMinutes();
    let s=f.getSeconds()<10 ? "0" + f.getSeconds() : f.getSeconds();
    document.getElementById("ph").innerHTML="Hora: " + h +":" + m + ":" + s; 
    setTimeout("reloj()", 1000);
}

/*funcion fecha(), donde imprime la fecha del sistema, el cual imprime el
mes en letras.*/
function fecha(){
    var f=new Date();
    var dia=f.getDate();
    var y=f.getFullYear();
    var mes;
    switch (f.getMonth()){
        case 0: mes = 'Enero'; break;
        case 1: mes = 'Febrero'; break;
        case 2: mes = 'Marzo'; break;
        case 3: mes = 'Abril'; break;
        case 4: mes = 'Mayo'; break;
        case 5: mes = 'Junio'; break;
        case 6: mes = 'Julio'; break;
        case 7: mes = 'Agosto'; break;
        case 8: mes = 'Setiembre'; break;
        case 9: mes = 'Octubre'; break;
        case 10: mes = 'Noviembre'; break;
        default: mes = 'Diciembre';
    }
    document.getElementById("pf").innerText="Fecha: " + dia + "/" + mes + "/" + y;
} 

//función scroll(), implementa la rotación de las letras del titulo
function scroll(){
    let cadena = document.getElementById("hlcab").innerHTML;
    cadena = cadena.substring(1,cadena.length) + cadena.charAt(0);    
    document.getElementById("hlcab").innerHTML=cadena;
    window.setTimeout("scroll()",150);
}