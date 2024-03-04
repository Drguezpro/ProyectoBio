// Importar Express
const express = require('express');
// Crear una instancia de Express
const app = express();
// Definir el puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 3000;
// Configurar rutas y middleware aquí
app.get('/', (req, res) => {
    res.send('¡Bienvenido a mi aplicación Express!');
  });

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});

