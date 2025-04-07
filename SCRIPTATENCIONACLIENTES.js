/*AVISOS*/

// Mostrar la ventana de Avisos al cargar la página
/*window.onload = function() {
    document.getElementById('avisoPopup').style.display = 'flex';
};

// Función para cerrar la ventana de Avisos
function cerrarAviso() {
    document.getElementById('avisoPopup').style.display = 'none';
}*/

// Resto del código para manejar los formularios
document.getElementById('preguntasForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Pregunta enviada:', data);
    alert('Tu pregunta ha sido enviada. Nos pondremos en contacto contigo pronto.');
    event.target.reset();
});

document.getElementById('quejasForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Queja enviada:', data);
    alert('Tu queja ha sido enviada. Nos pondremos en contacto contigo pronto.');
    event.target.reset();
});

document.getElementById('encuestaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Encuesta enviada:', data);
    alert('Gracias por tu retroalimentación. Nos pondremos en contacto contigo pronto.');
    event.target.reset();
});


/*CUERPO DE ATENCION A CLIENTES*/ 
document.getElementById('preguntasForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Pregunta enviada:', data);
    alert('Tu pregunta ha sido enviada. Nos pondremos en contacto contigo pronto.');
    event.target.reset();
});

document.getElementById('quejasForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Queja enviada:', data);
    alert('Tu queja ha sido enviada. Nos pondremos en contacto contigo pronto.');
    event.target.reset();
});

document.getElementById('encuestaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Encuesta enviada:', data);
    alert('Gracias por tu retroalimentación. Nos pondremos en contacto contigo pronto.');
    event.target.reset();
});