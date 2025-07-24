import fs from 'fs';
import path from 'path';
import { Producto } from '../models/Producto';

const rutaArchivo = path.join(__dirname, '../data/productos.json');

export class ProductoRepository {
  getAll(): Producto[] {
    const data = fs.readFileSync(rutaArchivo, 'utf-8');
    return JSON.parse(data);
  }

  getById(id: string): Producto | undefined {
    const data = fs.readFileSync(rutaArchivo, 'utf-8');
    const productos: Producto[] = JSON.parse(data);
    return productos.find(p => p.id === parseInt(id));
  }

  searchByCategoria(categoria: string): Producto[] {
    const data = fs.readFileSync(rutaArchivo, 'utf-8');
    const productos: Producto[] = JSON.parse(data);
    return productos.filter(p => p.categoria.toLowerCase() === categoria.toLowerCase());
  }

  reservarProducto(id: string): boolean {
    const data = fs.readFileSync(rutaArchivo, 'utf-8');
    const productos: Producto[] = JSON.parse(data);
    const producto = productos.find(p => p.id === parseInt(id));

    if (!producto) return false;

    producto.reservado = true;
    fs.writeFileSync(rutaArchivo, JSON.stringify(productos, null, 2));
    return true;
  }
}
