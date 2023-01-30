let seccionInformacion = false;

document.getElementById("boton1").addEventListener('click', function(){
    if(seccionInformacion){
        document.getElementById('informacion').style.display = 'none';
        seccionInformacion = false;
    } else {
        document.getElementById('informacion').style.display = 'block';
        seccionInformacion = true;
    }
});

let seccionDireccion = false;

document.getElementById("boton2").addEventListener('click', function(){
    if(seccionDireccion){
        document.getElementById('direccion').style.display = 'none';
        seccionDireccion = false;
    } else {
        document.getElementById('direccion').style.display = 'block';
        seccionDireccion = true;
    }
});

let seccionTelefono = false;

document.getElementById("boton3").addEventListener('click', function(){
    if(seccionTelefono){
        document.getElementById('telefono').style.display = 'none';
        seccionTelefono = false;
    } else {
        document.getElementById('telefono').style.display = 'block';
        seccionTelefono = true;
    }
});

let seccionEducacion = false;

document.getElementById("boton4").addEventListener('click', function(){
    if(seccionEducacion){
        document.getElementById('educacion').style.display = 'none';
        seccionEducacion = false;
    } else {
        document.getElementById('educacion').style.display = 'block';
        seccionEducacion = true;
    }
});
let seccionHabilidades = false;
document.getElementById("boton5").addEventListener('click', function(){
    if(seccionHabilidades){
        document.getElementById('habilidades').style.display = 'none';
        seccionHabilidades = false;
    } else {
        document.getElementById('habilidades').style.display = 'block';
        seccionHabilidades = true;
    }
});
