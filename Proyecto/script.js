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

    const menuToggle = document.getElementById('menu-toggle');
    const menuContainer = document.getElementById('menu-container');
    const headerImg = document.querySelector('header img');
    const emptyContainer = document.querySelector('.empty-container');

    if (window.innerWidth <= 768) {
    emptyContainer.innerHTML = 'NO SOY lo que me pasó.<br> SOY <br> lo que ELIJO SER. <br> Carl Jung';
    }

    menuToggle.addEventListener('click', function() {
        // Si el menú está visible, ocultarlo; de lo contrario, mostrarlo
        if (menuContainer.style.display === 'block') {
            menuContainer.style.display = 'none';
            // Restablecer la posición de la imagen cuando se oculta el menú
            headerImg.style.marginTop = '20px'; // Ajustar el margen superior
            emptyContainer.style.display = 'flex'; // Mostrar el contenedor vacío
            
        } else {
            menuContainer.style.display = 'block';
            // Ajustar la posición del menú desplegable
            menuContainer.style.top = menuToggle.offsetTop + menuToggle.offsetHeight + 'px';
            menuContainer.style.left = menuToggle.offsetLeft + 'px';
            // Ajustar la posición de la imagen cuando se muestra el menú
            headerImg.style.marginTop = (menuToggle.offsetTop + menuToggle.offsetHeight + 120) + 'px'; // Ajustar el margen superior
            emptyContainer.style.display = 'none'; 
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

/* Section Slider
let slideIndex = 0;
let slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let timer; // Variable para almacenar el temporizador

const showNextSlide = () => {
  slides.forEach(slide => slide.style.display = 'none');
  dots.forEach(dot => dot.classList.remove('active'));

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('active');

  // Reiniciar el temporizador
  clearTimeout(timer);
  timer = setTimeout(showNextSlide, 5000); // Cambiar imagen cada 5 segundos
};

const showPrevSlide = () => {
  slides.forEach(slide => slide.style.display = 'none');
  dots.forEach(dot => dot.classList.remove('active'));

  slideIndex--;
  if (slideIndex < 1) { slideIndex = slides.length; }

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('active');

  // Reiniciar el temporizador
  clearTimeout(timer);
  timer = setTimeout(showNextSlide, 5000); // Cambiar imagen cada 5 segundos
};

// Event listeners para los botones previo y siguiente
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

prevBtn.addEventListener('click', showPrevSlide);
nextBtn.addEventListener('click', showNextSlide);

// Iniciar la presentación de diapositivas
showNextSlide();

const showSlides = () => {
  slides.forEach(slide => slide.style.display = 'none');
  
  dots.forEach(dot => dot.classList.remove('active'));

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('active');

  // Reiniciar el temporizador
  clearTimeout(timer);
  timer = setTimeout(showSlides, 5000); // Cambiar imagen cada 5 segundos
};


const currentSlide = n => {
  // Ajustar el índice del slide según el dot seleccionado
  slideIndex = n - 1; // Restamos 1 porque los dots se cuentan desde 1, pero los índices de los slides comienzan desde 0
  showSlides();
};



dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide(index + 1);
  });
});*/

const botonMostrarVideo = document.getElementById('boton-mostrar-video');
    if (botonMostrarVideo) {
        botonMostrarVideo.addEventListener('click', function(event) {
            event.preventDefault();
            mostrarVideo(); // Llama a la función mostrarVideo cuando se hace clic en el botón
        });
    } else {
        console.log('El elemento con ID "boton-mostrar-video" no se encontró.');
    }
    
    // Función para mostrar el video de YouTube
    function mostrarVideo() {
        // Mostrar el contenedor del video
        ocultarTodoExcepto('reproductor-video');
        document.querySelector('header').style.display = 'none';
        document.querySelector('footer').style.display = 'none';
        const contenedorVideo = document.querySelector('#reproductor-video');
        contenedorVideo.style.display = 'block';
    
        // Carga el reproductor de video de YouTube
        cargarReproductor();
    }
    
    function cargarReproductor() {
        // Reemplaza 'VIDEO_ID_AQUI' con el ID del video de YouTube que deseas reproducir
        const videoId = 'GbrRxoPZ0dQ';
       
        // Crea el reproductor de video de YouTube
        player = new YT.Player('player', {
            height: '360',
            width: '640',
            videoId: videoId,
            playerVars: {
                'autoplay': 1,
                'controls': 1,
                'rel': 0,
                'showinfo': 0
            },
            events: {
                'onReady': onPlayerReady
            }
        });
    }
    
    function onPlayerReady(event) {
        // El reproductor de video está listo
        event.target.playVideo(); // Inicia la reproducción automáticamente
    }
    
    
    const botonesVolverBiodecodificacion = document.querySelectorAll('.btn_volver_biodecodificacion');
    botonesVolverBiodecodificacion.forEach(function(boton) {
    boton.addEventListener('click', function(event) {
        console.log('Botón volver biodecodificación presionado');
        event.preventDefault();
        ocultarTodoExcepto(['biodecodificacion']);
        document.querySelector('header').style.display = 'none';
        document.querySelector('footer').style.display = 'none';
        
        // Desplazar la página hasta la sección 'biodecodificacion'
        const seccionBiodecodificacion = document.getElementById('biodecodificacion');
        seccionBiodecodificacion.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

});

function reloadPage() {
    location.reload();
}






