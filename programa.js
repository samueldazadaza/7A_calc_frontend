// function procesar() {
//     console.log("Me clickearon!!!!!!!")
// }


//1. Tener una referencia al elemento del DOM al que queremos agrearle el eventlistener

// OPERACION SUMAR
const miBotonSumar = document.getElementById("sumar")

miBotonSumar.addEventListener(
    'click', 
    async (event)=>{
        
        //console.log(event);
        event.preventDefault() //para evitar que el formulario continue
        const numero_1 = parseFloat(document.getElementById("num1").value); // .value para extraer el valor del elemento
        const numero_2 = parseFloat(document.getElementById("num2").value);
        console.log(numero_1, numero_2);

        const respuesta = await fetch(
            'http://localhost:3000/api/sumar',
            {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify({numero_1, numero_2})
            }
        )

        const dato = await respuesta.json();
        const div_resultado = document.getElementById("resultado");
        div_resultado.innerHTML = dato; //imprimir en el html


    }
);

// OPERACION RESTAR
const miBotonRestar = document.getElementById("restar")

miBotonRestar.addEventListener(
    'click', 
    async (event)=>{
        
        //console.log(event);
        event.preventDefault() //para evitar que el formulario continue
        const numero_1 = parseFloat(document.getElementById("num1").value); // .value para extraer el valor del elemento
        const numero_2 = parseFloat(document.getElementById("num2").value);
        console.log(numero_1, numero_2);

        const respuesta = await fetch(
            'http://localhost:3000/api/restar',
            {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify({numero_1, numero_2})
            }
        )

        const dato = await respuesta.json();
        const div_resultado = document.getElementById("resultado");
        div_resultado.innerHTML = dato; //imprimir en el html


    }
);

// OPERACION MULTIPLICAR
const miBotonMultiplicar = document.getElementById("multiplicar")

miBotonMultiplicar.addEventListener(
    'click', 
    async (event)=>{
        
        //console.log(event);
        event.preventDefault() //para evitar que el formulario continue
        const numero_1 = parseFloat(document.getElementById("num1").value); // .value para extraer el valor del elemento
        const numero_2 = parseFloat(document.getElementById("num2").value);
        console.log(numero_1, numero_2);

        const respuesta = await fetch(
            'http://localhost:3000/api/multiplicar',
            {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify({numero_1, numero_2})
            }
        )

        const dato = await respuesta.json();
        const div_resultado = document.getElementById("resultado");
        div_resultado.innerHTML = dato; //imprimir en el html


    }
);

// OPERACION DIVIDIR
const miBotonDividir = document.getElementById("dividir")

miBotonDividir.addEventListener(
    'click', 
    async (event)=>{
        
        //console.log(event);
        event.preventDefault() //para evitar que el formulario continue
        const numero_1 = parseFloat(document.getElementById("num1").value); // .value para extraer el valor del elemento
        const numero_2 = parseFloat(document.getElementById("num2").value);
        console.log(numero_1, numero_2);

        const respuesta = await fetch(
            'http://localhost:3000/api/dividir',
            {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify({numero_1, numero_2})
            }
        )

        const dato = await respuesta.json();
        const div_resultado = document.getElementById("resultado");
        div_resultado.innerHTML = dato; //imprimir en el html


    }
);