import { Request, Response } from 'express';
import productosData from '../data/productos.json';
import { Producto } from '../models/Producto';

const productos: Producto[] = productosData as Producto[];

export const getAllProductos = (_req: Request, res: Response) => {
  res.json(productos);
};

export const getProductoPorId = (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const producto = productos.find(p => p.id === id);
  if (!producto) return res.status(404).json({ mensaje: 'Producto no encontrado' });
  res.json(producto);
};

export const buscarPorCategoria = (req: Request, res: Response) => {
  const categoria = (req.query.categoria as string)?.toLowerCase();
  if (!categoria) return res.status(400).json({ mensaje: 'Falta el parámetro categoria' });

  const filtrados = productos.filter(p => p.categoria.toLowerCase() === categoria);
  res.json(filtrados);
};


export const buscarPorTexto = (req: Request, res: Response) => {
  const q = (req.query.q as string)?.toLowerCase() || '';
  if (!q) return res.json(productos); 

  const filtrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(q) ||
    p.descripcion.toLowerCase().includes(q) ||
    p.marca.toLowerCase().includes(q)
  );

  res.json(filtrados);
};
