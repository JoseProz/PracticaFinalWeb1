"use strict";


function cargarPizza(){
    console.log("llegue");
    
    let pizzas= new Array('Pizza Peperoni','Pizza Muzza','Pizza Rucula');
    
    let a = pizzas[Math.floor(Math.random() * pizzas.length)];
    let pos=pizzas.indexOf(a);
    console.log(a);
    let tabla= "<tr><td>"+"<h2>"+a+"</h2>"+"</td><td><button id='"+pos+"'class='btnTwist'>Twist</button></td></tr>";
    console.log(pos);
    document.querySelector("#Pizza").innerHTML= tabla;
    handlearbtnTwist(pos);
}

function mostrarIngrediente(pos){
    
    let ajo="Agregar Ajo";
    let b="Agregar Oregano";
    let c="Agregar Jamon Crudo";
   
let linea= {
    '0':ajo,
    '1':b,
    '2':c,
}
let ingrediente="<tr><td>"+"<h2>"+linea[pos]+"</h2>"+"</td><td><button id='btnOk'>Ok</button></td></tr>";
document.querySelector("#Ingrediente").innerHTML=ingrediente;
handleaderOk();



}
function handleaderOk(){
    let btnOk=document.querySelector("#btnOk");
    btnOk.addEventListener("click", function(){
        let ok= "<tr><td>"+"<h2>Agregado</h2>"+"</td></tr>";
        document.querySelector("#Ingrediente").innerHTML=ok;
    })
}

function handlearbtnTwist(pos){
    let btnTwist=document.querySelector(".btnTwist");
    btnTwist.addEventListener("click",function(){
        console.log(pos);
        mostrarIngrediente(pos);
    })
}
let btn= document.querySelector("#recomendar");
btn.addEventListener("click",cargarPizza);