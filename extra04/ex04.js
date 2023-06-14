var broma1= document.getElementById("first-part-joke");
var broma2= document.getElementById("second-part-joke");
var btn =document.getElementById("one-more");
btn.addEventListener("click",()=>chistesAleatorios());
async function chistesAleatorios(){
    const api ="https://api.dadjokes.io/api/random/joke";
    var respuesta;
    try {
        respuesta=await fetch(api);
    } catch (error) {
        console.log("error!!!");
    }
    var datos = await respuesta.json();
    var chistes =datos.body;
    var chisteCompleto= chistes[0];
    var parte1 =chisteCompleto.setup;
    var parte2= chisteCompleto.punchline;
    broma1.textContent=parte1;
    broma2.textContent=parte2;
    console.log(parte1, parte2);
}
