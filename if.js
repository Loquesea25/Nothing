/*let articulos3 = [
    {nombre: "Televisor ", precio: 600 },
    {nombre: "Celular", precio: 1300},
    {nombre: "Computador", precio: 950},
    {nombre: "Monitor", precio: 490},
    {nombre: "Mouse", precio: 240},
    {nombre: "Teclado", precio: 370},
    {nombre: "Mous Pad", precio: 50},
]*/


//filter                        Necesito filtrar los precios menores o iguales a x precio
let articulos = [
    {nombre: "Televisor ", precio: 600 },
    {nombre: "Celular", precio: 1300},
    {nombre: "Computador", precio: 950},
    {nombre: "Monitor", precio: 490},
    {nombre: "Mouse", precio: 240},
    {nombre: "Teclado", precio: 370},
    {nombre: "Mous Pad", precio: 50},
]

let articulosFiltrados = articulos.filter(
    function(articulo){
        return articulo.precio <= 9000;
    }
)

//console.log(articulosFiltrados)



//map                    Necesito crear un nuevo array que solo contenga el nombre (o precio) de los articulos
let articulos2 = [
    {nombre: "Televisor ", precio: 600 },
    {nombre: "Celular", precio: 1300},
    {nombre: "Computador", precio: 950},
    {nombre: "Monitor", precio: 490},
    {nombre: "Mouse", precio: 240},
    {nombre: "Teclado", precio: 370},
    {nombre: "Mous Pad", precio: 50},
]

let articulosFiltrados2 = articulos2.map(
    function(articulo){
        return articulo.nombre;
    }
)

//console.log(articulosFiltrados2)



//find                 Necesito encontrar un artículo en concreto buscando por su nombre     
let articulos3 = [
    {nombre: "Televisor ", precio: 600 },
    {nombre: "Celular", precio: 1300},
    {nombre: "Computador", precio: 950},
    {nombre: "Monitor", precio: 490},
    {nombre: "Mouse", precio: 240},
    {nombre: "Teclado", precio: 370},
    {nombre: "Mous Pad", precio: 50},
]

let articulosFiltrados3 = articulos3.find(
    function(articulo){
        return articulo.nombre === "Teclado";
    }
)
//console.log(articulosFiltrados3)


//forEach                    Necesito consultar qué continiene cada uno de los artículos 
let articulos4 = [
    {nombre: "Televisor ", precio: 600 },
    {nombre: "Celular", precio: 1300},
    {nombre: "Computador", precio: 950},
    {nombre: "Monitor", precio: 490},
    {nombre: "Mouse", precio: 240},
    {nombre: "Teclado", precio: 370},
    {nombre: "Mous Pad", precio: 50}
]

articulos4.forEach(function(articulo){
   // console.log(articulo.nombre + " " +articulo.precio)
})



// some                         Necesito saber si hay disponible  o no (true o false) x artículo al filtrar por precio 
let articulos5 = [
    {nombre: "Televisor ", precio: 600 },
    {nombre: "Celular", precio: 1300},
    {nombre: "Computador", precio: 950},
    {nombre: "Monitor", precio: 490},
    {nombre: "Mouse", precio: 240},
    {nombre: "Teclado", precio: 370},
    {nombre: "Mous Pad", precio: 50},
]

let articulosBaratos = articulos5.some(function(articulo){
    return articulo.precio <= 500;
})
//console.log(articulosBaratos);





