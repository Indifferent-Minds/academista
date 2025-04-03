document.addEventListener('DOMContentLoaded', function () {
    const botonesOrdenar = document.querySelectorAll('.boton-ordenar');
    const contenedorVideos = document.getElementById('contenedor-videos');
    const enlacesVideos = Array.from(contenedorVideos.getElementsByClassName('enlace'));
    const ordenOriginal = [...enlacesVideos];
  
    function ordenarVideos(orden) {
      const videosOrdenados = orden
        ? [...enlacesVideos].sort((a, b) => new Date(b.getAttribute('data-fecha')) - new Date(a.getAttribute('data-fecha')))
        : ordenOriginal;
  
      contenedorVideos.innerHTML = '';
      videosOrdenados.forEach(video => contenedorVideos.appendChild(video));
    }
  
    botonesOrdenar.forEach(boton => {
      boton.addEventListener('click', function () {
        if (boton.classList.contains('activo')) {
          boton.classList.remove('activo');
          ordenarVideos(null);
        } else {
          botonesOrdenar.forEach(b => b.classList.remove('activo'));
          boton.classList.add('activo');
          ordenarVideos(boton.getAttribute('data-sort'));
        }
      });
    });
  });
  