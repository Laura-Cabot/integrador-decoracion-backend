import productos from '../data/productos.json';

import { Producto } from '../models/Producto';

export class ProductoService {
  private productos: Producto[] = productos;

  obtenerTodos(): Producto[] {
    return this.productos;
  }

  obtenerPorId(id: number): Producto | undefined {
    return this.productos.find(p => p.id === id);
  }

  buscarPorCategoria(categoria: string): Producto[] {
    return this.productos.filter(p => p.categoria.toLowerCase() === categoria.toLowerCase());
  }
}
