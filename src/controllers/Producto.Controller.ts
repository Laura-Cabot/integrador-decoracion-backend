import { Request, Response } from 'express';

const productos = require('../data/productos.json');

export const getAllProductos = (req: Request, res: Response) => {
  res.json(productos);
};

export const getProductoPorId = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const producto = productos.find((p: any) => p.id === id);

  if (producto) {
    res.json(producto);
  } else {
    res.status(404).json({ mensaje: 'Producto no encontrado' });
  }
};

export const buscarPorCategoria = (req: Request, res: Response) => {
  const categoria = req.query.categoria?.toString().toLowerCase();

  if (!categoria) {
    return res.status(400).json({ mensaje: 'Falta la categoría' });
  }

  const filtrados = productos.filter((p: any) => {
    const cat = (p.categoria || '').toString().toLowerCase();
    return cat === categoria;
  });

  res.json(filtrados);
};




