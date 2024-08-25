// Selección de elementos del DOM
const textareaEntrada = document.querySelector('.Caja1DigitarTexto');
const mensajeError = document.getElementById('mensajeError');
const textareaSalida = document.querySelector('.Caja2Mensaje');
const botonEncriptar = document.querySelector('.botonEncriptar');
const botonDesencriptar = document.querySelector('.botonDesencriptar');
const botonBorrar = document.querySelector('.botonBorrar');
const botonCopiar = document.querySelector('.boton-copiar');
const mensajeEmergente = document.querySelector('.mensaje_emergente');
const mensajeEmergenteRecomendacion = document.querySelector('.mensaje_emergente_recomendación');

// Función para encriptar texto
function encriptarTexto(texto) {
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

// Función para desencriptar texto
function desencriptarTexto(texto) {
    return texto.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
}

// Función para validar texto
function validarTexto(texto) {
    const regex = /^[a-z\s]*$/; // Regex para validar solo letras minúsculas y espacios
    return regex.test(texto);
}

// Funciones para mostrar y ocultar errores
const mostrarError = (mensaje) => {
    mensajeError.textContent = mensaje;
    mensajeError.style.display = 'block'; // Mostrar mensaje de error
};

const ocultarError = () => {
    mensajeError.textContent = '';
    mensajeError.style.display = 'none'; // Ocultar mensaje de error
};

// Evento para encriptar texto
botonEncriptar.addEventListener('click', function() {
    const textoEntrada = textareaEntrada.value.trim(); // No convertir a minúsculas aún
    if (validarTexto(textoEntrada)) {
        const textoEnMinusculas = textoEntrada.toLowerCase(); // Convertir a minúsculas después de la validación
        textareaSalida.value = encriptarTexto(textoEnMinusculas);
        textareaSalida.style.backgroundImage = 'none'; // Ocultar imagen de fondo
        mensajeEmergente.style.display = 'none'; // Ocultar mensaje inicial
        mensajeEmergenteRecomendacion.style.display = 'none'; // Ocultar recomendación inicial
        ocultarError();
    } else {
        mostrarError('Por favor, ingrese solo letras minúsculas y sin acentos.');
    }
});

// Evento para desencriptar texto
botonDesencriptar.addEventListener('click', function() {
    const textoEntrada = textareaEntrada.value.trim(); // No convertir a minúsculas aún
    if (validarTexto(textoEntrada)) {
        const textoEnMinusculas = textoEntrada.toLowerCase(); // Convertir a minúsculas después de la validación
        textareaSalida.value = desencriptarTexto(textoEnMinusculas);
        textareaSalida.style.backgroundImage = 'none'; // Ocultar imagen de fondo
        mensajeEmergente.style.display = 'none'; // Ocultar mensaje inicial
        mensajeEmergenteRecomendacion.style.display = 'none'; // Ocultar recomendación inicial
        ocultarError();
    } else {
        mostrarError('Por favor, ingrese solo letras minúsculas y sin acentos.');
    }
});

// Evento para borrar texto
botonBorrar.addEventListener('click', function() {
    textareaEntrada.value = '';
    textareaSalida.value = '';
    ocultarError();
    textareaSalida.style.backgroundImage = ''; // Restaurar imagen de fondo
    mensajeEmergente.style.display = ''; // Mostrar mensaje inicial
    mensajeEmergenteRecomendacion.style.display = ''; // Mostrar recomendación inicial
});

// Evento para copiar texto
botonCopiar.addEventListener('click', function() {
    if (textareaSalida.value) {
        textareaSalida.select();
        document.execCommand('copy');
        alert('Texto copiado al portapapeles');
    }
});