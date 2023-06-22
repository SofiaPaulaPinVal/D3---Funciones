
let colorElegido = "";


document.addEventListener("keydown", function (event) {
    const minus = event.key.toLowerCase();
    
    console.log(minus);

    if (minus === "a") {
        colorElegido = "ff5400"
    
    } else if (minus === "s") {
        colorElegido = "d4a373"

    } else if (minus === "d") {
        colorElegido = "ef233c"
    } 
    console.log(colorElegido);
});

// let divSeleccionado = "";

document.getElementById("uno").addEventListener("click", function (){
    this.style.backgroundColor = "#" + colorElegido;
})

document.getElementById("dos").addEventListener("click", function (){
    this.style.backgroundColor = "#" + colorElegido;
})

document.getElementById("tres").addEventListener("click", function (){
    this.style.backgroundColor = "#" + colorElegido;
})

document.getElementById("cuatro").addEventListener("click", function (){
    this.style.backgroundColor = "#" + colorElegido;
})


