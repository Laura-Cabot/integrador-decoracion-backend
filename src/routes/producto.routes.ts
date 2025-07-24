import { Router } from 'express';
import {
  getAllProductos,
  getProductoPorId,
  buscarPorCategoria,
  buscarPorTexto
} from '../controllers/Producto.Controller';

const router = Router();

router.get('/', getAllProductos);
router.get('/search', buscarPorCategoria);     // ?categoria=...
router.get('/search-text', buscarPorTexto);    // ?q=...
router.get('/:id', getProductoPorId);

export default router;





