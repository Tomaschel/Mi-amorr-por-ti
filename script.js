const heartContainer = document.getElementById('heart-container');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '♥️';

    // Posición inicial aleatoria en el eje X
    const x = Math.random() * 100;
    heart.style.left = `${x}vw`;

    // Añadir el corazón al contenedor
    heartContainer.appendChild(heart);

    // Eliminar el corazón después de la animación
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Crear un corazón cada 200 ms
setInterval(createHeart, 100);