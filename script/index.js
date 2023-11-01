let select = document.getElementById("estado");
let span = document.getElementById("span-estado");


const seleccionEstado = (e) => {
    let estado = e.target.value
    span.innerText = estado
}


select.addEventListener("change", seleccionEstado)


