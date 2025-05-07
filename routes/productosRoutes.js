import express from 'express';
const router = express.Router();
import { obtenerProductos, crearProducto, obtenerProductoPorId, eliminarProducto } from '../controllers/productosController.js';

router.get('/productos', obtenerProductos);
router.post('/productos', crearProducto);
router.get('/productos/:id', obtenerProductoPorId);
router.delete('/productos/:id', eliminarProducto); // Asegúrate de importar eliminarProducto en el controlador

export default router;