let contenedor = document.getElementById("contenedor")
let html = ''
let busqueda = ''
function search() {
    console.log("search()");
    busqueda = document.getElementById("inputBuscar").value;
    if(busqueda.length==0){
        alert("La búsqueda no puede estar vacía")
    } else{
        fetch(`https://images-api.nasa.gov/search?q=${busqueda}`).then((Response) => {
        return Response.json()}).then((data) => {
        //console.log(data.collection.items[0].links[0].href)
        html=''
        if(data.collection.items.length==0){
            html="No hay resultado"
        }else{
            for(let i=0; i<data.collection.items.length; i++){
                if(data.collection.items[i].links!=undefined){
                    html+= `
                  
                    <div class ="col-2 itemGaleria">
                    <h6>${data.collection.items[i].data[0].title}</h6>
                    <img class="img-fluid" src= "${data.collection.items[i].links[0].href}">
                    <h6>${data.collection.items[i].data[0].date_created}</h6>
                    <h6>${data.collection.items[i].data[0].description}</h6>
                   
                  </div>
                   `
                
                   
                }
            }
        }
    contenedor.innerHTML=html
    })
    }

}

