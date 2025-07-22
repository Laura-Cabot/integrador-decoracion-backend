const API_URL = 'http://localhost:3000/productos';

const filtroCategoria = document.getElementById('filtroCategoria');
const contenedorProductos = document.getElementById('productosContainer');

filtroCategoria.addEventListener('change', async () => {
  const categoria = filtroCategoria.value;

  try {
    const url = categoria
      ? `${API_URL}/search?categoria=${encodeURIComponent(categoria)}`
      : API_URL;

    const respuesta = await fetch(url);
    const productos = await respuesta.json();
    mostrarProductos(productos);
  } catch (error) {
    console.error('Error al filtrar productos:', error);
    contenedorProductos.innerHTML = `
      <p class="text-danger text-center mt-4">
        <i class="bi bi-exclamation-triangle-fill me-2"></i>
        No se pudieron cargar los productos 😢
      </p>`;
  }
});

window.addEventListener('DOMContentLoaded', async () => {
  try {
    const respuesta = await fetch(API_URL);
    const productos = await respuesta.json();
    mostrarProductos(productos);
  } catch (error) {
    console.error('Error al cargar productos al inicio:', error);
    contenedorProductos.innerHTML = `
      <p class="text-danger text-center mt-4">
        <i class="bi bi-exclamation-triangle-fill me-2"></i>
        No se pudieron cargar los productos 😢
      </p>`;
  }
});

let paginaActual = 1;
const productosPorPagina = 6;
let todosLosProductos = [];

function mostrarProductos(productos) {
  todosLosProductos = productos;
  renderizarPagina(paginaActual);
}

function renderizarPagina(pagina) {
  const inicio = (pagina - 1) * productosPorPagina;
  const fin = inicio + productosPorPagina;
  const productosPagina = todosLosProductos.slice(inicio, fin);

  contenedorProductos.innerHTML = '';

  if (productosPagina.length === 0) {
    contenedorProductos.innerHTML = `
      <p class="text-center text-muted">No se encontraron productos para esta categoría</p>
    `;
    return;
  }

  productosPagina.forEach(prod => {
    const col = document.createElement('div');
    col.className = 'col-md-4 col-sm-6 mb-4';

    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}" style="height: 200px; object-fit: cover;">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${prod.nombre}</h5>
          <p class="card-text">${prod.descripcion}</p>
          <a href="#contacto" class="btn btn-dorado align-self-end">Solicitar info</a>
        </div>
      </div>
    `;

    contenedorProductos.appendChild(col);
  });
}

document.getElementById('nextPage').addEventListener('click', () => {
  const totalPaginas = Math.ceil(todosLosProductos.length / productosPorPagina);
  if (paginaActual < totalPaginas) {
    paginaActual++;
    renderizarPagina(paginaActual);
  }
});

document.getElementById('prevPage').addEventListener('click', () => {
  if (paginaActual > 1) {
    paginaActual--;
    renderizarPagina(paginaActual);
  }
});
