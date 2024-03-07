const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname)));

// Ruta para servir el archivo HTML principal
app.get('/', (req, res) => {
    res.sendFile(path.resolve(proyectoPath, 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, '192.168.0.xxx', () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});

// Capturar la señal de interrupción (Ctrl + C)
process.on('SIGINT', () => {
    console.log('Apagando el servidor...');
    // Aquí puedes realizar acciones adicionales, como cerrar conexiones de base de datos.
    // Por ejemplo:
    // mongoose.disconnect(); // Si usas Mongoose para MongoDB
    process.exit(); // Detiene el proceso de Node.js
});



