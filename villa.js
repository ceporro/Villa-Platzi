function aleatorio(min, max)
{
    var res;
    res = Math.floor(Math.random() * (max - min +1)) + min;
    return res;
}

var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");

var fondo = {
    url: "tile.png",
    cargaOK: false
}
fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);

var vaca = {
    url: "vaca.png",
    cargaOK: false
};

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVaca);
var cantVacas = aleatorio(1,12);

var cerdo = {
    url: "cerdo.png",
    cargaOK: false
};

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdo);
var cantCerdos = aleatorio(1,1);

var pollo = {
    url: "pollo.png",
    cargaOK: false
};

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarPollo);
var cantPollos = aleatorio(1,12);

var xC = 35* aleatorio(0,12);
var yC = 210;

var xP = [];
var yP = [];

for(var v=0; v<cantPollos; v++)
{
    xP[v] = 35*aleatorio(0, 12);
} 

for(var v=0; v<cantPollos; v++)
{
    yP[v] = 35*aleatorio(0, 12);
} 

var xV = [];
var yV = [];

for(var v=0; v<cantVacas; v++)
{
    xV[v] = 35*aleatorio(0, 12);
} 

for(var v=0; v<cantVacas; v++)
{
    yV[v] = 35*aleatorio(0, 12);
} 

console.log(xP);
console.log(xV);


function dibujar()
{
    if(fondo.cargaOK);
    {
        papel.drawImage(fondo.objeto, 0 , 0);
    }
    if(vaca.cargaOK);
    {
        console.log(cantVacas);
        for(var v=0; v<cantVacas; v++)
        {
         //   var xV = aleatorio(0, 12);
         //   var yV = aleatorio(0, 12);
          //  var xV = xV * 35;
           // var yV = yV * 35;
            papel.drawImage(vaca.objeto, xV[v], yV[v]);
        }  
    }
    //if(cerdo.cargaOK);
    //{
     //   var xC = aleatorio(0, 12);
     //   var yC = aleatorio(0, 12);
     //   var xC = xC * 35;
     //   var yC = yC * 35;
     //   papel.drawImage(cerdo.objeto, xC, yC);
    //}
    if(pollo.cargaOK);
    {
        console.log(cantPollos);
        for(var v=0; v<cantPollos; v++)
        {
            //var xP = aleatorio(0, 12);
            //var yP = aleatorio(0, 12);
           // var xP = xP * 35;
           // var yP = yP * 35;
            papel.drawImage(pollo.objeto, xP[v], yP[v]);
        }  
    }
}

function dibujarCerdo()
{
        papel.drawImage(cerdo.objeto, xC, yC);
}


function cargarFondo(evento)
{
    fondo.cargaOK = true;
    dibujar();
    setTimeout(dibujarCerdo, 500);
}

function cargarVaca(evento)
{
    vaca.cargaOK = true;
    dibujar();
    setTimeout(dibujarCerdo, 500);
}

function cargarPollo(evento)
{
    pollo.cargaOK = true;
    dibujar();
    setTimeout(dibujarCerdo, 500);
}

function cargarCerdo(evento)
{
    cerdo.cargaOK = true;
    dibujar();
    setTimeout(dibujarCerdo, 500);
}

var teclas = {  
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener("keydown", moverCerdo);

function moverCerdo(evento)
{

    var mov = 3;
    switch(evento.keyCode)
    {
        case teclas.UP:
            yC = yC - mov;
            dibujar();
            dibujarCerdo();
            
        break;
        case teclas.DOWN:
            yC = yC + mov; 
            dibujar();
            dibujarCerdo();
                                   
        break;
        case teclas.LEFT:
            xC = xC - mov;
            dibujar();
            dibujarCerdo();
            
        break;
        case teclas.RIGHT:
            xC = xC + mov;
            dibujar();
            dibujarCerdo();
        break;
        default:
            console.log("otra") 
        break;
    }
}
