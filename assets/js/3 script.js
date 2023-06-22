// Resolución 3.1

// function pintar(event) {
//     const elementoClickeado = event.currentTarget;
//     elementoClickeado.style.backgroundColor = 'yellow';
//     }
//     const ele = document.getElementById("ele1");
//     ele.addEventListener("click", pintar);



// Resolución 3.2

const elementoClickeado = document.getElementById("ele1");
elementoClickeado.style.backgroundColor = "green";

elementoClickeado.addEventListener('click', pintar);
    
    console.log(elementoClickeado.style.backgroundColor);
    
function pintar () {
    const color = elementoClickeado.style.backgroundColor;

    console.log(elementoClickeado.style.backgroundColor);
        
    if (elementoClickeado.style.backgroundColor == "green"){
        elementoClickeado.style.backgroundColor= "yellow";
    } 
    else if  (elementoClickeado.style.backgroundColor == "yellow"){
        elementoClickeado.style.backgroundColor= "green";
    }
    console.log(elementoClickeado.style.backgroundColor)
    
}





