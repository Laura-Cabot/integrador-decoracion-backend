export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: string;
  imagen: string;
  precio: number;
  marca: string;
  stock: number;
  reservado?: boolean; 
}
