const videosData = [
  {
    id: 1,
    title: "Introducción a la programación",
    thumbnail: "https://marketplace.canva.com/EAFglaaF2TE/1/0/1600w/canva-miniatura-youtube-juegos-llamativo-negro-morado-7cqCW57NbYY.jpg",
    nivel: "Principiante",
    fecha: "2024-05-01",
    autor: "María González",
    categoria: "Programación",
  },
  {
    id: 2,
    title: "Estructuras de datos avanzadas",
    thumbnail: "data:image/jpeg;base64,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",
    nivel: "Avanzado",
    fecha: "2024-04-15",
    autor: "Carlos Rodríguez",
    categoria: "Algoritmos",
  },
  {
    id: 3,
    title: "Diseño de interfaces modernas",
    thumbnail: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-retrowave-design-template-facd275829297c4a471f2f1af6436508_screen.jpg?ts=1561496227",
    nivel: "Intermedio",
    fecha: "2024-05-10",
    autor: "Ana Martínez",
    categoria: "Diseño UX/UI",
  },
  {
    id: 4,
    title: "Machine Learning para principiantes",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQANpkbikEnYp_Jv5YtU9hmw8432HquuXy2Gg&s",
    nivel: "Principiante",
    fecha: "2024-03-22",
    autor: "David López",
    categoria: "Inteligencia Artificial",
  },
  {
    id: 5,
    title: "Optimización de algoritmos",
    thumbnail: "https://img.freepik.com/vector-gratis/plantilla-miniatura-youtube-festival-musica-nostalgica-plana-90_23-2149021424.jpg",
    nivel: "Experto",
    fecha: "2024-02-18",
    autor: "Laura Sánchez",
    categoria: "Algoritmos",
  },
  {
    id: 6,
    title: "Desarrollo web con React",
    thumbnail: "https://via.placeholder.com/350x200",
    nivel: "Intermedio",
    fecha: "2024-04-30",
    autor: "Javier Fernández",
    categoria: "Desarrollo Web",
  },
  {
    id: 7,
    title: "Arquitectura de microservicios",
    thumbnail: "https://via.placeholder.com/350x200",
    nivel: "Experto",
    fecha: "2024-03-05",
    autor: "Elena Pérez",
    categoria: "Arquitectura de Software",
  },
  {
    id: 8,
    title: "Fundamentos de bases de datos",
    thumbnail: "https://via.placeholder.com/350x200",
    nivel: "Principiante",
    fecha: "2024-05-08",
    autor: "Miguel Torres",
    categoria: "Bases de Datos",
  },
];

const botonFiltro = document.querySelector('.buscarvideos-boton-filtro');
const panelFiltrosMovil = document.querySelector('.buscarvideos-panel-filtros-movil');
const cuadriculaVideos = document.getElementById('buscarvideos-cuadricula');
const contadorVideos = document.getElementById('buscarvideos-contador');
const sinResultados = document.getElementById('buscarvideos-sin-resultados');
const botonOrdenar = document.querySelector('.buscarvideos-boton-ordenar');
const textoOrdenar = document.getElementById('buscarvideos-texto-ordenar');
const botonesLimpiarFiltros = document.querySelectorAll('.buscarvideos-boton-limpiar-filtros');
const checkboxesFiltro = document.querySelectorAll('.buscarvideos-checkbox-filtro');

let nivelesSeleccionados = [];
let ordenSeleccionado = 'newest';

document.addEventListener('DOMContentLoaded', () => {
  renderizarVideos(videosData);
  configurarEventListeners();
});

function configurarEventListeners() {
  botonFiltro.addEventListener('click', () => {
    botonFiltro.classList.toggle('activo');
    panelFiltrosMovil.classList.toggle('activo');
  });

  botonOrdenar.addEventListener('click', () => {
    ordenSeleccionado = ordenSeleccionado === 'newest' ? 'oldest' : 'newest';
    textoOrdenar.textContent = ordenSeleccionado === 'newest' ? 'Más recientes' : 'Más antiguos';
    aplicarFiltrosYOrden();
  });

  checkboxesFiltro.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const nivel = checkbox.dataset.nivel;

      document.querySelectorAll(`[data-nivel="${nivel}"]`).forEach(cb => {
        cb.checked = checkbox.checked;
      });

      if (checkbox.checked) {
        if (!nivelesSeleccionados.includes(nivel)) {
          nivelesSeleccionados.push(nivel);
        }
      } else {
        nivelesSeleccionados = nivelesSeleccionados.filter(n => n !== nivel);
      }

      aplicarFiltrosYOrden();
    });
  });

  botonesLimpiarFiltros.forEach(boton => {
    boton.addEventListener('click', limpiarFiltros);
  });
}

function renderizarVideos(videos) {
  cuadriculaVideos.innerHTML = '';
  contadorVideos.textContent = videos.length;

  if (videos.length === 0) {
    sinResultados.classList.add('activo');
    return;
  }

  sinResultados.classList.remove('activo');

  videos.forEach(video => {
    const tarjetaVideo = document.createElement('a');
    tarjetaVideo.href = `/video/${video.id}`;
    tarjetaVideo.className = 'buscarvideos-tarjeta';
    tarjetaVideo.setAttribute('data-nivel', video.nivel);
    tarjetaVideo.setAttribute('data-fecha', video.fecha);

    tarjetaVideo.innerHTML = `
      <div class="buscarvideos-contenedor-miniatura">
        <img src="${video.thumbnail}" alt="${video.title}" class="buscarvideos-miniatura">
        <div class="buscarvideos-nivel">${video.nivel}</div>
      </div>
      <div class="buscarvideos-contenido-tarjeta">
        <h3 class="buscarvideos-titulo-tarjeta">${video.title}</h3>
        <p class="buscarvideos-autor">${video.autor}</p>
        <div class="buscarvideos-meta">
          <span>${video.categoria}</span>
          <span>${formatearFecha(video.fecha)}</span>
        </div>
      </div>
    `;

    cuadriculaVideos.appendChild(tarjetaVideo);
  });
}

function aplicarFiltrosYOrden() {
  let videosFiltered = [...videosData];

  if (nivelesSeleccionados.length > 0) {
    videosFiltered = videosFiltered.filter(video => nivelesSeleccionados.includes(video.nivel));
  }

  videosFiltered.sort((a, b) => {
    const fechaA = new Date(a.fecha).getTime();
    const fechaB = new Date(b.fecha).getTime();
    return ordenSeleccionado === 'newest' ? fechaB - fechaA : fechaA - fechaB;
  });

  renderizarVideos(videosFiltered);
}

function limpiarFiltros() {
  nivelesSeleccionados = [];
  checkboxesFiltro.forEach(checkbox => {
    checkbox.checked = false;
  });
  aplicarFiltrosYOrden();
}

function formatearFecha(fechaString) {
  const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(fechaString).toLocaleDateString('es-ES', opciones);
}