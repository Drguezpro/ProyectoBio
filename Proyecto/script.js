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
            /* Desplazar suavemente a la sección
            document.getElementById(seccionID).scrollIntoView({ behavior: 'smooth' });*/
            var terapiasSection = document.getElementById(seccionID);
            var terapiasOffset = terapiasSection.offsetTop;
            window.scrollTo(0, terapiasOffset);
        });
    });

    // Agregar evento de clic para el enlace de Testimonios
    enlaceTestimonios.addEventListener('click', function(event) {
        event.preventDefault();
        const seccionID = enlaceTestimonios.getAttribute('href').substring(1);
        ocultarTodoExcepto([seccionID]);
        document.querySelector('header').style.display = 'none';
        document.querySelector('footer').style.display = 'none';
        
        var testiSection = document.getElementById(seccionID);
        var testiOffset = testiSection.offsetTop;
        window.scrollTo(0, testiOffset);
    });

    // Agregar evento de clic para el enlace de Experiencia
    enlaceExperiencia.addEventListener('click', function(event) {
        event.preventDefault();
        const seccionID = enlaceExperiencia.getAttribute('href').substring(1);
        ocultarTodoExcepto([seccionID]);
        document.querySelector('header').style.display = 'none';
        document.querySelector('footer').style.display = 'none';
        
        var experSection = document.getElementById(seccionID);
        var experOffset = experSection.offsetTop;
        window.scrollTo(0, experOffset);
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
            console.log ('Boton volver terapias presionado')
            event.preventDefault();
            ocultarTodoExcepto(['quiensoy', 'terapias', 'hero', 'talleres']);
            /* Desplazar la página al principio
            window.scrollTo(0, 2070);*/
            var terapiasSection = document.getElementById('terapias');
            var terapiasOffset = terapiasSection.offsetTop;
            window.scrollTo(0, terapiasOffset);
        });
    });

    // Agregar evento de clic para los botones de volver Quien Soy
    botonVolverQuienSoy.forEach(function(boton) {
        boton.addEventListener('click', function(event) {
            event.preventDefault();
            ocultarTodoExcepto(['quiensoy', 'terapias', 'hero', 'talleres']);
            /* Desplazar la página al principio
            window.scrollTo(0, 1370);*/
            
            var quiensoySection = document.getElementById('quiensoy');
            var windowHeight = window.innerHeight;
            var quiensoyBottom = quiensoySection.offsetTop + quiensoySection.offsetHeight;
            var scrollToPosition = quiensoyBottom - windowHeight;

            window.scrollTo(0, scrollToPosition);

        });
    });

    // Agregar evento de clic para los botones de volver Talleres
    botonVolverTalleres.forEach(function(boton) {
        boton.addEventListener('click', function(event) {
            event.preventDefault();
            ocultarTodoExcepto(['quiensoy', 'terapias', 'hero', 'talleres']);
            /*Desplazar la página al principio window.scrollTo(0, 2770);*/
            // Obtener la posición de la sección "talleres"
            var talleresSection = document.getElementById('talleres');
            var talleresOffset = talleresSection.offsetTop;
            
            // Desplazar la página al principio de la sección "talleres"
            window.scrollTo(0, talleresOffset);
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

            /*document.getElementById('novedades_talleres').scrollIntoView({ behavior: 'smooth' });*/
            var novedadesSection = document.getElementById('novedades_talleres');
            var novedadesOffset = novedadesSection.offsetTop;
            window.scrollTo(0, novedadesOffset);
        }
    });

    // Agregar evento de clic para el enlace "Más info..."
    const masInfoLinks = document.querySelectorAll('#talleres-info .mas-info');
    masInfoLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar que el enlace se comporte como un enlace normal (evita que se desplaze automáticamente)

            ocultarTodoExcepto(['novedades_talleres']);
            document.querySelector('header').style.display = 'none';
            document.querySelector('footer').style.display = 'none';

            var novedadesSection = document.getElementById('novedades_talleres');
            var novedadesOffset = novedadesSection.offsetTop;
            window.scrollTo(0, novedadesOffset);
        });
    });

    // Enlace para novedades Taller Abril
    const imagenesNovedades = document.querySelectorAll('.img-novedades-tall');

    imagenesNovedades.forEach(function(imagen) {
        imagen.addEventListener('click', function(event) {
            
            ocultarTodoExcepto(['novedades_mes']);
            document.querySelector('header').style.display = 'none';
            document.querySelector('footer').style.display = 'none';
            var novedadesSection = document.getElementById('novedades_mes');
            var novedadesOffset = novedadesSection.offsetTop;
            window.scrollTo(0, novedadesOffset);
        });
    });


    // Enlace a novedades mes Talleres desde img de Talleres
    const imagenNovedadesAbril = document.getElementById('novedades-abril');

    // Agregar evento de clic a la imagen
    imagenNovedadesAbril.addEventListener('click', function(event) {
        ocultarTodoExcepto(['novedades_mes_2']);
         document.querySelector('header').style.display = 'none';
         document.querySelector('footer').style.display = 'none';

        // Obtener la sección "novedades_mes"
        var novedadesSection = document.getElementById('novedades_mes');
        var novedadesOffset = novedadesSection.offsetTop;

        // Desplazar la ventana hasta la sección "novedades_mes"
        window.scrollTo(0, novedadesOffset);
    });


    const menuToggle = document.getElementById('menu-toggle');
    const menuContainer = document.getElementById('menu-container');
    const header = document.querySelector('header');
    const spanForBreak = document.querySelector('.menu span');

    menuToggle.addEventListener('click', function() {
        // Si el menú está visible, ocultarlo; de lo contrario, mostrarlo
        if (menuContainer.style.display === 'block') {
            menuContainer.style.display = 'none';
            // Eliminar el salto de línea en pantallas pequeñas
            spanForBreak.innerHTML = ''; // Limpiar el contenido del span
        } else {
            menuContainer.style.display = 'block';
            spanForBreak.innerHTML = '<br>'; // Agregar un salto de línea en el span
        }
    });

    const closeMenuBtn = document.getElementById('close-menu-btn');
    
    closeMenuBtn.addEventListener('click', function() {
        menuContainer.style.display = 'none';
        header.style.height = 'auto';
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768 && window.innerWidth <= 1025) {
            menuContainer.style.display = 'block';
        } else {
            menuContainer.style.display = 'none';
        }
    });



    window.addEventListener('resize', function() {
        // Verificar si la pantalla está en el rango de tamaño intermedio
        if (window.innerWidth >= 768 && window.innerWidth <= 1025) {
            menuContainer.style.display = 'block'; // Mostrar el menú
        } else {
            menuContainer.style.display = 'none'; // Ocultar el menú en otros casos
        }
    });

    // Función para mostrar el video de YouTube
    let player;     
    let reproductorCargado = false;

    function mostrarVideo() {
        // Mostrar el contenedor del video
        ocultarTodoExcepto('reproductor-video');
        document.querySelector('header').style.display = 'none';
        document.querySelector('footer').style.display = 'none';
        const contenedorVideo = document.querySelector('#reproductor-video');
        contenedorVideo.style.display = 'block';

        // Cargar el reproductor de video de YouTube solo si aún no se ha cargado
        if (!reproductorCargado) {
            cargarReproductor();
            reproductorCargado = true;
        }
    }

    // Listener para el botón de mostrar video
    const botonMostrarVideo = document.getElementById('boton-mostrar-video');
    if (botonMostrarVideo) {
        botonMostrarVideo.addEventListener('click', function(event) {
            event.preventDefault();
            mostrarVideo(); 
        });
    } else {
        console.log('El elemento con ID "boton-mostrar-video" no se encontró.');
    }

    // Función para cargar el reproductor de video de YouTube
    function cargarReproductor() {
        // Función llamada cuando se carga la API de YouTube
        function onYouTubeIframeAPIReady() {
            // Crear un nuevo reproductor de YouTube
            player = new YT.Player('player', {
                height: '360',
                width: '640',
                videoId: 'NetMzf0Xle8', 
                playerVars: {
                    'rel': 0, // Deshabilitar videos relacionados al finalizar la reproducción
                    /*'controls': 0 // Deshabilitar los controles del reproductor de YouTube*/
                    'modestbranding': 1 // Eliminar el logo de YouTube del reproductor
                }
            });
        }
        // Llamar a la función que carga la API de YouTube
        onYouTubeIframeAPIReady();
    }
    

    const botonesVolverBiodecodificacion = document.querySelectorAll('.btn_volver_biodecodificacion');
    botonesVolverBiodecodificacion.forEach(function(boton) {
        boton.addEventListener('click', function(event) {
            console.log('Botón volver biodecodificación presionado');
            event.preventDefault();
            ocultarTodoExcepto(['biodecodificacion']);
            document.querySelector('header').style.display = 'none';
            document.querySelector('footer').style.display = 'none';
            

            // Pausar el video si está reproduciendo
            if (player && typeof player.pauseVideo === 'function') {
                player.pauseVideo();
            }
            
            // Desplazar la página hasta la sección 'biodecodificacion'
            const seccionBiodecodificacion = document.getElementById('biodecodificacion');
            seccionBiodecodificacion.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Section Slider
    let slideIndex = 0;
    let slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let timer; // Variable para almacenar el temporizador

    const showNextSlide = () => {
        slideIndex++;
        if (slideIndex >= slides.length) { slideIndex = 0; }
        updateSlide();
    };

    const showPrevSlide = () => {
        slideIndex--;
        if (slideIndex < 0) { slideIndex = slides.length - 1; }
        updateSlide();
    };

    const updateSlide = () => {
        console.log ('inciando uldateslide')
        slides.forEach(slide => slide.style.display = 'none');
        slides[slideIndex].style.display = 'block';

        dots.forEach(dot => dot.classList.remove('active'));
        dots[slideIndex].classList.add('active');

        clearTimeout(timer);
        timer = setTimeout(showNextSlide, 4000); // Cambiar imagen cada 5 segundos
    };

    const currentSlide = n => {
        slideIndex = n - 1;
        updateSlide();
    };

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide(index + 1);
        });
    });

    // Botones previo y siguiente
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    prevBtn.addEventListener('click', showPrevSlide);
    nextBtn.addEventListener('click', showNextSlide);

    // Iniciar la presentación de diapositivas
    updateSlide();

    //Código para evitar que la flecha de volver en dispositivos nos saque de la página / Chequear funcione novedades mes
    var clicEnImagenNovedades = false;
    var clicEnImagenAbril = false;

    // Capturar el evento de clic en las imágenes de novedades
    imagenesNovedades.forEach(function(imagen) {
        imagen.addEventListener('click', function(event) {
            // Establecer la variable a true para indicar que la navegación fue desencadenada por una imagen de novedades
            clicEnImagenNovedades = true;
        });
        
        // Agregar oyentes para eventos táctiles en dispositivos móviles
        imagen.addEventListener('touchstart', function(event) {
            clicEnImagenNovedades = true;
        });
    });
    
    imagenNovedadesAbril.addEventListener('click', function(event) {
        clicEnImagenAbril = true;
            imagenNovedadesAbril.addEventListener('touchstart', function(event) {
            clicEnImagenAbril = true;
        });
    });

    // Agregar un oyente de eventos al enlace
    enlaceContacto.addEventListener('click', function() {
       clicEnImagenNovedades = true;
       clicEnImagenAbril = true;
    });
    
    // Capturar el evento de retroceso en dispositivos móviles
    window.addEventListener('popstate', function(event) {
        // Verificar si la navegación fue desencadenada por una imagen de novedades o la imagen de abril
        if (!clicEnImagenNovedades && !clicEnImagenAbril) {
            // Prevenir el comportamiento predeterminado
            event.preventDefault();
            
            ocultarTodoExcepto(['quiensoy', 'terapias', 'hero', 'talleres']);
            window.scrollTo(0, 0);
        }
        // Restablecer las variables a false para futuras navegaciones
        clicEnImagenNovedades = false;
        clicEnImagenAbril = false;
    });

});

function reloadPage() {
    location.reload();
}






