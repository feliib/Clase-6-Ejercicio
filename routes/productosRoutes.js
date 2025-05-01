import express from 'express';
const router = express.Router();
import { obtenerProductos, crearProducto, obtenerProductoPorId } from '../controllers/productosController.js';

router.get('/productos', obtenerProductos);
router.post('/productos', crearProducto);
router.get('/productos/:id', obtenerProductoPorId);

export default router;