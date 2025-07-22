import { Router } from 'express';
import {
  getAllProductos,
  getProductoPorId,
  buscarPorCategoria
} from '../controllers/Producto.Controller';

const router = Router();

router.get('/', getAllProductos);
router.get('/search', buscarPorCategoria);
router.get('/:id', getProductoPorId);

export default router;



