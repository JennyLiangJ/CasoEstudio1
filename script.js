//Lista de estudiantes  precargada
let estudiantes = [
    {
        nombre: "Maria",
        apellido: "Mora Perez",
        nota: 90
    },

    {
        nombre: "Pedro",
        apellido: "Sibaja Lopez",
        nota: 60
    },

    {
        nombre: "Marco",
        apellido: "Rojas Castro",
        nota: 78
    }
];

//inputs globales
let formulario = document.getElementById("formulario");
let tabla = document.getElementById("tablaEstudiantes");

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let nota = document.getElementById("nota");


let mayorNota = document.getElementById("mayorNota");
let promedio = document.getElementById("promedio");
let menorNota = document.getElementById("menorNota");

mostrarTabla();
actualizarResumen();

// rellenar formulario
formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    if ( // si alguno de los campos está vacío, mostrar alerta
        nombre.value == "" || apellido.value == "" || nota.value == "") 
        
        {
        alert("Por favor, complete todos los campos");
        return;
    }

    let estudiante = { // crear objeto estudiante

        nombre: nombre.value,
        apellido: apellido.value,
        nota: Number(nota.value)

    };

    estudiantes.push(estudiante);  // agregar estudiante a la lista
    mostrarTabla(); // actualizar tabla
    actualizarResumen(); // actualizar resumen
    formulario.reset(); // limpiar formulario

});

function mostrarTabla() { // mostrar tabla de estudiantes

    tabla.innerHTML = "";

    for (let estudiante of estudiantes) {
        
        let fila = document.createElement("tr"); 
        let color = "";

        if (estudiante.nota >= 80) {
            color = "verde";
        }
        else if (estudiante.nota < 65) {
            color = "rojo";
        }

        fila.innerHTML = `
            <td>${estudiante.nombre}</td>
            <td>${estudiante.apellido}</td>
            <td class="${color}">${estudiante.nota}</td>
        `;

        tabla.appendChild(fila);

    }

}

function actualizarResumen() { // Buscar el estudiante con la mayor nota, la menor nota y el promedio de notas

    let suma = 0;
    let mayor = estudiantes[0];
    let menor = estudiantes[0];

    for (let estudiante of estudiantes) {
        suma += estudiante.nota;
        if (estudiante.nota > mayor.nota) {
            mayor = estudiante;
        }
        if (estudiante.nota < menor.nota) {
            menor = estudiante;
        }

    }

    let promedioNotas = suma / estudiantes.length;

    mayorNota.textContent =
        "Nota más alta: " + mayor.nombre;

    promedio.textContent =
        "Promedio: " + promedioNotas.toFixed(2);

    menorNota.textContent =
        "Nota más baja: " + menor.nombre;

}