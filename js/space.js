let contenedor = document.getElementById("contenedor")
let html = ''
let busqueda = ''
function search() {
    console.log("search()");
    busqueda = document.getElementById("inputBuscar").value;
    if(busqueda.length==0){
        alert("No puede estar vacío tu campo")
    } else{
        fetch(`https://images-api.nasa.gov/search?q=${busqueda}`).then((Response) => {
        return Response.json()
