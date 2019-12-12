"use strict";


function cargarPizza(){
    let pizzas=new Array('Pizza Muzzarella','Pizza Especial','Pizza Napolitana');

    let Pizza_Azar=pizzas[Math.floor(Math.random()*pizzas.length)];
    console.log(Pizza_Azar);
    let pos=pizzas.indexOf(Pizza_Azar);

    let tabla= "<tr><td>"+"<h2>"+Pizza_Azar+"</h2>"+"</td><td><button id='"+pos+"'class='btnTwist'>Twist</button></td></tr>";
    document.querySelector("#Pizza").innerHTML=tabla;
    handlearbtnTwist(pos);
}


function mostrarIngrediente(pos){
    
    let ace="Agregar aceitunas";
    let b="Agregar Morron";
    let c="Agregar Parmesano";
   
let linea= {
    '0':ace,
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
        let ok= "<tr><td>"+"<h2>Se agrego el ingrediente extra</h2>"+"</td></tr>";
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







let btn3= document.querySelector("#btnocult");
btn3.addEventListener("click",function (){
    let ocultarr=document.querySelectorAll(".oculto");
    let btnvermas=document.querySelector("#btnocult");
    for (let ocultar of ocultarr ){
    if (ocultar.classList.contains("oculto")){
        ocultar.classList.toggle("oculto"); 
    }
}
    if (!btnvermas.classList.contains("oculto")){
        btnvermas.classList.toggle("oculto"); 

    }
    let vermenos=document.querySelector("#btnvermenos");
    vermenos.addEventListener("click",function(){
        if (!vermenos.classList.contains("oculto")){
            vermenos.classList.toggle("oculto"); 
            btnvermas.classList.toggle("oculto"); 
        }
        for (let ocultar of ocultarr ){
            if (!ocultar.classList.contains("oculto")){
                ocultar.classList.toggle("oculto"); 
            }
        }
   
    })

}
)





let btn2= document.querySelector(".BtnNuevoEstilo");
btn2.addEventListener("click",function (){
    let cambiar=document.querySelectorAll(".cambiar");
    for (let element of cambiar){
        element.classList.toggle("NuevoEstilo");
    }
  
})


let btn= document.querySelector("#recomendar");
btn.addEventListener("click",cargarPizza);