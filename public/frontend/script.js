const API_URL = "http://localhost:3000/productos";

const filtroCategoria = document.getElementById("filtroCategoria"); //
const contenedorProductos = document.getElementById("productosContainer");
const buscador = document.getElementById("buscador");
const btnBuscar = document.getElementById("btnBuscar");
const modalInstance = new bootstrap.Modal(
  document.getElementById("detalleModal")
);

let baseProductos = [];
let listaActual = [];
let paginaActual = 1;
const productosPorPagina = 6;

window.addEventListener("DOMContentLoaded", async () => {
  try {
    const resp = await fetch(API_URL);
    baseProductos = await resp.json();
    mostrarProductos(baseProductos);
  } catch (error) {
    mostrarError("cargar productos", error);
  }
});

filtroCategoria?.addEventListener("change", async () => {
  const categoria = filtroCategoria.value.trim();
  try {
    const url = categoria
      ? `${API_URL}/search?categoria=${encodeURIComponent(categoria)}`
      : API_URL;

    const resp = await fetch(url);
    const productos = await resp.json();
    if (!categoria) {
      baseProductos = productos;
    }

    mostrarProductos(productos);
  } catch (error) {
    mostrarError("filtrar por categoría", error);
  }
});

btnBuscar?.addEventListener("click", buscar);
buscador?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    buscar();
  }
});
buscador?.addEventListener("input", () => {
  if (!buscador.value.trim()) {
    mostrarProductos(baseProductos);
  }
});

async function buscar() {
  const q = buscador.value.trim();

  try {
    const url = q
      ? `${API_URL}/search-text?q=${encodeURIComponent(q)}`
      : API_URL;

    const resp = await fetch(url);
    const productos = await resp.json();

    if (!q) {
      mostrarProductos(baseProductos);
      return;
    }

    mostrarProductos(productos);
  } catch (error) {
    console.error(error);
    mostrarProductos(baseProductos);
  }
}

function mostrarProductos(productos) {
  listaActual = productos;
  paginaActual = 1;
  renderizarPagina();
}

function renderizarPagina() {
  const inicio = (paginaActual - 1) * productosPorPagina;
  const fin = inicio + productosPorPagina;
  const productosPagina = listaActual.slice(inicio, fin);

  contenedorProductos.innerHTML = "";

  if (productosPagina.length === 0) {
    contenedorProductos.innerHTML = `
      <p class="text-center text-muted my-5">No se encontraron productos.</p>
    `;
    return;
  }

  productosPagina.forEach((prod) => {
    contenedorProductos.innerHTML += `
      <div class="col-md-4 col-sm-6 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}" style="height: 200px; object-fit: cover;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${prod.nombre}</h5>
            <p class="card-text">${prod.descripcion}</p>
            <button class="btn btn-dorado align-self-end ver-detalle" data-id="${prod.id}">
              Solicitar info
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

document.getElementById("nextPage")?.addEventListener("click", () => {
  const totalPaginas = Math.ceil(listaActual.length / productosPorPagina);
  if (paginaActual < totalPaginas) {
    paginaActual++;
    renderizarPagina();
  }
});

document.getElementById("prevPage")?.addEventListener("click", () => {
  if (paginaActual > 1) {
    paginaActual--;
    renderizarPagina();
  }
});

contenedorProductos.addEventListener("click", async (e) => {
  const boton = e.target;
  if (boton.classList.contains("ver-detalle")) {
    const id = boton.getAttribute("data-id");
    try {
      const respuesta = await fetch(`${API_URL}/${id}`);
      const producto = await respuesta.json();
      mostrarModal(producto);
    } catch (error) {
      mostrarError("cargar detalle", error);
    }
  }
});

function mostrarModal(producto) {
  const modalTitulo = document.getElementById("modalTitulo");
  const modalCuerpo = document.getElementById("modalCuerpo");

  const precioFormateado = Number(producto.precio).toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
  });

  modalTitulo.textContent = producto.nombre;
  modalCuerpo.innerHTML = `
    <div class="row">
      <div class="col-md-6">
        <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid rounded shadow-sm" />
      </div>
      <div class="col-md-6">
        <p><strong>Descripción:</strong> ${producto.descripcion}</p>
        <p><strong>Marca:</strong> ${producto.marca}</p>
        <p><strong>Precio:</strong> ${precioFormateado}</p>
        <button class="btn btn-success mt-3" id="btnReservar">
          Reservar este producto
        </button>
        <div id="mensajeReserva" class="mt-3"></div>
      </div>
    </div>
  `;

  modalInstance.show();

  document.getElementById("btnReservar").onclick = () => {
    const mensaje = document.getElementById("mensajeReserva");
    mensaje.innerHTML = `
      <div class="alert alert-success">
        <i class="bi bi-check-circle-fill"></i>
        ¡${producto.nombre} reservado con éxito!  
        <br>Completá el <a href="#contacto" class="alert-link">formulario de contacto</a>.
      </div>
    `;
  };
}

function mostrarError(accion, error = "") {
  console.error(`Error al ${accion}:`, error);
  contenedorProductos.innerHTML = `
    <p class="text-danger text-center mt-4">
      <i class="bi bi-exclamation-triangle-fill me-2"></i>
      Error al ${accion} 😢
    </p>`;
}
