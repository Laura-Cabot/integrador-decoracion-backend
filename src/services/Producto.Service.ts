import { Producto } from '../models/Producto';
import { ProductoRepository } from '../repositories/ProductoRepository';
import fs from 'fs';
import path from 'path';
export class ProductoService {
  private repository = new ProductoRepository();

  obtenerTodos(): Producto[] {
    return this.repository.getAll();
  }

  obtenerPorId(id: string): Producto | undefined {
    return this.repository.getById(id);
  }

  buscarPorCategoria(categoria: string): Producto[] {
    return this.repository.searchByCategoria(categoria);
  }

  reservarProducto(id: string): boolean {
    return this.repository.reservarProducto(id);
  }
}
