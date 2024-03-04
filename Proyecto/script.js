document.addEventListener("DOMContentLoaded", function() {
    const imagen = document.getElementById('imagen');
    
    imagen.addEventListener('click', function(event) {
        console.log("Se ha hecho clic en la imagen.");
        toggleAmpliacion();
    });

        let ampliada = false;

    function toggleAmpliacion() {
        if (!ampliada) {
            imagen.style.transform = 'scale(2)';
        } else {
            imagen.style.transform = 'scale(1)';
        }
        ampliada = !ampliada;
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Función para ocultar todas las secciones excepto las específicas
    function ocultarTodoExcepto(secciones) {
        document.querySelectorAll('section').forEach(function(elemento) {
            if (!secciones.includes(elemento.id)) {
                elemento.style.display = 'none';
            } else {
                elemento.style.display = 'block';
            }
        });
        // Mostrar el encabezado y el pie de página
        document.querySelector('header').style.display = 'block';
        document.querySelector('footer').style.display = 'block';
    }

    // Ocultar todas las secciones excepto las iniciales al cargar la página
    ocultarTodoExcepto(['quiensoy', 'terapias', 'hero', 'talleres']);

    var seccion = document.getElementById('quiensoy');
    var coordenadaY = seccion.offsetTop;
    console.log('Coordenada Y de la sección:', coordenadaY);


    // Obtener referencias a los enlaces y botones
    const enlacesTerapias = document.querySelectorAll('.terapias-lista a');
    const enlaceTestimonios = document.querySelector('a[href="#testimonios"]');
    const enlaceExperiencia = document.querySelector('a[href="#experiencia"]');
    const enlaceContacto = document.querySelector('a[href="#contacto"]'); // Agregamos referencia al enlace de Contacto
    const botonVolver = document.querySelectorAll('.btn');
    const botonVolverTerapias = document.querySelectorAll('.btn_terapias');
    const botonVolverQuienSoy = document.querySelectorAll('.btn_qs');
    const botonVolverTalleres = document.querySelectorAll('.btn_talleres');

    // Agregar evento de clic para los enlaces de terapias
    enlacesTerapias.forEach(function(enlace) {
        enlace.addEventListener('click', function(event) {
            event.preventDefault();
            const seccionID = enlace.getAttribute('href').substring(1);
            ocultarTodoExcepto([seccionID]);
            document.querySelector('header').style.display = 'none';
            document.querySelector('footer').style.display = 'none';
            // Desplazar suavemente a la sección
            document.getElementById(seccionID).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Agregar evento de clic para el enlace de Testimonios
    enlaceTestimonios.addEventListener('click', function(event) {
        event.preventDefault();
        const seccionID = enlaceTestimonios.getAttribute('href').substring(1);
        ocultarTodoExcepto([seccionID]);
        document.querySelector('header').style.display = 'none';
        document.querySelector('footer').style.display = 'none';
        // Desplazar suavemente a la sección
        document.getElementById(seccionID).scrollIntoView({ behavior: 'smooth' });
    });

    // Agregar evento de clic para el enlace de Experiencia
    enlaceExperiencia.addEventListener('click', function(event) {
        event.preventDefault();
        const seccionID = enlaceExperiencia.getAttribute('href').substring(1);
        ocultarTodoExcepto([seccionID]);
        document.querySelector('header').style.display = 'none';
        document.querySelector('footer').style.display = 'none';
        // Desplazar suavemente a la sección
        document.getElementById(seccionID).scrollIntoView({ behavior: 'smooth' });
    });

    // Agregar evento de clic para el enlace de Contacto
    enlaceContacto.addEventListener('click', function(event) {
        event.preventDefault();
        const seccionID = enlaceContacto.getAttribute('href').substring(1);
        ocultarTodoExcepto([seccionID]);
        document.querySelector('header').style.display = 'none';
        document.querySelector('footer').style.display = 'none';
        // Desplazar suavemente a la sección
        document.getElementById(seccionID).scrollIntoView({ behavior: 'smooth' });
    });

    // Agregar evento de clic para el enlace de Biodecodificación
    const enlaceBiodecodificacion = document.querySelector('a[href="#biodecodificacion"]');
    enlaceBiodecodificacion.addEventListener('click', function(event) {
        event.preventDefault();
        const seccionID = enlaceBiodecodificacion.getAttribute('href').substring(1);
        ocultarTodoExcepto([seccionID]);
        document.querySelector('header').style.display = 'none';
        document.querySelector('footer').style.display = 'none';
        // Desplazar suavemente a la sección
        document.getElementById(seccionID).scrollIntoView({ behavior: 'smooth' });
    });

    // Agregar evento de clic para los botones de volver
    botonVolver.forEach(function(boton) {
        boton.addEventListener('click', function(event) {
            event.preventDefault();
            ocultarTodoExcepto(['quiensoy', 'terapias', 'hero', 'talleres']);
            // Desplazar la página al principio
            window.scrollTo(0, 0);
        });
    });

    // Agregar evento de clic para los botones de volver terapias
    botonVolverTerapias.forEach(function(boton) {
        boton.addEventListener('click', function(event) {
            event.preventDefault();
            ocultarTodoExcepto(['quiensoy', 'terapias', 'hero', 'talleres']);
            // Desplazar la página al principio
            window.scrollTo(0, 2070);
        });
    });

    // Agregar evento de clic para los botones de volver Quien Soy
    botonVolverQuienSoy.forEach(function(boton) {
        boton.addEventListener('click', function(event) {
            event.preventDefault();
            ocultarTodoExcepto(['quiensoy', 'terapias', 'hero', 'talleres']);
            // Desplazar la página al principio
            window.scrollTo(0, 1370);
        });
    });

    // Agregar evento de clic para los botones de volver Talleres
    botonVolverTalleres.forEach(function(boton) {
        boton.addEventListener('click', function(event) {
            event.preventDefault();
            event.preventDefault();
            ocultarTodoExcepto(['quiensoy', 'terapias', 'hero', 'talleres']);
            // Desplazar la página al principio
            window.scrollTo(0, 2770);
        });
    });


    // Agregar evento de clic para los enlaces del menú desplegable
    document.querySelectorAll('.dropdown-content a').forEach(function(enlace) {
        enlace.addEventListener('click', function(event) {
            event.preventDefault();
            const seccionID = enlace.getAttribute('href').substring(1);
            ocultarTodoExcepto([seccionID]);
            document.querySelector('header').style.display = 'none';
            document.querySelector('footer').style.display = 'none';
            // Desplazar suavemente a la sección
            document.getElementById(seccionID).scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Agregar evento de clic para la sección de Novedades Talleres
    const seccionTalleres = document.getElementById('talleres');
    seccionTalleres.addEventListener('click', function(event) {
        // Verificar si se hizo clic dentro del contenedor del taller de Novedades Talleres
        if (event.target.closest('.taller') && event.target.closest('.taller').id === 'tallerNovedadesTalleres') {
            ocultarTodoExcepto(['novedades_talleres']);
            document.querySelector('header').style.display = 'none';
            document.querySelector('footer').style.display = 'none';
            document.getElementById('novedades_talleres').scrollIntoView({ behavior: 'smooth' });
        }
    });
});



