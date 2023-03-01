   //SweetAlert Bienvenida
   Swal.fire({
    title: 'Bienvenidos',
    text: 'Hoy es un buen día para codear 😊!',
    color:'#ffffff',
    background:'#68016f',
    confirmButtonColor:'#c11dcd', 
    })

//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
// Se oculta el menu una vez que seleccione una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//las barritas están identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

// Se selecciona todas las barras generales para luego manipularlas
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let wordpress = document.getElementById("bootstrap");
crearBarra(bootstrap);
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);
let php = document.getElementById("java");
crearBarra(java);
let ilustrator = document.getElementById("ilustrator");
crearBarra(ilustrator);

//Se guardará la cantidad de barritas que se van a ir pintando 
//Se utiliza  un arreglo, para que cada  posiciòn pertenezca a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1];
//esta variable se va utilizar para saber si ya se ejecutó la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 16, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 11, 1, intervalJavascript);
        },100);
        const intervalBootstrap = setInterval(function(){
            pintarBarra(bootstrap, 11, 2, intervalBootstrap);
        },100);
        const intervalPhotoshop = setInterval(function(){
            pintarBarra(photoshop, 15, 3, intervalPhotoshop);
        },100);
        const intervalJava = setInterval(function(){
            pintarBarra(java, 16, 4, intervalJava);
        },100);
        const intervalIlustrator = setInterval(function(){
            pintarBarra(ilustrator, 11, 5, intervalIlustrator);
        },100);
    }
}

//Cantidad de la barra 
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#c11dcd";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}