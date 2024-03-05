/* Importar Express
const express = require('express');
// Crear una instancia de Express
const app = express();
// Definir el puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 3000;
// Configurar rutas y middleware aquí
app.get('/', (req, res) => {
    res.send('¡Bienvenido a mi aplicación Express!');
});

// Iniciar el servidor y permitir el acceso desde cualquier dirección IP en el puerto especificado
app.listen(PORT, '192.168.0.203', () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
*/
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

/* Definir la ruta al directorio de tu proyecto
const proyectoPath = path.join(__dirname);*/
// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname)));

// Ruta para servir el archivo HTML principal
app.get('/', (req, res) => {
    res.sendFile(path.resolve(proyectoPath, 'bio-1.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});



