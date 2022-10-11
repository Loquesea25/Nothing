const h1 = document.querySelector("#idH1");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const button = document.querySelector("#idButton");
const parrafoResultado = document.querySelector("#idParrafoResultado");

button.addEventListener('click', escuchando);

function escuchando(){
    const resultado = input1.value + " " + input2.value;
    parrafoResultado.innerText = resultado;
}