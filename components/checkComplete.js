const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    i.addEventListener("click", tacharElemento);
    
    return i;
}


const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
}

const tacharElemento = (event) => {
    const element = event.target;
    const tituloCompletado = element.parentNode.parentNode;
    tituloCompletado.classList.toggle("tachado");

    // Mover el elemento completado al final de su contenedor principal
    const contenedorPrincipal = tituloCompletado.parentNode;
    contenedorPrincipal.appendChild(tituloCompletado);

    console.log(tituloCompletado);
}



export default checkComplete;