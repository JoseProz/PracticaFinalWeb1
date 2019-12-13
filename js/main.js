document.addEventListener("DOMContentLoaded", function(){
    "use strict";
    let URL= "http://web-unicen.herokuapp.com/api/groups/grupo86/practicaFinal";
    mostrar();

    let btnGuardar=document.querySelector(".enviar");
    btnGuardar.addEventListener("click", Guardar);

    async function Guardar(){
        let pedido={
            "thing":[{
                "nombre":document.querySelector("#nombre").value,
                "promo":document.querySelector("#promo").value,
                "direccion":document.querySelector("#direc").value,
                     }]
                }
        let contenedor=document.querySelector("#bodyPedido");
        contenedor.innerHTML="<h1>Cargando...</h1>";
        try{
            let request=fetch(URL,{
                "method":"POST",
                "headers":{"Content-Type":"application/json"},
                "body": JSON.stringify(pedido)
            });
            let respuesta= await request;
            if(respuesta.ok){
                let json= await respuesta.json();
                contenedor.innerHTML="<h4>El pedido ha sido cargado con éxito</h4>"
                mostrar();
            }
            else{
                contenedor.innerHTML = "<h1>Falla de URL</h1>";
            }
        }
        catch(exc){
            contenedor.innerHTML = "<h1>Falla de Conexión</h1>";
        }

    }
    
    let elementos=[];

    async function mostrar(){
        let tbody=document.querySelector(".tbody");
        tbody.innerHTML="<h1>Cargando...<h1>";
        try{
            let request= fetch(URL);
            let response= await request;
            console.log(response.ok);
            if(response.ok){
                let json= await response.json();
                elementos=json.practicaFinal;
                console.log(elementos);
                tbody.innerHTML="";
                for(let elemento of json.practicaFinal){
                    for(let dato of elemento.thing){
                        tbody.innerHTML += "<tr><td>"+dato.nombre+"</td><td>"+dato.promo+"</td><td>"+dato.direccion+
                        "</td><td><button id='"+elemento._id+"'class='btnBorrar'>Borrar</button></td><td><button id='"+elemento._id+"'class='btnPut'>Modificar</button></td></tr>";
                    }
                }
                handleaderDelete();
                handleaderPut();
            
            
            }
            else {
                tbody.innerHTML = "<h1>Falla de URL</h1>";
            }
        }
        catch (exc) {
            tbody.innerHTML = "<h1>Falla de conexión</h1>";
        }
    }

    function handleaderDelete(){
        let botonesDelete=document.querySelectorAll(".btnBorrar");

        for(let elemento of botonesDelete){
            elemento.addEventListener("click", function(){

                Delete(elemento.id)
            }
            )
            
        }
    }
    async function Delete(id){
        let tbody=document.querySelector(".tbody");
        tbody.innerHTML="<h1>Borrando...<h1>";
        try{
            let request= fetch(URL+"/"+id,{
                "method":"DELETE"
            });
            let response= await request;
            if(response.ok){
                let json= await response.json();
                mostrar();
            }
        else{
          tbody.innerHTML = "<h1>Falla de URL</h1>";
        }
      }
      catch(exc){
        tbody.innerHTML="<h1>Falla de conexión</h1>";
      }
    }
    
    function handleaderPut(){
        let botonesPut=document.querySelectorAll(".btnPut");

        for(let elemento of botonesPut){
            elemento.addEventListener("click", function(){

                Put(elemento.id)
            }
            )
            
        }
    }
    async function Put(id){
        
    }
    

                
                
        
    

    
    
    
    function cargarPizza(){
        
        
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

let btnCambiar=document.querySelector(".btncambiar");
btnCambiar.addEventListener("click", function (){
    let pizza=document.querySelectorAll(".cambiar");
    for(let element of pizza){
        
        element.classList.toggle("nuevoEstilo");
    }
})

let btnMas=document.querySelector(".btnMas");
btnMas.addEventListener("click", function(){
    let contenido=document.querySelectorAll(".oculto");
    for(let element of contenido){
        if(element.classList.contains("oculto")){
            element.classList.toggle("oculto");
        }
        if(!btnMas.classList.contains("oculto")){
            btnMas.classList.toggle("oculto");
        }
    }
    let btnMenos=document.querySelector(".btnMenos");
    btnMenos.addEventListener("click",function(){
        for(let element of contenido){
            if(!element.classList.contains("oculto")){
                element.classList.toggle("oculto");
            }
            if(btnMas.classList.contains("oculto")){
                btnMas.classList.toggle("oculto");
            }
        }
    })
})



let btn= document.querySelector("#recomendar");
btn.addEventListener("click",cargarPizza);

})