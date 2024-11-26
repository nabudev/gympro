// Función para mostrar u ocultar información
function toggleInfo(event) {
    // Selecciona el contenedor de la información correspondiente al botón clickeado
    var info = event.target.nextElementSibling;
    
    // Si está oculto, lo muestra; si está visible, lo oculta
    if (info.style.display === "none" || info.style.display === "") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}

// Asignar la función a todos los botones con la clase 'more-info-btn'
document.querySelectorAll('.more-info-btn').forEach(function(button) {
    button.addEventListener('click', toggleInfo);
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('testimonios.json')
      .then(response => response.json())
      .then(data => {
        // Access the Testimonios array from the JSON
        const testimonios = data.Testimonios;
  
        // Select the container where testimonios will be displayed
        const testimoniosContainer = document.getElementById('testimonialsList');
  
        // Iterate through each testimonio and create HTML elements
        testimonios.forEach(testimonio => {
          const testimonioDiv = document.createElement('div');
          testimonioDiv.classList.add('testimonial');
  
          testimonioDiv.innerHTML = `
            <p><strong>Nombre:</strong> ${testimonio.nombre}</p>
            <p><strong>Ciudad:</strong> ${testimonio.ciudad}</p>
            <p><strong>Comentario:</strong> ${testimonio.comentario}</p>
            <p><strong>Fecha:</strong> ${testimonio.fecha}</p>
            <hr>
          `;
  
          testimoniosContainer.appendChild(testimonioDiv);
        });
      })
      .catch(error => console.error('Error fetching JSON:', error));
  });